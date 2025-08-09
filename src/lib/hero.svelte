<script>
    export let title = 'Welcome to My SvelteKit App';
    export let subtitle = 'This is a hero section created with SvelteKit.';
    //export let backgroundImage = 'static/arise-hero.jpg';
    import img from '$lib/img/arise-hero.jpg';
</script>

<div
    class="hero min-h-[40vh] sm:min-h[50vh]"
    style="background-image: url('{img}')"
>
    <div class="overlay"></div>
    <div class="content">
        <h1 class="text-4xl sm:text-6xl">{title}</h1>
        <p class="text-base sm:text-2xl">{subtitle}</p>
    </div>
</div>

<style>
    .hero {
        position: relative;
        background-size: cover;
        background-position: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: white;
        text-align: center;
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
    }

    .content {
        position: relative;
        z-index: 1;
    }

    h1 {
        font-size: 4rem;
        margin: 0;
    }

    p {
        margin: 0;
    }
</style>
