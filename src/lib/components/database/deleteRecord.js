import supabase from '$lib/supabase';
import { redirect } from '@sveltejs/kit';

/**
 * @param {any} id
 */
export default async function deleteRowiD(id) {
    const { data } = await supabase.from('attendance').delete().eq('id', id);

    const result = JSON.stringify(data);

    redirect(300, '/');

    console.log('The data from the id has been deleted: ', result);

    return result;
}
