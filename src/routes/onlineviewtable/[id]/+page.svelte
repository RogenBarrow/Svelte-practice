<script>
    import { goto } from '$app/navigation';
    import deleteViewRowByIdAsync from '$lib/services/deleteViewRowByIdAsync.js';
    import { error } from '@sveltejs/kit';

    export let data;

    /**
     * @param {{ preventDefault: () => void; }} event
     */
    async function handleSubmit(event) {
        event.preventDefault();

        try {
            await deleteViewRowByIdAsync(data.id);
            goto('/');
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    }
</script>

<div class="flex justify-center mt-10">
    <main class="">
        <form method="post">
            <h1 class="text-center">Livestream views registration</h1>
            <!-- Hidden ID field for server action -->
            <input type="hidden" name="id" bind:value={data.id} />
            <!-- Grid -->
            <div>
                <!-- Markup example 1: input is inside label -->
                <label class="object-center label" for="date"
                    >Date
                    <input
                        disabled
                        class="input bg-white"
                        title="Input (date)"
                        type="date"
                        name="date"
                        bind:value={data.date}
                        required
                    />
                </label>

                <label class="label">
                    <span>Peak concurrents</span>
                    <input
                        class="input bg-white"
                        title="Input (number)"
                        type="number"
                        name="number"
                        bind:value={data.peak}
                        required
                    />
                </label>

                <label class="label">
                    <span> Views</span>
                    <input
                        class="input bg-white"
                        title="Input (number)"
                        type="number"
                        name="views"
                        bind:value={data.views}
                        required
                    />
                </label>

                <!-- Button -->
                <button
                    class="btn variant-filled bg-primary-500 mt-5"
                    type="submit"
                    id="submitform">Edit Record</button
                >
                <button
                    class="btn variant-filled bg-primary-500 mt-5"
                    type="button"
                    id="submitform"
                    on:click={handleSubmit}>Delete Record</button
                >
            </div>
        </form>
    </main>
</div>
