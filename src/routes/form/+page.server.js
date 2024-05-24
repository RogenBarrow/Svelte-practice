import sumOfAll from '$lib/sum.js';
import supabase from '$lib/supabase';

const todayDate = new Date();

export const actions = {
    default: async ({ request }) => {
        const insertData = await request.formData();
        const obj = Object.fromEntries(insertData.entries());

        console.log(obj);

        const actDate = obj.date;
        const actNumber = obj.number;
        const actNumberKids = obj.numberkids;
        const actNumberKidsleaders = obj.numberkidsleaders;
        const actName = obj.name;
        const actRate = obj.accurate;

        console.log(
            'Submitted date: ',
            todayDate,
            'Sumbmitter name: ',
            actName
        );

        const amount = sumOfAll(actNumber, actNumberKids, actNumberKidsleaders);

        console.log('this is the amount: ', amount);

        const { error } = await supabase.from('attendance').insert({
            date: actDate,
            amount: actNumber,
            amount_kids: actNumberKids,
            amount_kids_leader: actNumberKidsleaders,
            total_amount: amount,
            name: actName,
            accurate: actRate,
        });

        if (error) {
            throw error;
        }

        console.log(error);

        return error;
    },
};
