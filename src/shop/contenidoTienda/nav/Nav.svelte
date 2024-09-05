<script>
    import { slide } from "svelte/transition";
    import { Link, navigate } from "svelte-routing";
    import { getProduct, products } from "./search";
    import { login, userGoogle } from "../form/form";
    import { onMount } from "svelte";
let token;
    onMount(async () => {
       token = window.token
      

        console.log($userGoogle);
        if (!$userGoogle.entity) {
            //navigate("/login");
        }
    });
    let styleUlA = `display: block;

    height: 100%;
    width: 100%;
    line-height: 65px;
    font-size: 20px;
    color: white;
    padding-left: 40px;
    box-sizing: border-box;
    border-top: 1px solid rgb( 255, 255, 255,.1);
    border-bottom: 1px solid black;
    transition: 0.5s;
    text-decoration:none;`;

    let inputSearch = false;

    let isActive = false;
    let logoCheck = true;

    function handleClick() {
        isActive = !isActive;
        inputSearch = !inputSearch;
    }
</script>
{#if token}
<h5>{token}</h5>
{/if}
<div class="nav1" id="nav-1">
    <div style="width:100%; display:flex; justify-content:end;">
        {#if logoCheck}
            <div
                style=" width:60%; display:flex; justify-content:space-between;"
            >
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/cloud-image-361ff.appspot.com/o/images%2FlogoBenfer.png?alt=media&token=e2cf96da-df32-48f9-a8bf-fb588a31fdcf"
                    alt=""
                    class="logo-2"
                />
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div>
                    <p
                        on:click={handleClick}
                        class={isActive ? "active" : "lupa"}
                        style=""
                    >
                        🔍
                    </p>
                    <p></p>
                </div>
            </div>
        {:else}
            <div style=" width:60%; display:flex; justify-content:end;">
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div>
                    <p
                        on:click={handleClick}
                        class={isActive ? "active" : "lupa"}
                        style=""
                    >
                        🔍
                    </p>
                    <p></p>
                </div>
            </div>
        {/if}
    </div>

    <input
        type="checkbox"
        id="check"
        on:change={() => {
            logoCheck = !logoCheck;
        }}
    />
    <label for="check">
        <i class="fas fa-bars" id="btn"></i>
        <i class="fas fa-times" id="cancel"></i>
    </label>
    <div class="nav-2">
        <header>
            <img
                src="https://firebasestorage.googleapis.com/v0/b/cloud-image-361ff.appspot.com/o/images%2FbenfershopPng.png?alt=media&token=e58609b9-6974-49f1-bb0d-d872f93f7eaf"
                alt="no soportado"
                class="logo"
            />
        </header>
        <ul>
            <li>
                <Link to="/" style={styleUlA}
                    ><i class="fas fa-home"></i>Inicio</Link
                >
            </li>
            <li>
                <Link to="/user" style={styleUlA}
                    ><i class="fas fa-user"></i>Usuario</Link
                >
            </li>
            <li>
                <Link to="/carrito" style={styleUlA}
                    ><i class="fa-solid fa-cart-shopping"></i>Carrito</Link
                >
            </li>
            <li>
                <Link to="/categoria" style={styleUlA}
                    ><i class="fas fa-sliders-h"></i>Categorias</Link
                >
            </li>
            <li>
                <Link to="/" style={styleUlA}
                    ><i class="fas fa-qrcode"></i>Tus Compra</Link
                >
            </li>
        </ul>
    </div>
    {#if inputSearch}
        <form
            on:submit|preventDefault={async (e) => {
                products.set(await getProduct(e));
                navigate("/categoria");
            }}
            transition:slide
            style="display:flex; justify-content:center; width:100%; margin-top:1em;"
        >
            <input
                style="width:80%; border-radius:10px 0 0 10px"
                type="search"
                placeholder="Buscar Producto"
                id="search"
                name="search"
            />
            <input
                type="submit"
                style="border-radius:0 10px 10px 0"
                value="Buscar"
            />
        </form>
    {/if}
</div>

<style>
    /*estilo*/ /*estilo*/ /*estilo*/ /*estilo*/ /*estilo*/

    /*NAV */ /*NAV */ /*NAV */ /*NAV */

    .nav1 {
        position: fixed;
        width: 100%;
        justify-content: space-between;
        background-color: #063146;
        color: #063146;
        transition: 1s;
        z-index: 99;
    }

    .logo {
        margin-top: 0px;
        width: 80px;
        height: auto;
    }

    .logo-2 {
        margin-top: 10px;
        width: 100px;
        height: auto;
    }

    /*NAV2 */ /*NAV2 */ /*NAV2 */ /*NAV2 */ /*NAV2 */

    .nav-2 {
        position: fixed;
        left: -250px;
        width: 250px;
        height: 100%;
        background-color: #042331;
        transition: 0.5s;
        z-index: 99;
    }

    .nav-2 header {
        margin-top: 0;
        font-size: 22px;
        text-align: center;
        background-color: #063146;
        user-select: none;
    }

    ul li:hover {
        padding-left: 50px;
        text-decoration: none;
    }

    .nav-2 ul a i {
        margin-right: 15px;
    }

    #check {
        display: none;
    }

    label #btn,
    label #cancel {
        position: absolute;
        cursor: pointer;
        background-color: #042331;
        border-radius: 3px;
    }

    label #btn {
        left: 0px;
        top: 10px;
        font-size: 35px;
        color: white;
        padding: 6px 12px;
        transition: 0.5s;
    }

    label #cancel {
        z-index: 1111;
        left: -195px;
        top: 17px;
        font-size: 30px;
        color: #0a5275;
        padding: 4px 9px;
        transition: 0.5s;
    }

    #check:checked ~ .nav-2 {
        left: 0;
    }

    #check:checked ~ label #btn {
        left: 250px;
        opacity: 0;
        pointer-events: none;
    }

    #check:checked ~ label #cancel {
        left: 195px;
    }

    .lupa {
        font-size: 2em;
        margin-top: 0.3em;
        border-radius: 1em;
        cursor: pointer;
    }
    .active {
        font-size: 2em;
        margin-top: 0.3em;
        box-shadow: 0 0 5px -5px rgba(0, 0, 0, 0.5);
    }
</style>
