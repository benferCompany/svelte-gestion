<script>
    import { Link, navigate } from "svelte-routing";
    import { IniciaSesion, accesGoogle } from "./form";
    import { booleanPathName } from "../../../components/tools/pathName/pathName";

    booleanPathName.set(false);

    let styleVolver = `
        padding-top: 25px;
        margin-left: 10px;
        font-size: 20px;
        color: white;
        font-family: 'Arial Narrow', Arial`;

    async function handleSubmit(event) {
        try {
            await IniciaSesion(event);
            navigate("/"); // Redirigir al usuario tras iniciar sesión exitosamente
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
        }
    }

    // Manejador para la autenticación con Google
    async function handleGoogleLogin() {
        try {
            const result = await accesGoogle();
            if (result) {
                navigate("/"); // Redirigir tras autenticación exitosa
            }
        } catch (error) {
            console.error("Error al iniciar sesión con Google:", error);
        }
    }
</script>

<link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
/>

<div class="body">
    <div class="padre">
        <h1>Bienvenido a BenFer Shop</h1>
        <h5>
            Descubre la experiencia de compras en línea que estabas esperando.
        </h5>
        <p>
            En <b>BenFer Shop</b>, encontrarás una amplia selección de productos
            de calidad, todo en un solo lugar.
            Comprar con nosotros es seguro y confiable, para que puedas
            disfrutar de cada compra con tranquilidad.
        </p>
        <button on:click={handleGoogleLogin} >
            <i class="fa-brands fa-google" id="i"></i>
            <hr class="hr">
            INICIAR CON GOOGLE
        </button>
    </div>
</div>

<style>
    .body {
        background-color: #084b6c;
        padding: 0;
        margin: 0;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }

    p {
        margin-left: 8px;
        color: white;
    }

    div {
        padding-top: 80px;
        text-align: center;
        background: linear-gradient(
            to right,
            rgb(21, 100, 108),
            rgb(3, 34, 41)
        );
        font-family: "Arial Narrow", Arial, sans-serif;
        height: 100vh;
    }

    h1 {
        color: rgb(236, 241, 241);
        text-shadow: 2px 2px 4px rgb(0, 0, 0);
        font-size: 35px;
        font-family:'Arial Narrow', Arial, sans-serif;
    }

    h5 {
        margin-top: 20px;
        color: rgb(188, 227, 218);
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.518);
    }

    p {
        margin-top: 30px;
        color: rgb(220, 220, 207);
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.517);
    }

    #i {
        background: linear-gradient(#d93025, #fbbc05, #34a853, #4285f4);
        -webkit-background-clip: text;
        color: transparent;
        margin-right: 10px;
        font-size: 27px;
        margin-top: 0px;
    }

    .hr {
        width: 2px; /* Establece el grosor de la línea */
        height: 27px; /* Establece la altura de la línea */
        background-color: black; /* Color de la línea */
        border: none; /* Elimina el borde predeterminado */
        margin-top: 0;
        margin-right: 20px;
    }

    button {
        width: 80%;
        height: 40px;
        border-radius: 10px;
        border: 1px solid rgb(231, 231, 231);
        display: flex;
        margin-top: 34px;
        box-shadow: 2px 2px 4px rgb(0, 0, 0);
        margin-left: 30px;
    }
</style>
