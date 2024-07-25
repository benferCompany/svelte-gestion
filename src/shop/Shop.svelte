<script>
    import { Link } from "svelte-routing";
    import { booleanPathName } from "../components/tools/pathName/pathName";
    import Slider from "./components/slider/Slider.svelte";
    import ButBuy from "./components/butBuy/ButBuy.svelte";
    import Security from "./components/Security/Security.svelte";
    $booleanPathName = false;
    let booleanSearch = false;

    let contendedor = `background-color: #161c40; width: 100%; color:white;`;
    let nav = `padding: 2em;
        display: flex;
        justify-content: space-between;`;
    let ul = ` padding: 2em;
        width: 50em;
        border-radius: 20em;
        display: flex;
        justify-content: space-around;
        background: white;
        text-decoration: none;
        list-style: none;
        text-decoration: none;
        `;
    let li = `font-size: 1.5em;`;
</script>
<div class="contendedor">

    <nav class="nav">
        <div style="width:20em;"><img class="w-100" src="./imgs/logo.jpg" alt=""></div>
        <div>
            <div>
                {#if !booleanSearch}
                <ul>
                    <li><Link style="color:black; text-decoration:none;" to="/">Home</Link></li>
                    <li><Link style="color:black; text-decoration:none;" to="/">Como Comprar</Link></li>
                    <li><Link style="color:black; text-decoration:none;" to="/">Contactanos</Link></li>
                    <li class="login" ><Link style="color:black; text-decoration:none;" to="/">Ingresar</Link></li>
                    <li><Link style="color:black; text-decoration:none;" to="/">Registrarse</Link></li>
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <li on:click={()=>{booleanSearch = !booleanSearch}}><Link style="color:black; text-decoration:none;" to="/shop">&#128269;</Link></li>
              
                </ul>
                {:else}
                    <div style ="width:50em;">
                        <input style="
                        width:100%;
                        font-size:2em;
                        padding:1em; border-radius:20em;" placeholder="Buscar producto" type="search" name="" id="">
                    </div>
                {/if}
            </div>
        </div>
    </nav>


    <Slider/>
</div>
<ButBuy/>
<hr/>
<Security/>

<style>
    .contendedor {
        background-color: #161c40;
        width: 100%;
        
        color:white;
    }
    .nav {
        padding: 2em;
        display: flex;
        justify-content: space-between;
    }
    ul {
        padding: 2em;
        width: 50em;
        border-radius: 20em;
        display: flex;
        justify-content: space-around;
        background: white;
        text-decoration: none;
        list-style: none;
        text-decoration: none;
        
    }

    ul li{
        font-size: 1.5em;
    }

    
</style>
