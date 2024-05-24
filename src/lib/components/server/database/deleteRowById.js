import deleteRowiD from '$lib/components/database/deleteRecord';
import { redirect } from '@sveltejs/kit';

/**
 * @param { any } id
 */

export default async function deleteRowByiD(id) {
    deleteRowiD(id);

    console.log(`Record ${id} was deleted from the record`);

    redirect(300, '/');

    return;
}
