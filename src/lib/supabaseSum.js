import supabase from './supabase';
import { ATTENDANCE_TABLE, dbProdcution } from './utils/dbTables';

async function getSupaSum() {
    const { data, error } = await supabase
        .from(ATTENDANCE_TABLE)
        .select('id, date, total_amount');

    if (error) {
        throw error;
    }

    return data;
}

export default getSupaSum;
