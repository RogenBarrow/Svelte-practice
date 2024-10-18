import getSupaData from '$lib/supabaseData.js';
import getPagination from '$lib/supabasePagination';

export async function load({ url, params, route }) {
    console.log('The url params:', url);
    console.log('This is the params: ', params);
    console.log('This is the route: ', route);

    const from = Number(url.searchParams.get('from'));
    const to = Number(url.searchParams.get('to'));

    // Extract the actual query string from the `page` key
    const queryString = url.searchParams;

    // Use URLSearchParams to parse the extracted query string
    const searchParams = new URLSearchParams(queryString);

    // Extract the values
    const pageStr = searchParams.get('from'); // Should be '1'
    const amountStr = searchParams.get('to'); // Should be '5'

    // Convert to numbers
    const page = Number(pageStr);
    const amount = Number(amountStr);

    //The log of url data
    console.log('Page:', page); // 1
    console.log('Amount:', amount); // 5

    // const page = Number(params.page);
    // console.log('The url params:', page);

    const data = await getPagination(page, amount);

    const tableData = await getSupaData();

    return {
        supaData: data,
        table: tableData,
        pageTable: page,
        amountTable: amount,
    };
}
