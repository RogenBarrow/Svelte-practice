import { error, redirect } from '@sveltejs/kit';
import supabase from '$lib/supabase';
import sumOfAll from '$lib/sum';
import { ATTENDANCE_TABLE, VIEW_TABLE } from '$lib/utils/dbTables';
import getRowIdViews from '$lib/components/server/database/getRowIdViews';

export async function load({ url, params }) {
    const id = params.id;

    const data = await getRowIdViews(id);

    return data;
}

export const actions = {
    default: async ({ request, params }) => {
        const insertData = await request.formData();
        const obj = Object.fromEntries(insertData.entries());

        const id = obj.id;
        const actPeak = obj.number;
        const actViews = obj.views;



        console.log('The object data: ', actPeak, actViews);

        const { error } = await supabase
            .from(VIEW_TABLE)
            .update({
                peak: actPeak,
                views: actViews,

            })
            .eq('id', id);

        if (error) {
            console.error('Error updating record:', error);
            return { success: false, error: error.message };
        }

        throw redirect(303, '/'); // Redirect to the home page
    },
};
