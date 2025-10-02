//import { pdfPrint } from '$lib/components/pdf';
import getPagination from '$lib/supabasePagination';
import getSupaViews from '$lib/supabaseViews';
//import { data } from 'autoprefixer';

export const load = async () => {
    const data = await getSupaViews();

    return {
        supaData: data,
    };
};
