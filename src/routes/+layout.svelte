<script lang="ts">
    import { AppShell } from '@skeletonlabs/skeleton';
    import '../app.pcss';
    import img from '$lib/img/Arise.png';
    import { LightSwitch } from '@skeletonlabs/skeleton';
    import BottomBar from '$lib/components/bottomBar.svelte';
    import { page } from '$app/stores';

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/form', label: 'Submit Attendance' },
        { href: '/displaydata', label: 'Report' },
    ];

    let mobileOpen = false;
    const toggleMobile = () => (mobileOpen = !mobileOpen);
    const closeMobile = () => (mobileOpen = false);
</script>

<AppShell>
    <nav
        class="sticky top-0 z-30 backdrop-blur bg-white/80 shadow-sm border-b border-white/40"
    >
        <div class="flex h-16 items-center px-4 sm:px-6 lg:px-8">
            <a class="flex items-center gap-3" href="/">
                <img class="h-9 w-auto" src={img} alt="Arise Education" />
            </a>

            <button
                class="ml-auto flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-slate-600 transition hover:border-slate-300 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-purple-400 sm:hidden"
                aria-label="Toggle navigation"
                on:click={toggleMobile}
            >
                <svg
                    class:hidden={mobileOpen}
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.6"
                        d="M4 6h12M4 10h12M4 14h12"
                    />
                </svg>
                <svg
                    class:hidden={!mobileOpen}
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.6"
                        d="M6 6l8 8M6 14L14 6"
                    />
                </svg>
            </button>

            <div class="hidden flex-1 items-center sm:ml-10 sm:flex">
                <div class="flex items-center gap-6">
                    {#each navLinks as link}
                        <a
                            href={link.href}
                            class="relative text-sm font-medium tracking-wide transition hover:text-purple-600"
                            class:text-purple-600={$page.url.pathname === link.href}
                        >
                            {link.label}
                            {#if $page.url.pathname === link.href}
                                <span
                                    class="absolute inset-x-0 -bottom-2 h-0.5 rounded-full bg-gradient-to-r from-purple-400 to-purple-600"
                                ></span>
                            {/if}
                        </a>
                    {/each}
                </div>
                <LightSwitch class="ml-auto" />
            </div>
        </div>

        {#if mobileOpen}
            <div
                class="border-t border-slate-200 bg-white/95 px-4 pb-4 pt-3 shadow-sm sm:hidden"
            >
                {#each navLinks as link}
                    <a
                        href={link.href}
                        class="block rounded-md px-3 py-2 text-base font-semibold text-slate-700 transition hover:bg-slate-100"
                        class:bg-purple-50={$page.url.pathname === link.href}
                        on:click={closeMobile}
                    >
                        {link.label}
                    </a>
                {/each}
                <div class="mt-3 flex justify-start">
                    <LightSwitch class="justify-start" />
                </div>
            </div>
        {/if}
    </nav>

    <slot />
    <BottomBar />
</AppShell>
