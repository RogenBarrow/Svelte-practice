import type { FormatDatabaseData } from '../types';
import supabase from './supabase';

async function getSupaData() {
    const { data, error } = await supabase
        .from('attendancetest')
        .select()
        .returns<FormatDatabaseData[]>();

    if (error) {
        throw error;
    }

    return data;
}

export default getSupaData; 