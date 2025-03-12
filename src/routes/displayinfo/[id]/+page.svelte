<script>
    import { goto } from '$app/navigation';
    import deleteUserRowByIdAsync from '$lib/services/deleteUserRowByIdAsync.js';

    export let data;

    /**
     * @param {{ preventDefault: () => void; }} event
     */
    async function handleSubmit(event) {
        event.preventDefault();

        try {
            deleteUserRowByIdAsync(data.id);
            goto('/');
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    }
</script>

<html lang="en">
    <body class="w-screen">
        <div class="flex justify-center mt-10">
            <main class="">
                <form method="post">
                    <h1 class="text-center">Arise Attendance Submission</h1>
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
                            <span>Attandence in Church</span>
                            <input
                                class="input bg-white"
                                title="Input (number)"
                                type="number"
                                name="number"
                                bind:value={data.amount}
                                required
                            />
                        </label>

                        <label class="label">
                            <span> Arise kids</span>
                            <input
                                class="input bg-white"
                                title="Input (number)"
                                type="number"
                                name="numberkids"
                                bind:value={data.amount_kids}
                                required
                            />
                        </label>

                        <label class="label">
                            <span> Arise kids leaders</span>
                            <input
                                class="input bg-white"
                                title="Input (number)"
                                type="number"
                                name="numberkidsleaders"
                                bind:value={data.amount_kids_leader}
                                required
                            />
                        </label>

                        <label class="label">
                            <span> Name of submitter</span>
                            <input
                                disabled
                                class="input bg-white"
                                title="Input (text)"
                                type="text"
                                name="name"
                                pattern="[A-Za-z]+"
                                bind:value={data.name}
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
                            type="submit"
                            id="submitform"
                            on:submit={handleSubmit}>Delete Record</button
                        >
                    </div>
                </form>
            </main>
        </div>
    </body>
</html>
