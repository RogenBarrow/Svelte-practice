<script>
</script>

<div class="flex justify-center mt-10">
    <main class="">
        <form method="post">
            <h1 class="text-center h3">Livestream views registration</h1>
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
                    <span>Peak concurrents</span>
                    <input
                        class="input bg-white"
                        title="Input (number)"
                        type="number"
                        name="number"
                        required
                    />
                </label>

                <label class="label">
                    <span> views</span>
                    <input
                        class="input bg-white"
                        title="Input (number)"
                        type="number"
                        name="views"
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
