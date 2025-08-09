import type { Handle } from "@sveltejs/kit";
import { supabaseServer } from "$lib/server/supabase";

export const handle: Handle = async ({ event, resolve }) => {
    const supabase = supabaseServer(event);
    const { data: { session } } = await supabase.auth.getSession();
    event.locals.session = session ?? null;
    event.locals.user = session?.user ?? null;
    event.locals.supabase = supabase;
    return resolve(event);
};