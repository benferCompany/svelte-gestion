<script>
    import { onMount } from "svelte";
    import { login } from "../contenidoTienda/form/form";
    let token;
    let customer;
    onMount(async () => {
        if (Android) {
        token = Android.getToken();
    }
    
        if (token) {
            const response = await login(token);
            customer = JSON.stringify(response);
        }
    });
</script>

<h1>Hello prueba</h1>
{#if token}
    <p>
        {token}
    </p>
{/if}
{#if customer}
    <p>{customer}</p>
{/if}
