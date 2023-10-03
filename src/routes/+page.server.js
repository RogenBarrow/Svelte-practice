//import sql from '$lib/db.js';
import sql from '$lib/db.js';


export const actions = {
    default: async ({ request }) => {
        const data = await request.formData()
        const obj = Object.fromEntries(data.entries());

        
        const fName = obj.firstname;
        const lName = obj.lastname;
        const eMail = obj.email;
        
        console.log(Date(), + obj);

        // @ts-ignore
        const addInfo = await sql`
        insert into info
            ("firstname", "lastname", "email")
            values
            (${fName}, ${lName}, ${eMail})
        `
        return addInfo;
    },
}
