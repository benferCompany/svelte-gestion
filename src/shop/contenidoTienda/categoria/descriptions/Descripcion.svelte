<script>
    import { onMount } from "svelte";
    import { booleanPathName } from "../../../../components/tools/pathName/pathName";
    import { getProduct, addCarrito } from "./description";
    import { carrito } from "../../carrito/carrito";
    import { navigate } from "svelte-routing";
    let product;
    let cantidadCarrito = 0;
    booleanPathName.set(false);
    onMount(async () => {
        let id = window.location.pathname.split("/").pop();
        if (id) {
            product = await getProduct(id);
        }
    });
    let image = {
        id: 1,
        idProd: 1,
        src: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_722369-MLA74216980342_012024-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_774676-MLA74217355402_012024-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_892682-MLA74330572137_012024-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_894449-MLA74330572119_012024-F.webp",
        ],
    };
    let selectedOption = "";

    $: {
        
        if ($carrito && product) {
            console.log(product);
            $carrito.forEach((p) => {
                if (p.id === product.id) {
                    cantidadCarrito = p.quality;
                }
            });
        }
    }
</script>

{#if product}
    <div class="body">
        <div class="carrusel">
            {#each image.src as img}
                <div class="fotos">
                    <img
                        src={img}
                        style="  
                height: 210px; 
                width: 290px; 
                flex: 1 0 auto;
                padding-left: 1em;"
                        alt="no soportado bot"
                    />
                </div>
            {/each}
        </div>
        <div class="infor" style="margin: 0; padding:0;">
            <h6 class="sin-p-b"><s>$2.419.599</s></h6>
            <h2 class="sin-p-b">$2.296.399</h2>
            <h5 class="sin-p-b">Mismo precio en 18 cuotas de $127.577,72</h5>
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
            <div class="selec">
                <h3 class="h3">stock disponibles</h3>
                <select>
                    <option selected>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
            </div>
        </div>
        <div class="btns">
            <button
                on:click={() => {
                    navigate("/carrito");
                }}
                style="background-color: rgb(9, 50, 73);">Compra ahora</button
            > <br />
            <button
                class="boton-carrito"
                on:click={() => {
                    addCarrito($carrito, product);
                }}
                
            >
                {#if cantidadCarrito > 0}
                    Agregar mas({cantidadCarrito})
                {:else}
                    Añadir al carrito
                {/if}
            </button>
        </div>
        <div class="descriptions">
            <p class="p">
                <i class="color:red;">Compra Protegida</i> Se abrirá en una nueva
                ventana, recibí el producto que esperabas o te devolvemos tu dinero.
            </p>
            <div class="caracters-padre">
                <h3 style="margin-top: 20px;">Características principal</h3>
                <div class="caracterist-1">
                    <div class="info">
                        <b>Marca</b> <br />
                        <b>Tamaño</b><br />
                        <b>Peso</b><br />
                        <b>Color</b><br />
                        <b>Uso</b><br />
                    </div>
                    <div class="info2">
                        <b>hp</b><br />
                        <b>grande</b><br />
                        <b>3 kg</b><br />
                        <b>plateado</b><br />
                        <b>Nuevo</b><br />
                    </div>
                </div>
                <h3>Características Secundaria</h3>
                <div class="caracterist-1">
                    <div class="info">
                        <b>Pantalla</b> <br />
                        <b>Memoria</b><br />
                        <b>Disco</b><br />
                        <b>Procesador</b><br />
                        <b>Bateria</b><br />
                    </div>
                    <div class="info2">
                        <b>24"</b><br />
                        <b>8gb DDR3</b><br />
                        <b>ssd 380gb</b><br />
                        <b>i5 7762k</b><br />
                        <b>10.000 MAP</b><br />
                    </div>
                </div>
            </div>
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
    .carrusel {
        display: flex;
        flex-wrap: nowrap;
        overflow: scroll;
    }

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

    .p {
        margin-top: 10%;
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

    .caracterist-1 {
        display: flex;
        justify-content: space-between;
        margin-bottom: 40px;
    }

    .infor {
        margin-left: 10px;
    }

    .info2 {
        margin-left: 25px;
        padding-right: 10px;
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
    .boton-carrito{
        background-color: rgb(255, 117, 11); padding-top:0; margin-top:0;
    }
    .boton-carrito:active{
        background-color: rgb(170, 77, 7);
    }
</style>
