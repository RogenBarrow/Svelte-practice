<script>
    import { page } from '$app/stores';
    export let data;
    const sanitizedData = JSON.stringify(data);
</script>

<p>
    {sanitizedData}
    {$page.params}
</p>
<p>data.username</p>
