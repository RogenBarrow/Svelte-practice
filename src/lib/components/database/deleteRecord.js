import supabase from '$lib/supabase';
import { ATTENDANCE_TABLE } from '$lib/utils/dbTables';

/**
 * @param {any} id
 */
export default async function deleteRowiD(id) {
    const { data, error } = await supabase.from(ATTENDANCE_TABLE).delete().eq('id', id).select();
    if (error) {
        throw error;
    }
    return data;
}
