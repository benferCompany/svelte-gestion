<script>
<<<<<<< HEAD
    import { Link } from "svelte-routing";
    import { accessGoogle } from "./form";
    let styleVolver = `padding-top: 25px;
    margin-left: 10px;
    font-size: 20px;
    color: white;
    font-family: 'Arial Narrow', Arial, sans-serif;`;
    import { booleanPathName } from "../../../components/tools/pathName/pathName";
    import Footer from "../footer/Footer.svelte";
    $booleanPathName = false;
</script>

<link
    rel="stylesheet"
    href=" https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
/>
<div class="body">
    <div class="nav">
        <Link to="/shop" style={styleVolver} class="volver">Volver</Link>
        <img
            src="https://firebasestorage.googleapis.com/v0/b/cloud-image-361ff.appspot.com/o/images%2FbenfershopPng.png?alt=media&token=e58609b9-6974-49f1-bb0d-d872f93f7eaf"
            alt=""
            class="logo"
        />
    </div>
    <div class="contenedor">
        <h1>¡Bienvenido a BenFer Shop!</h1>
        <p>Estamos emocionados de tenerte aquí. Prepárate para descubrir nuestras ofertas exclusivas y productos únicos.</p>
        <button>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyAzgLs4C8wzj7OXS5I4e2r_ZGarlAlq5_xA&s" 
            alt="" class="img-btn">iniciar con google</button>
=======
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
>>>>>>> 81aabd8bc13cc946bbb75bcf5de6ebe737ed2f75
    </div>
</div>

<style>
    .body {
        background-color: #084b6c;
        padding: 0;
        margin: 0;
        width: 100%;
<<<<<<< HEAD
        height: 100%;
=======
>>>>>>> 81aabd8bc13cc946bbb75bcf5de6ebe737ed2f75
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
<<<<<<< HEAD
        height: 100%;
        text-align: center;
        padding: 40px;
        border-radius: 5px;
        background: linear-gradient(135deg, #298dff, #011e29);
        color: white;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    h1 {
            margin-bottom: 10px;
        }

    p {
            margin-bottom: 20px;
        }

    button {
        justify-content: space-between;
        padding-right: 0px;    
        margin-top: 30px;
        background-color: #ffffff;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.579);
        color: rgb(2, 2, 2);
        border: none;
        padding: 15px 30px;
        border-radius: 10px;
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.3s;
    }

    .img-btn {
        height: 20px;
        width: auto;
        margin-left: 0px;
        margin-right: 8px;
        
    }
=======
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

   
>>>>>>> 81aabd8bc13cc946bbb75bcf5de6ebe737ed2f75
</style>
