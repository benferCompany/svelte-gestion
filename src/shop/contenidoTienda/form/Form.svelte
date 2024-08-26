<script>
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
    </div>
</div>

<style>
    .body {
        background-color: #084b6c;
        padding: 0;
        margin: 0;
        width: 100%;
        height: 100%;
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
</style>
