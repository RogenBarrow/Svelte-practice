import type { FormatDatabaseData } from '../types';
import supabase from './supabase';

async function getSupaDataPdf() {
    const { data, error } = await supabase
        .from('attendance')
        .select('date,amount,amount_kids,amount_kids_leader,total_amount,name')
        .returns<FormatDatabaseData[]>();

    if (error) {
        throw error;
    }

    //const getSupaData = data;

    // console.log('This is the data: ', data);
    // console.error('This is the error: ', error);

    return data;
}

//console.log('This is the function: ', getSupaData);

export default getSupaDataPdf;
