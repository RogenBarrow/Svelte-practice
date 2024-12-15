import sumOfAll from '$lib/sum.js';
import supabase from '$lib/supabase';

const todayDate = new Date();

export const actions = {
    default: async ({ request }) => {
        const insertData = await request.formData();
        const obj = Object.fromEntries(insertData.entries());

        console.log(obj);

        const date = obj.date;
        const preacher = obj.preacher;
        const title = obj.title;

        // const actDate = obj.date;
        // const actNumber = obj.number;
        // const actNumberKids = obj.numberkids;
        // const actNumberKidsleaders = obj.numberkidsleaders;
        // const actName = obj.name;
        // const actRate = obj.accurate;

        console.log('Submitted date: ', todayDate, 'preacher: ', preacher);

        const { error } = await supabase.from('info_sirbishi_test').insert({
            date: date,
            preacher: preacher,
            title: title,
        });

        if (error) {
            throw error;
        }

        console.log(error);

        return error;
    },
};
