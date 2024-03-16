//import { pdfPrint } from '$lib/components/pdf';
import getSupaData from '$lib/supabaseData';
//import { data } from 'autoprefixer';

export const load = async () => {
    const data = await getSupaData();

    //execute store data in file

    return {
        supaData: data,
    };
};
