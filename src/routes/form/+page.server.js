import supabase from '$lib/supabase';

const todayDate = new Date();

export const actions = {
    default: async ({ request }) => {
        const insertData = await request.formData()
        const obj = Object.fromEntries(insertData.entries());

        console.log(obj);

        
        const actDate = obj.date;
        const actNumber = obj.number;
        const actName = obj.name;
        const actRate = obj.accurate;

        
        console.log('Submitted date: ',todayDate, 'Sumbmitter name: ', actName);
        
        const { error } = await supabase
        .from('attendance')
        .insert({ date: actDate, amount: actNumber, name: actName, accurate: actRate})

        if(error) {
            throw error;
          };

          console.log(error);

        return error;
    },
}

