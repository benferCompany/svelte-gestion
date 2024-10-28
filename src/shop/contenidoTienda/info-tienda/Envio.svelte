<script>
    import { Link, navigate } from "svelte-routing";
    import { booleanPathName } from "../../../components/tools/pathName/pathName";
    import Footer from "../footer/Footer.svelte";
    import Nav from "../nav/Nav.svelte";

    booleanPathName.set(false);
</script>

<div class="index">
    <div style="position:absolute;top:0; left:0;">
        <Nav />
    </div>
    <div style="margin-top:75px;">
        <hr />
        <div style="padding:1em;">
            <h4>Datos de envios</h4>
            <p>
                En zona de Resistencia, Barranqueras, y Fontana el envio no
                tiene costo. Para envios al interior se lleva hasta el
                transporte sin cargo, y luego los gastos de transporte queda a
                cargo del cliente.
            </p>
            <div style="display:flex; justify-content:center;">
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <p
                    on:click={()=>{navigate("/")}}
                    style="padding:0.5em; background:rgba(255,255,255,0.3); border-radius:1em; width:5em; text-align:center;"
                    to="/"
                >
                    Volver
                </p>
            </div>
        </div>
    </div>
    <Footer />
</div>

<style>
    .index {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        background: rgb(2, 31, 31);
        color: rgb(202, 199, 199);
    }
</style>
