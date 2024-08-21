<script>
    import { Link, navigate } from "svelte-routing";
    import { IniciaSesion, accesGoogle } from "./form";
    import { onMount } from "svelte";


    let styleVolver = `
        padding-top: 25px;
        margin-left: 10px;
        font-size: 20px;
        color: white;
        font-family: 'Arial Narrow', Arial, sans-serif;
    `;

    // Manejador para el inicio de sesión
    async function handleSubmit(event) {
        try {
            await IniciaSesion(event);
            navigate('/shop');  // Redirigir al usuario tras iniciar sesión exitosamente
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
        }
    }

    // Manejador para la autenticación con Google
    async function handleGoogleLogin() {
        try {
            const result = await accesGoogle();
            if (result) {
                navigate('/shop');  // Redirigir tras autenticación exitosa
            }
        } catch (error) {
            console.error("Error al iniciar sesión con Google:", error);
        }
    }
</script>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />

<div class="body">
    <div class="nav">
        <Link to="/shop" style={styleVolver} class="volver">Volver</Link>
        <img src="/images/benfershopPng.png" alt="Logo" class="logo" /> <!-- Reemplazar con una ruta local -->
    </div>
    <div class="contenedor">
        <div class="contenedor-hijo">
            <fieldset>
                <legend><i class="fas fa-user" id="icono-user"></i></legend>
                <form on:submit|preventDefault={handleSubmit}>
                    <input
                        class="input-1"
                        type="email"
                        name="email"
                        placeholder="Usuario"
                        required
                    /> <br />
                    <input
                        class="input-2"
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                        required
                    />
                    <div class="checkyp">
                        <input type="checkbox" name="remember" id="check" />
                        <p>Recordar</p>
                    </div>
                    <button type="submit" class="btn-f-1">Iniciar</button> <br />
                    <button type="button" on:click={handleGoogleLogin} class="btn-f-2">
                        Acceder con Google
                    </button>
                    <Link style="color:white;" to="/register" id="a">Crear cuenta</Link>
                </form>
            </fieldset>
        </div>
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

    .nav {
        display: flex;
        justify-content: space-between;
        background-color: #063146;
        height: 70px;
    }

    .logo {
        margin-top: 5px;
        width: 85px;
        height: auto;
    }

    .contenedor {
        position: relative;
        height: 100vh;
    }

    .contenedor-hijo {
        position: absolute;
        top: 20%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 200px;
        height: 100px;
        justify-content: center;
    }

    fieldset {
        height: 359px;
        width: 220px;
        text-align: center;
        border: 1px solid black;
        border-radius: 10px;
        background-color: rgba(71, 206, 255, 0.524);
        box-shadow: 1px 1px 20px #063146;
    }

    legend {
        background-color: #084b6c;
        width: 80px;
        height: 55px;
        border-radius: 30px;
        margin: auto;
    }

    #icono-user {
        color: white;
        font-size: 50px;
    }

    input {
        height: 30px;
        width: 200px;
        margin-top: 25px;
        border-radius: 3px;
        border: 1px solid black;
        background-color: rgb(169, 230, 254);
        color: rgb(0, 0, 0);
    }

    input:hover {
        height: 35px;
        transition: 0.5s;
    }

    .checkyp {
        display: flex;
        align-items: center;
        margin-top: 3px;
    }

    p {
        margin-left: 8px;
        color: white;
    }

    #check {
        width: 15px;
    }

    .btn-f-1, .btn-f-2 {
        width: 200px;
        height: 32px;
        margin-top: 8px;
        border: 1px solid black;
        border-radius: 5px;
    }

    .btn-f-1 {
        background-color: yellow;
        color: rgb(43, 43, 43);
    }

    .btn-f-2 {
        background-color: rgb(255, 114, 6);
        color: white;
    }

   
</style>
