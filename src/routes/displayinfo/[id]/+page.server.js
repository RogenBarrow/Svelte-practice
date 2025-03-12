import { error, redirect } from '@sveltejs/kit';
import getRowiD from '../../../lib/components/server/database/getRowId';
import supabase from '$lib/supabase';
import sumOfAll from '$lib/sum';

export async function load({ url, params }) {
    const id = params.id;

    const data = await getRowiD(id);

    return data;
}

export const actions = {
    default: async ({ request, params }) => {
        const insertData = await request.formData();
        const obj = Object.fromEntries(insertData.entries());

        console.log(obj);

        const id = params.id;
        const date = obj.date;
        const preacher = obj.preacher;
        const title = obj.title;
        const description = obj.description;

        console.log('The object data: ', obj, insertData);

        const { error } = await supabase
            .from('attendancetest')
            .update({
                date: date,
                preacher: preacher,
                title: title,
                description: description,
            })
            .eq('id', id);

        if (error) {
            console.error('Error deleting record:', error);
            return { success: false, error: error.message };
        }

        throw redirect(303, '/'); // Redirect to the home page
    },
};
