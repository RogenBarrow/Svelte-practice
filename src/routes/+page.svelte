<script>
    export let data;
    const amount = data.attendance;
    console.log('On page: ', amount);
</script>

<html lang="en">
    <body>
        <div class="flex justify-center">
            <div
                class="card mt-10 mx-10 h-1/4 w-auto drop-shadow-md bg-white border-black"
            >
                <header class="card-header text-center font-black">
                    Attendance for this month
                </header>
                <section class="p-4 text-center font-extrabold">
                    {amount}
                </section>
                <footer class="card-footer text-center"></footer>
            </div>
        </div>
    </body>
</html>
