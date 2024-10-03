<script>
    //Importaciones
    import { navigate } from "svelte-routing";
    import Nav from "../../nav/Nav.svelte";
    import {locationProducts} from "../../nav/search"
    import Footer from "../../footer/Footer.svelte";
    import { booleanPathName } from "../../../../components/tools/pathName/pathName";
    import Pagination from "./Pagination.svelte";
    import Loading from "../../../../components/tools/loading/Loading.svelte"
    import { onMount } from "svelte";
    import { getChildCategories } from "../categoria";
    let body;
    booleanPathName.set(false);
    let loading;
    
    let filterProductsByCategory;

    onMount(async()=>{
        const param = new URLSearchParams(location.search);
        const category = param.get("category");
        const getCategories = await getChildCategories(category);
        const categories =[]

        for(let cat of getCategories){
            categories.push(cat.name);
        }
        $locationProducts.categories = categories;
        $locationProducts.category;
        $locationProducts.desc = " ";
        $locationProducts.size = 10;
        $locationProducts.products = await filterProductsByCategory($locationProducts.category?$locationProducts.category:category, $locationProducts.desc, 0,$locationProducts.size);
        console.log($locationProducts)
        console.log(category);
    })    
</script>
<Loading bind:loading  />
<div bind:this={body} class="body">
    <Nav bind:loading bind:filterProductsByCategory />

    {#if $locationProducts.products && $locationProducts.products !=[]}
        {#if $locationProducts.products.content}
            <div class="category">
                <h4>Categorías</h4>
                <select
                    on:change={async(e)=>{
                        $locationProducts.category = e.target.value;
                        const response = await filterProductsByCategory($locationProducts.category, $locationProducts.desc, 0,$locationProducts.size);
                        console.log(response)
                    }}
                    bind:value={$locationProducts.category}
                    name=""
                    id=""
                >
                    <option value="" selected>seleccionar todas</option>
                    {#if $locationProducts.categories}
                        {#each $locationProducts.categories as pr}
                            <option value={pr}>{pr}</option>
                        {/each}
                    {/if}
                </select>
            </div>

            <div class="products">
                <div>
                        {#each $locationProducts.products.content as pro}
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
            <div class="pagination">

                <Pagination bind:filterProductsByCategory />
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

    h4 {
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
    .pagination{
        width:100%;
        display: flex;
        justify-content: center;
    }
</style>
