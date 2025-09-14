import supabase from '$lib/supabase';
import { ATTENDANCE_TABLE } from '$lib/utils/dbTables';
import { redirect } from '@sveltejs/kit';

/**
 * @param {any} id
 */
export default async function deleteRowiD(id) {
    const { data } = await supabase.from(ATTENDANCE_TABLE).delete().eq('id', id);

    const result = JSON.stringify(data);

    redirect(300, '/');

    console.log('The data from the id has been deleted: ', result);

    return result;
}
