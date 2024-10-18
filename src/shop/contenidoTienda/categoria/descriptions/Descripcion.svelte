<script>
    import { onMount } from "svelte";
    import { booleanPathName } from "../../../../components/tools/pathName/pathName";
    import {
        getProduct,
        addCarrito,
        getImagesProduct,
        aplicarDescuento,
        descuento,
        options,
    } from "./description";
    import { carrito } from "../../carrito/carrito";
    import { navigate } from "svelte-routing";
    import { getDescriptionProduct } from "../../../../components/stores/products";
    import Slaider from "../../slaider/Slaider.svelte";
    let product;
    let descripcion;
    let cantidadCarrito = 1;
    let estadoCarrito = 0;
    let images;
    function createSequentialArray(N) {
        return Array.from({ length: N }, (_, i) => i + 1);
    }
    booleanPathName.set(false);
    onMount(async () => {
        let id;
        const params = new URLSearchParams(window.location.search);
        id = params.get("id");
        descripcion = await getDescriptionProduct(id);
        product = await getProduct(id);
        images = await getImagesProduct(id);
        
    });

    let selectedOption = "";

    $: {
        if ($carrito && product) {
            $carrito.forEach((p) => {
                if (p.id === product.id) {
                    estadoCarrito = p.quality;
                }
            });
        }
    }

    //props slaider
    let duration = { duration: 5000, durationSiema: 1000, direction:"next" };
</script>

{#if product && descripcion}
    <div class="body">
        {#if images}
            <Slaider bind:duration>
                {#each images.src as img}
                    <div>
                        <img style="max-width:100%; height:400px;" src={img} alt="">
                    </div>
                {/each}
            </Slaider>
        {/if}
        <div class="infor" style="margin: 0; padding:0;">
            <h6 class="sin-p-b"><s>${product.selling_price}</s></h6>
            {#if options.descuento}
                <h5 class="sin-p-b">Descuento por compras online</h5>
                <h2 class="sin-p-b">
                    ${aplicarDescuento(
                        product.selling_price,
                        descuento.descuento,
                    )}
                </h2>
            {/if}
            {#if options.cuotas}
                <h5 class="sin-p-b">
                    Mismo precio en 18 cuotas de $127.577,72
                </h5>
            {/if}
            {#if options.colores}
                <div class="colors-produc">
                    <b>colores disponibles:</b>
                    <div class="inpts">
                        <input
                            type="radio"
                            id="option1"
                            name="options"
                            bind:group={selectedOption}
                            value="option1"
                        />
                        <input
                            type="radio"
                            id="option2"
                            name="options"
                            bind:group={selectedOption}
                            value="option2"
                        />
                        <input
                            type="radio"
                            id="option3"
                            name="options"
                            bind:group={selectedOption}
                            value="option3"
                        />
                    </div>
                </div>
            {/if}
            <div class="selec">
                <h3 class="h3">stock disponibles</h3>
                {#if estadoCarrito > 0}
                    <select disabled bind:value={estadoCarrito}>
                        {#each createSequentialArray(product.stores[0].stock) as i}
                            <option value={i}>{i}</option>
                        {/each}
                    </select>
                {:else}
                    <select bind:value={cantidadCarrito}>
                        {#each createSequentialArray(product.stores[0].stock) as i}
                            <option value={i}>{i}</option>
                        {/each}
                    </select>
                {/if}
            </div>
        </div>
        <div class="btns">
            <button
                on:click={async () => {
                    product.selling_price = aplicarDescuento(
                        product.selling_price,
                        descuento.descuento,
                    );
                    addCarrito($carrito, product, cantidadCarrito);
                    navigate("/carrito");
                }}
                style="background-color: rgb(9, 50, 73);"
            >
                {#if estadoCarrito > 0}
                    Ya esta en carrito ({estadoCarrito})
                {:else}
                    Compra ahora
                {/if}
            </button>

            <br />
        </div>
        <hr />
        <div class="descriptions">
            {@html descripcion.content}
        </div>
        <h4 style="text-align: center; padding-bottom: 10px;">
            Agregar un comentario
        </h4>
        <div class="comentarios">
            <input
                type="text"
                placeholder="agrega tu comentario"
                class="caja-coment"
            />
            <button class="button">enviar</button>
        </div>
    </div>
{/if}

<style>

    /*todos los h*/ /*todos los h*/
    h2 {
        color: rgba(0, 0, 0, 0.828);
    }

    h3 {
        text-align: center;
        width: 100%;
        margin-bottom: 20px;
    }

    .h3 {
        color: rgb(55, 51, 51);
        text-align: start;
    }

    h4 {
        color: rgba(25, 25, 25, 0.769);
    }

    h5 {
        color: rgb(27, 209, 27);
    }
    h6 {
        color: grey;
    }

    /*todos los riado*/ /*todos los radio*/ /*todos los radio*/ /*todos los radio*/
    .colors-produc {
        margin-top: 15px;
        display: flex;
        justify-content: space-between;
    }

    .inpts {
        display: flex;
        margin: 0;
        padding: 0;
    }

    input[type="radio"] {
        margin-left: 5px;
        appearance: none;
        -webkit-appearance: none;
        width: 20px;
        height: 20px;
        border: 2px solid #ccc;
        border-radius: 50%;
        background-color: #e8e8e8;
        cursor: pointer;
        position: relative;
        transition:
            background-color 0.3s,
            border-color 0.3s;
    }

    /* Estilo para el primer radio, con punto azul */
    #option1:checked {
        border-color: #eeeeee;
        background-color: #ffffff;
    }

    #option1:checked::before {
        content: "";
        display: block;
        width: 10px;
        height: 10px;
        background-color: #1e00ff;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    /* Estilo para el segundo radio, con punto verde */
    #option2:checked {
        border-color: #eeeeee;
        background-color: #ffffff;
    }

    #option2:checked::before {
        content: "";
        display: block;
        width: 10px;
        height: 10px;
        background-color: #00ff0d;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    /* Estilo para el tercer radio, con punto rojo */
    #option3:checked {
        border-color: #eeeeee;
        background-color: #ffffff;
    }

    #option3:checked::before {
        content: "";
        display: block;
        width: 10px;
        height: 10px;
        background-color: #ff0000;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    /*todos los p y b */ /*todos los p y b */

    b {
        color: rgba(0, 0, 0, 0.702);
    }

    .selec {
        max-width: 100%;
        margin-top: 10px;
        display: flex;
    }

    select {
        padding: 0;
        margin: 0;
        width: 100px;
        border: 1px solid black;
        font-size: 13px;
        border-radius: 3px;
        height: 20px;
        margin-top: 25px;
    }

    .btns {
        text-align: center;
    }

    button {
        color: white;
        width: 95%;
        height: 40px;
        border: 1px solid rgba(0, 0, 0, 0.145);
        border-radius: 5px;
        margin-top: 10px;
    }

    .infor {
        margin-left: 10px;
    }

    .sin-p-b {
        margin-top: 0;
        margin-bottom: 0;
    }

    /*CAJA DE COMENTARIOS*/ /*CAJA DE COMENTARIOS*/

    .comentarios {
        display: flex;
        text-align: center;
        width: 100%;
        height: 20px;
    }

    .caja-coment {
        margin-left: 5px;
        width: 80%;
        height: 30px;
        border: 1px solid black;
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
    }

    .button {
        margin-top: 0;
        width: 50px;
        height: 32px;
        color: black;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    }
</style>
