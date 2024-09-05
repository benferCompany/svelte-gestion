<script>
    import { onMount } from "svelte";
    import { login } from "../contenidoTienda/form/form";
    let token;
    let customer;
    onMount(async () => {
        if (Android) {
        token = JSON.stringify(Android.getToken());
    }
    });

 
</script>

<h1>Hello prueba</h1>
{#if token}
    <p>
        {token}
    </p>
{/if}