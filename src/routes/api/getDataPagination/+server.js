//import getPagination from '$lib/supabasePagination';

/** @type {import('./$types').RequestHandler} */
export async function GET({ request }) {
    const body = request.body;
    console.log('The request data: ', request);
    console.log('The request data: ', body);

    // const page = Number(request);
    // const number = Number(request.body);
    // const data = await getPagination(page, number);
    // console.log('This is the request data:', page);
    // console.log('This is what the get will send: ', data);

    return new Response();
}
