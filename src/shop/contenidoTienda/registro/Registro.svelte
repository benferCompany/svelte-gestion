<script>
    import { Link, navigate } from "svelte-routing";
    import { onMount } from "svelte";
    import { updateCustomer, createCustomer, deletecount } from "./customer";
    import Overlay from "../../../components/tools/overlay/Overlay.svelte"
    let user;
    let email;
    onMount(async () => {
        if (Android.getEmail()) {
            user = await createCustomer(Android.getEmail());
            email = Android.getEmail();
        }
    });
    let styleVolver = `padding-top: 25px;
    margin-left: 10px;
    font-size: 20px;
    color: white;
    font-family: 'Arial Narrow', Arial, sans-serif;`;
    import { booleanPathName } from "../../../components/tools/pathName/pathName";
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
    let visible = false;
    const handleRemoveCount = () => {
        visible = !visible;
    };
</script>

<link
    rel="stylesheet"
    href=" https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
/>

<Overlay bind:visible>
    <div style="position:absolute; top:25%; left:25%; width:50%; background:white;">
        <div>
            <p>
                ¿Esta seguro que quieres eliminar esta cuenta? ¡Los cambios no
                podran revertirse!
            </p>
            <div style="display:flex; justify-content:center;">
                <button
                    on:click={() => {
                        visible = !visible;
                    }}
                    class="btn btn-danger">Cancelar</button
                >
                <!-- svelte-ignore missing-declaration -->
                <button
                    on:click={async () => {
                        if (Android) {
                            Android.logout();
                        }
                        await deletecount(email);
                    }}
                    class="btn btn-success">Confirmar</button
                >
            </div>
        </div>
    </div>
</Overlay>    

    {#if user}
    <div class="body">
        <div class="nav">
            <Link to="/" style={styleVolver} class="volver">Volver</Link>
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
                    <form on:submit|preventDefault={updateCustomer} action="">
                        <input
                            style="display:none"
                            type="text"
                            name="id"
                            value={user.id}
                        />
                        <input
                            on:click={callback}
                            type="text"
                            name="name"
                            id=""
                            placeholder="Nombre"
                            value={user.name}
                        />
                        <input
                            on:click={callback}
                            type="text"
                            name="last_name"
                            id=""
                            value={user.last_name}
                            placeholder="Apellido"
                        />
                        <input
                            value={user.idPersonal}
                            type="number"
                            name="idPersonal"
                            id=""
                            placeholder="DNI"
                        />
                        <input
                            on:click={callback}
                            type="number"
                            name="mobile_phone"
                            id=""
                            placeholder="+54 3624-694287"
                            value={user.mobile_phone}
                        />
                        <input
                            on:click={callback}
                            type="email"
                            style="color:black;"
                            id=""
                            placeholder="e-mail"
                            value={user.email}
                            disabled
                        />
                        <input
                            style="display:none;"
                            value={user.email}
                            type="email"
                            name="email"
                            id=""
                        />
                        <input
                            on:click={callback}
                            type="text"
                            name="address"
                            id=""
                            placeholder="Dirección"
                            value={user.address}
                        />
                        <div>
                            <button type="submit">Actualizar</button>
                            <!-- svelte-ignore missing-declaration -->
                            <button
                                type="reset"
                                on:click={() => {
                                    if (Android) {
                                        Android.logout();
                                    }
                                }}>Cerrar sesión</button
                            >
                            <button
                                on:click={() => {
                                    handleRemoveCount()
                                }}>Elminar cuenta</button
                            >
                        </div>
                    </form>
                </fieldset>
            </div>
        </div>
    </div>
{/if}

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
    }

    h3 {
        color: #031b27;
        text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
        font-family: "Arial Narrow", Arial, sans-serif;
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
