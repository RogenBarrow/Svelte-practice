import supabase from '$lib/supabase';
import { VIEW_TABLE } from '$lib/utils/dbTables';

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ request }) => {
        const insertData = await request.formData();
        const obj = Object.fromEntries(insertData.entries());



        const actDate = obj.date;
        const actNumber = obj.number;
        const actViews = obj.views;


        const { error } = await supabase.from(VIEW_TABLE).insert({
            date: actDate,
            peak: actNumber,
            views: actViews
        });

        if (error) {
            throw console.error(error);
        }

        return error;
    },
};
