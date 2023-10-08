//import sql from '$lib/db.js';
import sql from '$lib/db.js';

const todayDate = new Date();

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData()
        const obj = Object.fromEntries(data.entries());

        console.log(obj);

        
        const actDate = obj.date;
        const actNumber = obj.number;
        const actName = obj.name;
        const actRate = obj.accurate;

        
        console.log('Submitted date: ',todayDate, 'Sumbmitter name: ', actName);
        
        //@ts-ignore
        const addNumber = await sql`
        insert into attendance
        ("date", "amount", "name", "accurate")
        values
        (${actDate}, ${actNumber}, ${actName}, ${actRate})
        `
        return addNumber;
    },
}

