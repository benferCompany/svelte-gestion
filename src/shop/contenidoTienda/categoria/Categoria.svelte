<script>
    //Importaciones
    import {navigate } from "svelte-routing";
    import Nav from "../nav/Nav.svelte";
    import Footer from "../footer/Footer.svelte";

    import { products } from "../nav/search";

    import { booleanPathName } from "../../../components/tools/pathName/pathName";
    let body;
    booleanPathName.set(false);
    window.addEventListener("resize", () => {
        console.log(window.innerHeight);
    });
    let prds;
    $: {
        prds = $products;
    }
</script>

<div bind:this={body} class="body">
    <Nav />
    <div class="category">
        <h2>Categorias</h2>
        <select name="" id="">
            <!---Agrer aca las option de categoria que tiene los productos-->
        </select>
    </div>

    <div class="products">
        <div>
            {#if prds}
            {#if prds.content}
                {#each prds.content as pro}
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <div
                        class="div-prod"
                        on:click={() => {
                            navigate(`/description?id=` + pro.id);
                        }}
                    >
                        <div>
                            <h5>{pro.title}</h5>
                            <div>
                                <img
                                    style="width:100%; border-radius: 5px;"
                                    src={pro.image}
                                    alt=""
                                />
                            </div>
                            <div>
                                <h5>{pro.selling_price}</h5>
                            </div>
                        </div>
                        <div></div>
                    </div>
                {/each}
                {/if}
            {/if}
        </div>
    </div>

    <Footer />
</div>

<style>
    /*NAV 2 ESTILOS*/ /*NAV 2 ESTILOS*/
    .body {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: #09506a;
    }

    .category {
        background-color: #108ab7;
        padding: 1em;
        margin-top: 76px;
        display: flex;
        justify-content: space-between;
    }

    h2 {
        text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
        color: #d9d9d9; /* #f07423 (naranja) #f7ce26 (Amarillo) #0fb1ea(Azul)          */
    }

    .products {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 30px;
    }

    .div-prod {
        width: 93%;
        background-color: rgb(69, 172, 213);
        padding: 1em;
        color: white;
        box-shadow: 0 0 12px 1px rgba(0, 0, 0, 0.5);
        border-radius: 0.2em;
        margin-bottom: 1em;
        margin-left: 10px;
        cursor: pointer;
    }
    .div-prod img {
        border-radius: 0.1em;
    }

</style>
