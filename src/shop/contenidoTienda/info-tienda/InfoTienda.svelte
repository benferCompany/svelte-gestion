<script>
    import { navigate } from "svelte-routing";
    import { booleanPathName } from "../../../components/tools/pathName/pathName";
    booleanPathName.set(false);
    
    function volver () {
        navigate("/")
    }
</script>

<div class="body">
    <h2>¿Porque comprar en Benfer.shop?</h2>
    <p>
        ¡Bienvenido a BenFerShop, tu destino seguro para compras en línea! En
        BenFerShop, garantizamos una experiencia de compra sin preocupaciones.
        Puedes estar seguro de que tus compras son seguras y libres de estafas.
        Nuestro compromiso con la calidad y la transparencia nos distingue.
        Además, en BenFerShop te recompensamos por elegirnos. Por eso, ofrecemos
        descuentos exclusivos para compras en línea, asegurando que obtendrás
        los mejores precios, explora nuestro amplio catálogo desde la comodidad
        de tu hogar Únete.
    </p>
    <button on:click={volver}>Volver</button>
</div>

<style>
    .body {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        background-color: rgb(2, 31, 31);
        width: 100%;
        height: 100vh;
        text-align: center;
    }

    h2 {
        margin-top: 10px;
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        color: white;
    }

    p {
        color: white;
        text-align: center;
        margin-top: 35px;
        margin-left: 1px;
        margin-right: 1px;
        font-family: Arial, Helvetica, sans-serif;
    }

    button {
        width: 200px;
        border-radius: 10px;
        border: 1px solid grey;
        margin-top: 10px;
        background-color: rgb(2, 21, 23);
        color: white;
    }

</style>
