<script lang="ts">
    import { AppShell } from '@skeletonlabs/skeleton';
    import '../app.pcss';
    import img from '$lib/img/Arise.png';
    import { LightSwitch } from '@skeletonlabs/skeleton';
</script>

<AppShell>
    <nav class="bg-white justify-center">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class="relative flex h-16 items-center justify-between">
                <div
                    class="absolute inset-y-0 left-0 flex items-center sm:hidden"
                >
                    <!-- Mobile menu button-->
                    <button
                        type="button"
                        class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        aria-controls="mobile-menu"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="sr-only">Open main menu</span>
                        <!-- Icons: Menu closed (default) and open -->
                        <svg
                            class="block h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                        <svg
                            class="hidden h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
                <div
                    class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
                >
                    <div class="flex flex-shrink-0 items-center">
                        <img class="h-8 w-auto" src={img} alt="Your Company" />
                    </div>
                    <div class="hidden sm:ml-6 sm:block">
                        <div class="flex space-x-4">
                            <a
                                href="/"
                                class="text-purple-950 rounded-md px-3 py-2 text-base font-bold"
                                aria-current="page">Home</a
                            >
                            <a
                                href="/form"
                                class="text-purple-950 rounded-md px-3 py-2 text-base font-bold"
                                >Submit Attendance</a
                            >
                            <a
                                href="/displaydata"
                                class="text-purple-950 rounded-md px-3 py-2 text-base font-bold"
                                >Report</a
                            >
                        </div>
                    </div>
                    <div class=" flex flex-right items-right"></div>
                </div>
                <div
                    class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
                >
                    <!-- Profile dropdown (optional) -->
                </div>
            </div>
        </div>
        <!-- Mobile menu, hidden by default -->
        <div class="sm:hidden hidden" id="mobile-menu">
            <div class="space-y-1 px-2 pb-3 pt-2">
                <a
                    href="/"
                    class="text-purple-950 rounded-md px-3 py-2 text-base font-bold ml-10"
                    aria-current="page">Home</a
                >
                <a
                    href="/form"
                    class="text-purple-950 rounded-md px-3 py-2 text-base font-bold"
                    >Submission Form</a
                >
                <a
                    href="/displaydata"
                    class="text-purple-950 rounded-md px-3 py-2 text-base font-bold"
                    >Report</a
                >
            </div>
        </div>
        <script lang="ts">
            document.addEventListener('DOMContentLoaded', () => {
                const mobileMenuButton = document.querySelector(
                    '[aria-controls="mobile-menu"]'
                )!;
                const mobileMenu = document.getElementById('mobile-menu')!;
                const svgIcons = mobileMenuButton.querySelectorAll('svg');
                const mobileMenuLinks = mobileMenu.querySelectorAll('a');

                const toggleMenu = () => {
                    const isExpanded =
                        mobileMenuButton.getAttribute('aria-expanded') ===
                        'true';
                    mobileMenuButton.setAttribute(
                        'aria-expanded',
                        String(!isExpanded)
                    );
                    mobileMenu.classList.toggle('hidden');
                    svgIcons.forEach((icon) => icon.classList.toggle('hidden'));
                };

                mobileMenuButton.addEventListener('click', toggleMenu);

                mobileMenuLinks.forEach((link) => {
                    link.addEventListener('click', () => {
                        if (!mobileMenu.classList.contains('hidden')) {
                            toggleMenu();
                        }
                    });
                });
            });
        </script>
    </nav>

    <slot />
</AppShell>
