<script>
    import Slaider from "../slaider/Slaider.svelte";

    let duration = {
        duration:3000,
        durationSiema:1000
    }
</script>

<Slaider bind:duration>
    <div class="slaide1">
        <div class="info">
            <h1>¡Descubre Todo lo que Necesitas en Nuestro Bazar!</h1>
            <button class="btn">Ver más...</button>
        </div>
    </div>

    <div class="slaide2">
        <div class="info">
            <h1>Accesorios que Definen Tu Estilo: Carteras, Cinturones y Más</h1>
            <button class="btn">Ver más...</button>
        </div>
    </div>

    <div class="slaide3">
        <div class="info">
            <h1>Transforma tus Ideas en Realidad con Nuestras Herramientas</h1>
            <button class="btn">Ver más...</button>
        </div>
    </div>

    <div class="slaide4">
        <div class="info">
            <h1>¡Equipos de Pesca: Desde Principiantes hasta Expertos!</h1>
            <button class="btn">Ver más...</button>
        </div>
    </div>
</Slaider>

<style>
    /*SLAIDER      SLAIDER       SLAIDER       SLAIDER*/

    .slaide1,
    .slaide2,
    .slaide3,
    .slaide4 {
        height: 250px;
        margin-top: 22px;
        text-align: center;
        width: 100%;
        background-size: cover; /* Hace que la imagen cubra toda la pantalla */
        background-position: center; /* Centra la imagen en la pantalla */
        background-repeat: no-repeat;
    }

    .info{
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        position: relative;
        top:0;
        left: 0;

    }

    .slaide1 {
        background-image: url("https://firebasestorage.googleapis.com/v0/b/cloud-image-361ff.appspot.com/o/images%2Fbaza%20banner.jpg?alt=media&token=ba313288-173a-4d91-bd8f-0380a0f81cba");
    }

    .slaide2 {
        background-image: url("https://firebasestorage.googleapis.com/v0/b/cloud-image-361ff.appspot.com/o/images%2Fmarroquineria%20banner.jpg?alt=media&token=32e7222a-5b2a-4eb7-862c-7284a78c73ce");
    }

    .slaide3 {
        background-image: url("https://firebasestorage.googleapis.com/v0/b/cloud-image-361ff.appspot.com/o/images%2Fherramientas%20banner.jpg?alt=media&token=b9f3bb77-8115-4554-a4e3-acd762375b92");
    }

    .slaide4 {
        background-image: url("https://firebasestorage.googleapis.com/v0/b/cloud-image-361ff.appspot.com/o/images%2Fpesca%20banner.jpg?alt=media&token=27f17bac-be93-480b-9e1a-87e501cc78b9");
    }

    /*H1 Y PÁRRAFOS     *H1 Y PÁRRAFOS     *H1 Y PÁRRAFOS    *H1 Y PÁRRAFOS   */

    h1 {
        color: white;
        font-family: "Arial Narrow", Arial, sans-serif;
        padding-top: 35px;

    }

    /*BOTONES       BOTONES        BOTONES       BOTONES*/
    .btn {
        border: 1px solid black;
        background-color: #0d706f;
        color: white;
        margin-top: 20px;
    }
</style>
