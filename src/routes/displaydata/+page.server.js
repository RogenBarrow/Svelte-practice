//import { pdfPrint } from '$lib/components/pdf';
import getSupaData from '$lib/supabaseData';
import getPagination from '$lib/supabasePagination';
//import { data } from 'autoprefixer';

export const load = async () => {
    const data = await getSupaData();
    // Fetch the first 5 rows (indices 0..4 inclusive)
    const table = await getPagination(0, 4);

    console.log('Get the data for table: ', data);

    return {
        supaData: data,
        pagination: table,
    };
};
