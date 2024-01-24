import getSupaData from '$lib/supabaseData';
import { data } from 'autoprefixer';

export const load = async () => {
    const data = await getSupaData();
    
    //execute store data in file

    // console.log('The data in the load function: ', data);

    return {
        supaData: data,
    };
};