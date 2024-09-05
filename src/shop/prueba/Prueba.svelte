<script>
    import { onMount } from "svelte";
    import { login } from "../contenidoTienda/form/form";
    let token;
    let customer;
    onMount(async () => {
        if (Android) {
        token = Android.getToken();
    }
    
        
    });

    const handleLogin = async(token)=>{
        if (token) {
            const response = await login(token);
            customer = JSON.stringify(response);
        }
    }
    $:{customer}
</script>

<h1>Hello prueba</h1>
{#if token}
    <p>
        {token}
    </p>
{/if}
<div>
    <button on:click={()=>{
        handleLogin(token)
    }}>Login</button>
</div>
{#if customer}
    <p>{customer}</p>
{/if}
