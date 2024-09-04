<script>
    import { booleanPathName } from "../../../components/tools/pathName/pathName";
    import Nav from "../nav/Nav.svelte";
    import Footer from "../footer/Footer.svelte";
    import { Link } from "svelte-routing";
    import Pago from "./pago/Pago.svelte";
    import { datos, carrito } from "./carrito";
    import { onMount } from "svelte";
    $booleanPathName = false;
    let booleanMercadoPago = false;
    let detalle = datos;
    let total = 0;
    let totalCost = 0;

    function createSequentialArray(N) {
        return Array.from({ length: N }, (_, i) => i + 1);
    }
    onMount(() => {
        detalle.detailProductList = $carrito;
    });

    const deleteProduct = (id) => {
        detalle.detailProductList = detalle.detailProductList.filter(
            (p) => p.id !== id,
        );
        localStorage.setItem("carrito", detalle.detailProductList);
        $carrito = detalle.detailProductList;
    };

    $: {
        total = 0;
        totalCost = 0;
        detalle.detailProductList.forEach((p) => {
            p.totalPrice = p.quality * p.price;
            p.totalCostPrice = p.quality * p.costPrice;
            total += p.totalPrice;
            totalCost = p.totalCostPrice;
        });
        detalle.total = total;
        detalle.totalCost = totalCost;
        localStorage.setItem(
            "carrito",
            JSON.stringify(detalle.detailProductList),
        );
        console.log(detalle)
    }
</script>

<div class="body">
    <div>
        <Nav />
    </div>
    {#if detalle.detailProductList.length}
        <div class="carrito">
            <div style="width:93%;">
                {#each detalle.detailProductList as product}
                    <div
                        style="width:100%;padding:1em; background:white; border-radius:10px; box-shadow:0 0 12px 0px rgba(0,0,0,0.5); height: 300px; display:flex; flex-direction:column; justify-content:space-between; margin-bottom:1em;"
                    >
                        <div>
                            <h5>{product.description}</h5>
                        </div>
                        <hr />
                        <div
                            style="display:flex; justify-content:space-between; width:100%;"
                        >
                            <div style="width:25%;">
                                <img
                                    style="width:100%;"
                                    src={product.image}
                                    alt=""
                                />
                            </div>
                            <div
                                style="width:60% display:flex; justify-content:space-around;"
                            >
                                <div style="margin-top:1.5em;">
                                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                                    <p
                                        on:click={() => {
                                            deleteProduct(product.id);
                                        }}
                                        to="/carrito"
                                    >
                                        Eliminar
                                    </p>
                                    <Link to="/carrito">Modificar</Link>
                                </div>
                            </div>
                        </div>
                        <div
                            style="display:flex; justify-content:space-between; width:100%;"
                        >
                            <div style="margin-top:0.5em;">
                                <h5>
                                    ${product.price * product.quality}
                                </h5>
                            </div>
                            <div>
                                {#if $carrito}
                                    {#each $carrito as car}
                                        <select bind:value={product.quality}>
                                            {#each createSequentialArray(car.stock) as i}
                                                <option value={i}>{i}</option>
                                            {/each}
                                        </select>
                                    {/each}
                                {/if}
                            </div>
                        </div>
                        <div
                            style="display:flex; justify-content:space-between;"
                        >
                            <h5>Envio</h5>
                            <h5>Gratis</h5>
                        </div>
                        <div>
                            <Link to="carrito">Ver mas productos</Link>
                        </div>
                    </div>
                {/each}
                <div
                    class="total"
                    style="width:100%;padding:1em; background:white; border-radius:10px; box-shadow:0 0 12px 0px rgba(0,0,0,0.5); height: 300px;  margin-bottom:1em;"
                >
                    <h5>Resumen de Compra</h5>
                    <hr />
                    <div
                        class="info"
                        style="display: flex; justify-content:space-between;"
                    >
                        <p>Producto</p>
                        <p>$299.999</p>
                    </div>
                    <Link to="carrito">¿Cuál es el costo de envío?</Link> <br />
                    <Link to="carrito">ingresar código de cupón</Link>
                    <div
                        class="total"
                        style="display: flex; justify-content:space-between; margin-top:1em;"
                    >
                        <h5>Total</h5>
                        {#if detalle}
                            <h5>{detalle.total}</h5>
                        {/if}
                    </div>
                    <div class="mercado-pago">
                        {#if !booleanMercadoPago}
                            <button
                                on:click={() => {
                                    console.log("boton");
                                    booleanMercadoPago = !booleanMercadoPago;
                                }}
                                class="btn-com">Continuar compra</button
                            >
                        {/if}
                        {#if booleanMercadoPago}
                            <div>
                                <Pago bind:detalle />
                            </div>
                        {/if}
                    </div>
                </div>
            </div>
        </div>
    {:else}
        <div>
            <h1>Necesito agregar productos al carrito para comprar.</h1>
        </div>
    {/if}
    <div class="footer">
        <Footer />
    </div>
</div>

<style>
    .body {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: teal;
    }
    .carrito {
        margin-top: 50%;
        display: flex;
        justify-content: center;
        width: 100%;
    }
    .footer {
        display: flex;
        flex-direction: column;
        justify-content: end;
    }

    .btn-com {
        background-color: #3483fa;
        border-radius: 5px;
        width: 100%;
        color: white;
        margin-top: 1.5em;
    }
</style>