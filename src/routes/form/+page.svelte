<script>
    import handleSubmit from '$lib/components/handleSubmit';
</script>

<html lang="en">
    <body class="w-screen">
        <div class="flex justify-center mt-10">
            <main class="">
                <form method="post" on:submit={handleSubmit}>
                    <h1 class="text-center h3">Arise Attendance Submission</h1>
                    <!-- Grid -->
                    <div>
                        <!-- Markup example 1: input is inside label -->
                        <label class="object-center label" for="date"
                            >Date
                            <input
                                class="input bg-white"
                                title="Input (date)"
                                type="date"
                                name="date"
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
                                required
                            />
                        </label>

                        <label class="label">
                            <span> Name of submitter</span>
                            <input
                                class="input bg-white"
                                title="Input (text)"
                                type="text"
                                name="name"
                                pattern="[A-Za-z]+"
                                required
                            />
                        </label>

                        <div class="space-y-2 mt-2">
                            <label class="flex items-center space-x-2">
                                <input
                                    class="checkbox bg-white"
                                    type="checkbox"
                                    name="accurate"
                                    required
                                />
                                <p>Is it accurate?</p>
                            </label>
                        </div>

                        <!-- Button -->
                        <button
                            class="btn variant-filled bg-primary-600 mt-2"
                            type="submit"
                            id="submitform">Submit</button
                        >
                    </div>
                </form>
            </main>
        </div>
    </body>
</html>
