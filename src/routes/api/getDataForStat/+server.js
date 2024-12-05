import getSupaSum from '$lib/supabaseSum';

export async function GET() {
    const data = await getSupaSum();
    console.log('This is what the get will send: ', data);

    return new Response(JSON.stringify(data));
}
