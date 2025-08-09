import { createServerClient } from "@supabase/ssr";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from "$env/static/public";
import { SUPABASE_SERVICE_ROLE } from "$env/static/private";
import { dev } from "$app/environment";
import type { RequestEvent } from '@sveltejs/kit'

export function supabaseServer(event: RequestEvent) {
    const { cookies, fetch } = event;

    return createServerClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
        cookies: {
            get: (key) => cookies.get(key),
            set: (key, value, options) =>
                cookies.set(key, value, {
                    ...options,
                    httpOnly: true,
                    sameSite: "lax",
                    secure: !dev,
                    path: "/",
                }),
            remove: (key, options) =>
                cookies.delete(key, { ...options, path: "/" }),
        },
        auth: { persistSession: true },
        fetch
    });
}

export function supabaseAdmin() {
    return createSupabaseClient(PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE, {
        auth: { persistSession: false }
    });
}