<script>
    import { messageDelivered } from '$lib/message';
</script>

<html lang="en">
    <body>
        <main class="object-center card p-4 w-2/4 h-3/4">
            <form method="post">
                <h1>Arise Attendance Submission</h1>
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
                            required
                        />
                    </label>

                    <div class="space-y-2">
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
                        id="submitform"
                        on:click={messageDelivered}>Submit</button
                    >
                </div>
            </form>
        </main>
    </body>
</html>
