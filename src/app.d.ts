declare namespace App {
    interface Locals {
        session: import('@supabase/supabase-js').Session | null;
        user: import('@supabase/supabase-js').User | null;
        supabase: ReturnType<typeof import('$lib/server/supabase').supabaseServer>;
    }
}
