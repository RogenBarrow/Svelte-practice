import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import supabase from '$lib/supabase';
import type { FormatDatabaseData } from '../../../types';

interface QueryParams {
    page?: string;
    limit?: string;
    sort?: string;
    order?: string;
    search?: string;
    dateFrom?: string;
    dateTo?: string;
}

export const GET: RequestHandler = async ({ url }) => {
    try {
        const searchParams = url.searchParams;
        const params: QueryParams = {
            page: searchParams.get('page') || '1',
            limit: searchParams.get('limit') || '10',
            sort: searchParams.get('sort') || 'date',
            order: searchParams.get('order') || 'desc',
            search: searchParams.get('search') || '',
            dateFrom: searchParams.get('dateFrom') || '',
            dateTo: searchParams.get('dateTo') || ''
        };

        const page = parseInt(params.page || '1');
        const limit = parseInt(params.limit || '10');
        const offset = (page - 1) * limit;

        // Build the query
        let query = supabase
            .from('attendancetest')
            .select('*', { count: 'exact' });

        // Apply search filter
        if (params.search) {
            query = query.or(`name.ilike.%${params.search}%,date.ilike.%${params.search}%`);
        }

        // Apply date range filter
        if (params.dateFrom) {
            query = query.gte('date', params.dateFrom);
        }
        if (params.dateTo) {
            query = query.lte('date', params.dateTo);
        }

        // Apply sorting
        const sortField = params.sort || 'date';
        const sortOrder = params.order || 'desc';
        query = query.order(sortField, { ascending: sortOrder === 'asc' });

        // Apply pagination
        query = query.range(offset, offset + limit - 1);

        const { data, error, count } = await query;

        if (error) {
            return json(
                { error: 'Failed to fetch data', details: error.message },
                { status: 500 }
            );
        }

        const totalPages = Math.ceil((count || 0) / limit);

        return json({
            data: data as FormatDatabaseData[],
            pagination: {
                page,
                limit,
                total: count || 0,
                totalPages,
                hasNext: page < totalPages,
                hasPrev: page > 1
            }
        });

    } catch (error) {
        console.error('API Error:', error);
        return json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}; 