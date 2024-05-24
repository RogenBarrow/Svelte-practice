import deleteRowByiD from '$lib/components/server/database/deleteRowById';

import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
    //const body = JSON.parse(req.body);
    //console.log(request);
    const id = await request.json();
    console.log('This is the ID: ', id);

    deleteRowByiD(id);

    return new Response('test');
}
