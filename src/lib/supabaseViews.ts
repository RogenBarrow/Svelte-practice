import type { FormatDatabaseData } from '../types';
import supabase from './supabase';
import { VIEW_TABLE } from './utils/dbTables';

async function getSupaData() {
    const { data, error } = await supabase
        .from(VIEW_TABLE)
        .select()
        .returns<FormatDatabaseData[]>();

    if (error) {
        throw error;
    }

    return data;
}


export default getSupaData;
