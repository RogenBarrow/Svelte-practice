import supabase from './supabase';
import { dbProdcution } from './utils/dbTables';

async function getSupaSum() {
    const { data, error } = await supabase
        .from('attendance')
        .select('id, date, total_amount');

    if (error) {
        throw error;
    }

    return data;
}

export default getSupaSum;
