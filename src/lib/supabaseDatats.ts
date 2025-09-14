import type { FormatDatabaseData } from '../types';
import supabase from './supabase';
import { ATTENDANCE_TABLE } from './utils/dbTables';

async function getSupaData() {
    const { data, error } = await supabase
        .from(ATTENDANCE_TABLE)
        .select()
        .returns<FormatDatabaseData[]>();

    if (error) {
        throw error;
    }

    return data;
}

console.log('This is the function: ', getSupaData);

export default getSupaData;
