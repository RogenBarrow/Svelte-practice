import type { FormatDatabaseData } from '../../types';

export interface PaginationResponse {
    data: FormatDatabaseData[];
    pagination: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
        hasNext: boolean;
        hasPrev: boolean;
    };
}

export interface DataQueryParams {
    page?: number;
    limit?: number;
    sort?: string;
    order?: 'asc' | 'desc';
    search?: string;
    dateFrom?: string;
    dateTo?: string;
}

export class DataService {
    private static async makeRequest(params: DataQueryParams): Promise<PaginationResponse> {
        const searchParams = new URLSearchParams();

        if (params.page) searchParams.set('page', params.page.toString());
        if (params.limit) searchParams.set('limit', params.limit.toString());
        if (params.sort) searchParams.set('sort', params.sort);
        if (params.order) searchParams.set('order', params.order);
        if (params.search) searchParams.set('search', params.search);
        if (params.dateFrom) searchParams.set('dateFrom', params.dateFrom);
        if (params.dateTo) searchParams.set('dateTo', params.dateTo);

        const response = await fetch(`/api/getDataPagination?${searchParams.toString()}`);

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
        }

        return response.json();
    }

    static async getAttendanceData(params: DataQueryParams = {}): Promise<PaginationResponse> {
        return this.makeRequest(params);
    }

    static async deleteRecord(id: number): Promise<void> {
        const response = await fetch(`/api/deleteRowId/${id}`, {
            method: 'DELETE'
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.error || `Failed to delete record: ${response.status}`);
        }
    }

    static async exportData(params: DataQueryParams = {}): Promise<FormatDatabaseData[]> {
        // For export, we want all data without pagination
        const exportParams = { ...params, limit: 1000, page: 1 };
        const response = await this.makeRequest(exportParams);
        return response.data;
    }
} 