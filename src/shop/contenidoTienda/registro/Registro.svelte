<script>

    import { Link } from "svelte-routing";
    let styleVolver = `padding-top: 25px;
    margin-left: 10px;
    font-size: 20px;
    color: white;
    

    font-family: 'Arial Narrow', Arial, sans-serif;`;
    import { booleanPathName } from "../../../components/tools/pathName/pathName";
    import InputUb from "./ubi/InputUb.svelte";
    $booleanPathName = false;
    let styleInput = {
        input: ` border-radius: 3px;
        width: 81%;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);`,
        inputHover: `border: 1px solid rgb(0, 255, 251);
        border-color: #063146;
        transition: 0.5s;
        height: 35px;
        width: 200px;
        margin-top: 10px;
        border-radius: 3px;
        width: 100%;
        box-shadow: 0px 4px 8px rgb(6, 220, 181);`,
    };
    //exportación de Input
    let ubicacion;
    let callback;
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
        <div class="contenedor-hijo">
            <fieldset>
                <legend><h3>¡Bienvenido!</h3></legend>
                <form action="">
                    <div class="nyp">
                        <input
                            on:click={callback}
                            class="n"
                            type="text"
                            name="nombre"
                            id=""
                            placeholder="Nombre"
                        />
                        <input
                            on:click={callback}
                            class="p"
                            type="text"
                            name="apellido"
                            id=""
                            placeholder="Apellido"
                        />
                    </div>
                    <input type="number" name="din" id="" placeholder="DNI" />
                    <input
                        on:click={callback}
                        type="number"
                        name="telefono"
                        id=""
                        placeholder="+54 3624-694287"
                    />
                    <input
                        on:click={callback}
                        type="email"
                        name="email"
                        id=""
                        placeholder="e-mail"
                    />
                    <InputUb bind:ubicacion bind:callback bind:styleInput /> <br />
                    <button>Enviar</button>
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
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }


    .contenedor-hijo {
        margin-top: 30px;
        margin-left: 20px;
        width: 88%;
        height: 330px;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
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

    fieldset {
        border: 1px solid white;
        background-color: rgba(255, 255, 255, 0.8);
        border-radius: 5px;
        height: 350px;
    }

    h3 {
        color: #031b27;
        text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
        font-family: "Arial Narrow", Arial, sans-serif;
    }

    .nyp {
        display: flex;
        width: 100%;
    }

    .n {
        width: 40%;
        margin-left: 27px;
    }

    .p {
        width: 40%;
        margin-left: 3px;
    }

    fieldset {
        text-align: center;
    }

    input {
        border-radius: 3px;
        width: 81%;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    }

    input:hover {
        border: 1px solid rgb(0, 255, 251);
        border-color: #063146;
        transition: 0.5s;
        height: 35px;
        width: 200px;
        margin-top: 10px;
        border-radius: 3px;
        width: 82%;
        box-shadow: 0px 4px 8px rgb(6, 220, 181);
    }


    button {
        margin-top: 7px;
        border-radius: 5px;
        width: 81%;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.579);
        color: white;
        background-color: #031b27;
    }
</style>
