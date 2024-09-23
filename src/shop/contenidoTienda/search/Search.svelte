<script>
    //Importaciones
    import { navigate } from "svelte-routing";
    import Nav from "../nav/Nav.svelte";
    import Footer from "../footer/Footer.svelte";
    import { products } from "../nav/search";
    import {getCategoriesProducts} from "./search"
    import { booleanPathName } from "../../../components/tools/pathName/pathName";
    let body;
    booleanPathName.set(false);
    let prds;
    $: {
        prds = $products;
    }
    let category;


    let filteredProducts
    function filterProductsByCategory() {
    if (category) {
      filteredProducts = prds.content.filter(product => 
        product.categories.some(category => category.name === selectedCategory)
      );
    } else {
      filteredProducts = prds.content; // Si no se selecciona una categoría, mostrar todos los productos
    }
    
  }
    
</script>

<div bind:this={body} class="body">
        <Nav/>
    
    {#if prds}
        {#if prds.content}
            <div class="category">
                <h2>Productos</h2>
                <select bind:value={category} on:change={()=>{
                    const response = filterProductsByCategory($products,category);
                    console.log(response)
                    products.set(response);
                }} name="" id="">
                   {#each getCategoriesProducts(prds) as pr}
                        <option value="">{pr}</option>
                   {/each}
                   <option value="">seleccionar todas</option>
                </select>
            </div>

            <div class="products">
                <div>
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
                </div>
            </div>
        {/if}
    {/if}

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
