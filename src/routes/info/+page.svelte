<script>
</script>

<html lang="en">
    <body class="w-screen">
        <div class="flex justify-center mt-10">
            <main class="">
                <form method="post">
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
                            <span>Preacher</span>
                            <input
                                class="input bg-white"
                                title="Input (number)"
                                type="text"
                                name="preacher"
                                required
                            />
                        </label>

                        <label class="label">
                            <span> Title</span>
                            <input
                                class="input bg-white"
                                title="Input (number)"
                                type="text"
                                name="title"
                                required
                            />
                        </label>

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
