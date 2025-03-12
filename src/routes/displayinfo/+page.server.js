//import { pdfPrint } from '$lib/components/pdf';
import getSupaData from '$lib/supabaseData';
import getSupaInfo from '$lib/supabaseInfo';
import getPagination from '$lib/supabasePagination';
import getPaginationInfo from '$lib/supabasePaginationInfo';
//import { data } from 'autoprefixer';

export const load = async () => {
    const data = await getSupaInfo();
    const table = await getPaginationInfo(1, 5);

    console.log('Get the data for table: ', data);

    return {
        supaData: data,
        pagination: table,
    };
};
