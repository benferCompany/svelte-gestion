<script>
    //Importaciones
    import { Link, navigate } from "svelte-routing";
    import Nav from "../nav/Nav.svelte";
    import Footer from "../footer/Footer.svelte";
    import { categorias, products } from "./categoria";
    import { onMount } from "svelte";
    let styleVolver = `padding-top: 0;
    margin-left: 10px;
    font-size: 20px;
    color: black;
    font-family: 'Arial Narrow', Arial, sans-serif;`;
    import { booleanPathName } from "../../../components/tools/pathName/pathName";
    let categoriesProducts = [];
    let body;
    $: {
        $booleanPathName = false;
        console.log(categorias);
        categoriesProducts = [
            ...new Set(
                products
                    .flatMap((product) => product.categories)
                    .filter((category) => category !== undefined),
            ),
        ];
        console.log(categoriesProducts);
    }
   window.addEventListener("resize",()=>{
        console.log(window.innerHeight)
    })
</script>

<div bind:this={body} class="body">
    <Nav />
    <div class="category">
        <h2>Categorias</h2>
        <select name="" id="">
            {#each categoriesProducts as category}
                <option>{category.name}</option>
            {/each}
        </select>
    </div>

    <div class="products">
        <div>
            {#each products as pro}
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div class="div-prod">
                    <div
                        on:click={() => {
                            console.log("/product/" + pro.id);
                            navigate(
                                "http://benfer.shop:8080/products/" + pro.id,
                            );
                        }}
                    >
                        <h5>{pro.title}</h5>
                        <div>
                            <img style="width:100%; border-radius: 5px;" src={pro.image} alt="" />
                        </div>
                        <div>
                            <h5>{pro.selling_price}</h5>
                        </div>
                    </div>
                    <div>
                        <button class="btn-a">Añadir</button>
                    </div>
                </div>
            {/each}
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

    .btn-a {
        color: black;
        background-color: #fce61c;
        border: 1px solid rgb(0, 0, 0);
        border-radius: 5px;
        width: 100%;
        height: 50px;
        box-shadow: 3px 4px 1px rgba(0, 0, 0, 0.3);
    }
</style>
