<script>
    let token;
    if (Android) {
        token = Android.getToken();
    }
</script>

<h1>Hello prueba</h1>
{#if token}
    <p>
        {token}
    </p>
{/if}
