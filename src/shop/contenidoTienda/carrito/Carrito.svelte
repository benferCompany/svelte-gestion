<script>
    import { booleanPathName } from "../../../components/tools/pathName/pathName";
    import Nav from "../nav/Nav.svelte";
    import Footer from "../footer/Footer.svelte";
    import { Link } from "svelte-routing";
    import Pago from "./pago/Pago.svelte";
    $booleanPathName = false;
    let booleanMercadoPago = false;
    let detalle= {
        id: 1,
        cae: "",
        caeFchVto: null,
        salesPerson: {
            shift: "",
            auth: "",
            comission: 0.0,
            id: 1,
            name: "Vendedor",
            last_name: "Apellido Vendedor",
            address: "Dirección de Vendedor",
            email: "email@vendedor.com",
            phone: "111111",
            mobile_phone: "1111111",
            idPersonal: "11-1111111111-1",
            img: "https://img.freepik.com/fotos-premium/retrato-hombre-negocios-expresion-cara-seria-fondo-estudio-espacio-copia-bengala-persona-corporativa-enfoque-pensamiento-duda-mirada-facial-dilema-o-concentracion_590464-84924.jpg",
        },
        customer: {
            id: 2,
            name: "Benjamín ",
            last_name: "Gomez",
            address: "Leopoldo Lugones 726",
            email: "benjidfer@outlook.com",
            phone: "12233000",
            mobile_phone: "03625635884",
            idPersonal: "35307058",
            fiscal_status: "Consumidor Final",
            current_account: 0.0,
            discount: 0.0,
        },
        company: {
            id: 1,
            name: "Empresa",
            business_name: "Nombre de Empreas",
            cuit: "11-111111111-1",
            address: "Dirección de Empresa",
            fiscal_status: "Monotributo",
            business_activity: "21/08/2024",
        },
        paymentType: "Efectivo",
        fiscalStatus: "Consumidor Final",
        detailProductList: [
            {
                id: 1,
                quality: 5.0,
                productId: 1,
                internalCode: "1pro",
                description: "descripción del producto",
                price: 130.0,
                costPrice: 125.0,
                totalCostPrice: 625.0,
                totalPrice: 650.0,
            },
        ],
        numberInvoice: "F-T 12",
        total: 650.0,
        totalCost: 625.0,
        discount: null,
        date: "27/08/2024 19:18",
    };
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
                <div class="mercado-pago">
                    {#if !booleanMercadoPago}
                    <button on:click={()=>{
                        console.log("boton");
                        booleanMercadoPago = !booleanMercadoPago;
                        }} class="btn-com">Continuar compra</button>
                    {/if}
                    {#if booleanMercadoPago}
                        <div>
    
                            <Pago bind:detalle/>
                        </div>
                    {/if}
                </div>
                   
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
   

    .btn-com {
        background-color: #3483fa; 
        border-radius: 5px; 
        width:100%; color:white; 
        margin-top: 1.5em;
    }
</style>
