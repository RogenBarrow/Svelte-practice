<script>
    import BarComponent from '$lib/components/barComponent.svelte';
    import Hero from '$lib/hero.svelte';
</script>

<html lang="en">
    <body>
        <Hero title="" subtitle="" />
        <div class="">
            <BarComponent />
        </div>
    </body>
</html>

<style>
    :global(body) {
        margin: 0;
    }
</style>
