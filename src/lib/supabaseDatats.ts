import type { FormatDatabaseData } from '../types';
import supabase from './supabase';

async function getSupaData() {
    const { data, error } = await supabase
        .from('attendance')
        .select()
        .returns<FormatDatabaseData[]>();

    if (error) {
        throw error;
    }

    return data;
}

console.log('This is the function: ', getSupaData);

export default getSupaData;
