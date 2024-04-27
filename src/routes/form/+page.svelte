<script>
    import { messageDelivered } from '$lib/message';
    import handleSubmit from '$lib/components/handleSubmit';
</script>

<html lang="en">
    <body class="w-screen">
        <div class="flex justify-center mt-10">
            <main class="object-center card p-4 w-2/4 h-3/4">
                <form method="post" on:submit|preventDefault={handleSubmit}>
                    <h1 class="text-center">Arise Attendance Submission</h1>
                    <!-- Grid -->
                    <div>
                        <!-- Markup example 1: input is inside label -->
                        <label class="object-center label" for="date"
                            >Date
                            <input
                                class="input"
                                title="Input (date)"
                                type="date"
                                name="date"
                                required
                            />
                        </label>

                        <label class="label">
                            <span>Attandence in Church</span>
                            <input
                                class="input"
                                title="Input (number)"
                                type="number"
                                name="number"
                                required
                            />
                        </label>

                        <label class="label">
                            <span> Arise kids</span>
                            <input
                                class="input"
                                title="Input (number)"
                                type="number"
                                name="numberkids"
                                required
                            />
                        </label>

                        <label class="label">
                            <span> Arise kids leaders</span>
                            <input
                                class="input"
                                title="Input (number)"
                                type="number"
                                name="numberkidsleaders"
                                required
                            />
                        </label>

                        <label class="label">
                            <span> Name of submitter</span>
                            <input
                                class="input"
                                title="Input (text)"
                                type="text"
                                name="name"
                                pattern="[A-Za-z]+"
                                required
                            />
                        </label>

                        <div class="space-y-2 m-2">
                            <label class="flex items-center space-x-2">
                                <input
                                    class="checkbox"
                                    type="checkbox"
                                    name="accurate"
                                    required
                                />
                                <p>Is it accurate?</p>
                            </label>
                        </div>

                        <!-- Button -->
                        <button
                            class="btn variant-filled bg-primary-500"
                            type="submit"
                            id="submitform">Submit</button
                        >
                    </div>
                </form>
            </main>
        </div>
    </body>
</html>
