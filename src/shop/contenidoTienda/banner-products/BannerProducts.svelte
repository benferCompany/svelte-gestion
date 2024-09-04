<script>
    import Slaider from "../slaider/Slaider.svelte";
    import { onMount } from "svelte";
    import { URL } from "../../../components/tools/connections/url";
    let products;
    onMount(async () => {
        let response = await fetch(`${URL}/products/name`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ description: "" }),
        });
        let json = await response.json();
        console.log(json);
        products = await json;
    });
    let duration = {
        duration: 5000,
        durationSiema: 1000,
        direction: "prev",
    };
</script>

{#if products}
    {#if products.content}
        <Slaider bind:duration>
            {#each products.content as product}
                <div class="info">
                    <img style="width:100%;" src={product.image} alt="no soportado" />
                    <h4>{product.title}</h4>
                    
                    <p class="precio">{product.selling_price}</p>
                    <button class="btn-prod">Añadir</button>
                </div>
                
            {/each}
        </Slaider>
    {/if}
{/if}

<style>
    .info {
        border-radius: 5px;
        box-shadow: 0 0 12px 12px rgba(0,0,0,0.5);
        margin: auto;
        margin-top:30px;
        margin-bottom:50px;
        background-color: rgba(255, 255, 255, 0.909);
        width: 80%;
        height: 340px;
        text-align:center;
    }

    .btn-prod {
        border: 1px solid black;
        box-shadow: 0 0 12px rgba(0,0,0,0.5);
        background-color: #084342;
        color: white;
        margin-top: 20px;
        border-radius: 2px;
        width: 100px;
    }
</style>
