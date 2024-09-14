<script>
    import { Link } from "svelte-routing";
    import { slide } from "svelte/transition";
    let booleanDetail = false;
</script>

<hr />
<div class="footer">
    <h4>Contactos</h4>
    <ul>
        <li><i class="fa-brands fa-facebook-f" id="fa"></i>Facebook</li>
        <li><i class="fa-brands fa-instagram" id="ig"></i>Instagram</li>
        <li><i class="fas fa-envelope" id="gm"></i>Gmail</li>
        <li class="w">
            <i class="fa-brands fa-whatsapp" id="wap"></i>WhatsApp
        </li>
    </ul>

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
        on:click={() => {
            booleanDetail = !booleanDetail;
        }}
    >
        <h4>Política y Privacidad</h4>
    </div>
    {#if booleanDetail}
        <div transition:slide>
            <p class="p">
                © 2024 BenFer Store Todos los derechos reservados. BenFer Store
                se compromete a proteger la privacidad de sus usuarios. Para más
                detalles, por favor consulte nuestra <Link to="https://benfer.shop/politicadeprivacidad">Política de privacidad</Link>.
            </p>
        </div>
    {/if}
    <h4>Por que Comprar en Benfer</h4>
    <p></p>
</div>

<style>
    .footer {
        background-color: #063146;
    }

    h4 {
        padding-top: 15px;
        text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.9);
        color: #d9d9d9;
        text-align: center;
        padding-bottom: 25px;
    }

    ul {
        list-style-type: none; /* Quita los puntos */
    }

    ul li {
        color: white;
        display: inline-block;
        margin-bottom: 10px;
    }

    .w {
        margin-left: 20px;
    }

    ul li i {
        margin-right: 15px;
        margin-left: 15px;
    }
    /* Quita los puntos */ /* Quita los puntos */

    .p {
        color: white;
        padding-left: 18px;
        background-color: #064145;
    }

    /* COLORES DE LOS ICONOS */
    #fa {
        color: rgb(0, 89, 255);
    }
    #ig {
        background: linear-gradient(45deg, #833AB4, #E1306C, #F77737, #FCAF45);
        -webkit-background-clip: text;
         color: transparent;
        border-radius: 3px;
    }
    #gm {
        background: linear-gradient(45deg, #D93025, #FBBC05, #34A853, #4285F4);
            -webkit-background-clip: text;
            color: transparent;
    }
    #wap {
        color: rgb(29, 230, 29);
    }
</style>
