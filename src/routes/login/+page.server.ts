import { redirect, fail } from "@sveltejs/kit";

export const load = async ({ locals, url }) => {
    if (locals.session) throw redirect(303, url.searchParams.get('redirect') ?? '/dashboard');
};

export const actions = {
    default: async ({ request, locals }) => {
        const form = await request.formData();
        const email = String(form.get('email' || ''));
        const password = String(form.get('password' || ''));

        const { error } = await locals.supabase.auth.signInWithPassword({ email, password });
        if (error) return fail(400, { error: error.message });

        throw redirect(303, '/dashboard');

    }
};