
import deleteViewsRowByiD from '$lib/components/server/database/deleteViewRowById';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
    const body = await request.json();
    const id = body?.id;
    if (!id) {
        return new Response('Missing id', { status: 400 });
    }

    try {
        await deleteViewsRowByiD(id);
        return new Response(null, { status: 204 });
    } catch (err) {
        console.error('Delete error', err);
        return new Response('Server error', { status: 500 });
    }
}
