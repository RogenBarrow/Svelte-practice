import supabase from './supabase';
import { ATTENDANCE_TABLE } from './utils/dbTables';

/**
 * * @param {Number} [from]
 * * @param {number} [to]
 */

async function getPagination(from, to) {
    const { data, error } = await supabase
        .from(ATTENDANCE_TABLE)
        .select()
        .range(from, to)
        .order('id', { ascending: true });

    if (error) {
        throw error;
    }

    //const getSupaData = data;

    // console.log('This is the data: ', data);
    // console.error('This is the error: ', error);

    return data;
}

export default getPagination;
