import { goto } from '$app/navigation';
import { ATTENDANCE_TABLE } from '$lib/utils/dbTables';
import supabase from '../../../supabase';

/**
 * @param { any } id
 */
export default async function getRowiD(id) {
    // Define DB Data Format
    const person = {
        id: null,
        date: null,
        amount: null,
        name: null,
        amount_kids: null,
        amount_kids_leader: null,
        created_at: new Date(),
    };

    const { data } = await supabase.from(ATTENDANCE_TABLE).select().eq('id', id);

    const result = JSON.stringify(data);

    if (!data) return person;

    person.id = data[0].id;
    person.date = data[0].date;
    person.amount = data[0].amount;
    person.name = data[0].name;
    person.amount_kids = data[0].amount_kids;
    person.amount_kids_leader = data[0].amount_kids_leader;
    person.created_at = new Date(data[0].created_at);

    console.log('The data from the id: ', result);

    return person;
}
