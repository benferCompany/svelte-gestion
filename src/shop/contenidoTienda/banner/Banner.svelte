<script>
    import Slaider from "../slaider/Slaider.svelte";
    import {navigate} from "svelte-routing"

    let duration = {
        duration: 5000,
        durationSiema: 1000,
    };
    const imagesBanner = [
        {
            id: 1,
            description: "¡Descubre Todo lo que Necesitas en Nuestro Bazar!",
            src: "https://firebasestorage.googleapis.com/v0/b/cloud-image-361ff.appspot.com/o/images%2Fbaza%20banner.jpg?alt=media&token=ba313288-173a-4d91-bd8f-0380a0f81cba",
            category:"Bazar"
        },
        {
            id: 2,
            description:
                "Accesorios que Definen Tu Estilo: Carteras, Cinturones y Más",
            src: "https://firebasestorage.googleapis.com/v0/b/cloud-image-361ff.appspot.com/o/images%2Fmarroquineria%20banner.jpg?alt=media&token=32e7222a-5b2a-4eb7-862c-7284a78c73ce",
            category: "Marriquinería"
        },
        {
            id: 3,
            description:
                "Transforma tus Ideas en Realidad con Nuestras Herramientas",
            src: "https://firebasestorage.googleapis.com/v0/b/cloud-image-361ff.appspot.com/o/images%2Fherramientas%20banner.jpg?alt=media&token=b9f3bb77-8115-4554-a4e3-acd762375b92",
            category:"Ferretería"
        },
        {
            id: 4,
            description:
                "¡Equipos de Pesca: Desde Principiantes hasta Expertos!",
            src: "https://firebasestorage.googleapis.com/v0/b/cloud-image-361ff.appspot.com/o/images%2Fpesca%20banner.jpg?alt=media&token=27f17bac-be93-480b-9e1a-87e501cc78b9",
            category: "Pesca"
        },
        {
            id: 5,
            description: null,
            src: "https://firebasestorage.googleapis.com/v0/b/cloud-image-361ff.appspot.com/o/images%2F300x250-envios.jpg?alt=media&token=0f9d8019-a750-42fe-83a5-30ee53e1b1a9",
            category: null,
        },
    ];
</script>

<Slaider bind:duration>
    {#if imagesBanner}
        {#each imagesBanner as banner}
            <div style="background-image: url({banner.src});" class="slider">
                {#if banner.description}
                    <div class="info">
                        <h1>{banner.description}</h1>
                        <button on:click={()=>{
                            navigate(`childCategory?category=${banner.category?banner.category:""}`)       
                        }} class="button">Ver más...</button>
                    </div>
                {/if}
            </div>
        {/each}
    {/if}
</Slaider>

<style>
    /*SLAIDER      SLAIDER       SLAIDER       SLAIDER*/

    .slider {
        height: 300px;
        margin-top: 22px;
        text-align: center;
        width: 100%;
        background-size: cover; /* Hace que la imagen cubra toda la pantalla */
        background-position: center; /* Centra la imagen en la pantalla */
        background-repeat: no-repeat;
    }

    .info {
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        position: relative;
        top: 0;
        left: 0;
    }

    /*H1 Y PÁRRAFOS     *H1 Y PÁRRAFOS     *H1 Y PÁRRAFOS    *H1 Y PÁRRAFOS   */

    h1 {
        color: white;
        font-family: "Arial Narrow", Arial, sans-serif;
        padding-top: 35px;
    }

    /*BOTONES       BOTONES        BOTONES       BOTONES*/
    .button {
        border: 1px solid black;
        background-color: #0d706f;
        color: white;
        margin-top: 20px;
    }
</style>
