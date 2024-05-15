import supabase from '$lib/supabase';

/**
 * @param {{ data: any; }} url
 */
export async function GET(url) {
    // @ts-ignore
    const requestedData = url.url.searchParams;
    const id = requestedData.get('id');

    const { data } = await supabase
        .from('attendancetest')
        .select()
        .eq('id', id);

    const result = JSON.stringify(data);

    return new Response(result);
}
