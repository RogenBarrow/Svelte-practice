import { goto } from '$app/navigation';
import { ATTENDANCE_TABLE, VIEW_TABLE } from '$lib/utils/dbTables';
import supabase from '../../../supabase';

/**
 * @param { any } id
 */
export default async function getRowIdViews(id) {
    // Define DB Data Format
    const person = {
        id: null,
        date: null,
        peak: null,
        views: null,
        created_at: new Date(),
    };

    const { data } = await supabase.from(VIEW_TABLE).select().eq('id', id);

    const result = JSON.stringify(data);

    if (!data) return person;

    person.id = data[0].id;
    person.date = data[0].date;
    person.peak = data[0].peak;
    person.views = data[0].views;
    person.created_at = new Date(data[0].created_at);

    console.log('The data from the id: ', result);

    return person;
}
