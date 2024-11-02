//import { pdfPrint } from '$lib/components/pdf';
import getSupaData from '$lib/supabaseData';
import getPagination from '$lib/supabasePagination';
//import { data } from 'autoprefixer';

export const load = async () => {
    const data = await getSupaData();
    const table = await getPagination(1, 5);

    console.log('Get the data for table: ', data);

    return {
        supaData: data,
        pagination: table,
    };
};
