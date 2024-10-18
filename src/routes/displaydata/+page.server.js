//import { pdfPrint } from '$lib/components/pdf';
import getSupaData from '$lib/supabaseData';
import getPagination from '$lib/supabasePagination';
//import { data } from 'autoprefixer';

export const load = async () => {
    const data = await getSupaData();
    const table = await getPagination(1, 5);

    //execute store data in file

    return {
        supaData: data,
        pagination: table,
    };
};
