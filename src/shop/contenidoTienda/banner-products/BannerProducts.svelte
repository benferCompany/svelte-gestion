<script>
    import Slaider from "../slaider/Slaider.svelte";
    import { onMount } from "svelte";
    import { getProducts } from "./bannerProducts";
    import { navigate } from "svelte-routing";
    import { aplicarDescuento } from "../javascript/js";
    let products;
    onMount(async () => {
        products = await getProducts();
        console.log(products);
    });
    let duration = {
        duration: 5000,
        durationSiema: 1000,
        direction: "prev",
    };

    let dto = 10;
</script>

{#if products}
    {#if products.content}
        <Slaider bind:duration>
            {#each products.content as product}
                {#if product.stores[0].stock > 0}
                    <div class="info">
                        <img
                            style="height:300px; max-width:100%;"
                            src={product.image}
                            alt=""
                        />
                        <div>
                            <h4>{product.title}</h4>
                            <p class="color-oferta">
                                Descuento por compra online
                            </p>
                            <p>
                                <strong class="precio tachado"
                                    >${product.selling_price}</strong
                                >
                                -
                                <strong class="color-oferta"
                                    >${aplicarDescuento(
                                        product.selling_price,
                                        dto,
                                    )}</strong
                                >
                            </p>

                            <button
                                on:click={() => {
                                    navigate("/description?id=" + product.id);
                                }}
                                class="btn-prod">Ver</button
                            >
                        </div>
                    </div>
                {/if}
            {/each}
        </Slaider>
    {/if}
{/if}

<style>
    .info {
        border-radius: 5px;
        box-shadow: 0 0 12px 12px rgba(0, 0, 0, 0.5);
        margin: auto;
        margin-top: 30px;
        margin-bottom: 50px;
        background-color: rgba(255, 255, 255, 0.909);
        width: 80%;
        height: 450px;

        text-align: center;
    }

    .btn-prod {
        border: 1px solid black;
        box-shadow: 0 0 12px rgba(0, 0, 0, 0.5);
        background-color: #084342;
        color: white;
        margin-top: 20px;
        border-radius: 2px;
        width: 100px;
    }
</style>
