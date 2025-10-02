import getSupaData from '$lib/supabaseData.js';
import getPagination from '$lib/supabasePagination';

export async function load({ url }) {
    // Get parameters from URL
    const page = Number(url.searchParams.get('page') ?? '1');
    const limit = Number(url.searchParams.get('limit') ?? '5');

    // Calculate pagination range
    const from = (page - 1) * limit;
    const to = from + limit - 1;

    console.log('Page:', page);
    console.log('Limit:', limit);
    console.log('From:', from, 'To:', to);

    const data = await getPagination(from, to);
    const tableData = await getSupaData();

    return {
        supaData: data,
        table: tableData,
        pageTable: page,
        amountTable: limit,
    };
}
