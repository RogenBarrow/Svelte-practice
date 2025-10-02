import getSupaSum from '$lib/supabaseSum';

export async function GET() {
    const data = await getSupaSum();

    return new Response(JSON.stringify(data));
}
