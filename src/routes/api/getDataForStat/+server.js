import getSupaSum from '$lib/supabaseSum';

/** @type {import('./$types').RequestHandler} */
export async function GET() {
    const data = await getSupaSum();
    console.log('This is what the get will send: ', data);

    return new Response(JSON.stringify(data));
}
