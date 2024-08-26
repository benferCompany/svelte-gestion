<script>
    import { booleanPathName } from "../../../components/tools/pathName/pathName";
    import Nav from "../nav/Nav.svelte";
    import Footer from "../footer/Footer.svelte";
    import { Link } from "svelte-routing";
    $booleanPathName = false;

    let products = [
        {
            title: "titulo del producto",
            image: "https://static5.depositphotos.com/1035219/428/i/450/depositphotos_4288272-stock-photo-iron-hammer-isolated-on-white.jpg",
            price: 100,
            cantidad: 1,
        },
        {
            title: "titulo del producto",
            image: "https://static5.depositphotos.com/1035219/428/i/450/depositphotos_4288272-stock-photo-iron-hammer-isolated-on-white.jpg",
            price: 100,
            cantidad: 2,
        },
        {
            title: "titulo del producto",
            image: "https://static5.depositphotos.com/1035219/428/i/450/depositphotos_4288272-stock-photo-iron-hammer-isolated-on-white.jpg",
            price: 100,
            cantidad: 3,
        },
    ];
    console.log(products);
</script>

<div class="body">
    <Nav />

    <div class="carrito">
        <div style="width:93%;">
            {#each products as product}
                <div style="width:100%;padding:1em; background:white; border-radius:10px; box-shadow:0 0 12px 0px rgba(0,0,0,0.5); height: 300px; display:flex; flex-direction:column; justify-content:space-between; margin-bottom:1em;">
                    <div>
                        <h5>{product.title}</h5>
                    </div>
                    <hr />
                    <div style="display:flex; justify-content:space-between; width:100%;">
                        <div style="width:25%;">
                            <img
                                style="width:100%;"
                                src={product.image}
                                alt=""
                            />
                        </div>
                        <div style="width:60% display:flex; justify-content:space-around;">
                            <div style="margin-top:1.5em;">
                                <Link to="/carrito">Eliminar</Link>
                                <Link to="/carrito">Modificar</Link>
                            </div>
                        </div>
                    </div>
                    <div style="display:flex; justify-content:space-between; width:100%;">
                        <div style="margin-top:0.5em;">
                            <h5>${product.price * product.cantidad}</h5>
                        </div>
                        <div>
                            <select bind:value={product.cantidad}>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                            </select>
                        </div>
                    </div>
                    <div style="display:flex; justify-content:space-between;">
                        <h5>Envio</h5>
                        <h5>Gratis</h5>
                    </div>
                    <div>
                        <Link to="carrito">Ver mas productos</Link>
                    </div>
                </div>
            {/each}
            <div class="total" style="width:100%;padding:1em; background:white; border-radius:10px; box-shadow:0 0 12px 0px rgba(0,0,0,0.5); height: 300px;  margin-bottom:1em;">
                <h5>Resumen de Compra</h5>
                <hr />
                <div class="info" style="display: flex; justify-content:space-between;">
                    <p>Producto</p>
                    <p>$299.999</p>
                </div>
                <Link to="carrito">¿Cuál es el costo de envío?</Link> <br>
                <Link to="carrito">ingresar código de cupón</Link>
                <div class="total" style="display: flex; justify-content:space-between; margin-top:1em;">
                    <h5>Total</h5>
                    <h5>$299.999</h5>
                </div>
                <button class="btn-com" style="background-color: #3483fa; border-radius: 5px; width:100%; color:white; margin-top: 1.5em;">Continuar compra</button>
            </div>
        </div>
    </div>
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
</style>