<script>
    // Aquí puedes agregar lógica si es necesario, como enviar un formulario
    import { Link } from "svelte-routing";
    import { booleanPathName } from "../../components/tools/pathName/pathName";

    booleanPathName.set(false);
</script>

<main>
    <h1>Eliminación de cuentas en BenferShop</h1>
    <p>
        Si deseas eliminar tu cuenta de BenferShop y todos los datos asociados,
        por favor sigue los pasos a continuación:
    </p>
    <ol>
        <li>Inicia sesión en tu cuenta de BenferShop.</li>
        <li>
            Dirígete a al menu luego en "Usuario" en tu perfil de usuario.
        </li>
        <li>Selecciona "Eliminar cuenta" y confirma tu acción.</li>
        <li>
            Si tienes algún problema o no puedes acceder a tu cuenta, por favor
            envianos un email a "benjidfer@gmail.com".
        </li>
    </ol>

    <p><strong>¿Qué datos serán eliminados?</strong></p>
    <p>
        Al eliminar tu cuenta, eliminaremos tu nombre de usuario, dirección de
        correo electrónico y todas las preferencias guardadas en BenferShop. Sin
        embargo, algunos datos, como el historial de compras, podrían
        conservarse durante un período adicional de 30 días para cumplir con
        nuestras obligaciones legales.
    </p>

    <p>
        Para más información sobre cómo manejamos tus datos, por favor consulta
        nuestra <Link to="/politicadeprivacidad">Política de Privacidad</Link>.
    </p>
</main>

<style>
    main {
        padding: 2rem;
        max-width: 800px;
        margin: auto;
    }
</style>
