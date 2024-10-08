<script>
    //Importaciones
    import { navigate } from "svelte-routing";
    import Nav from "../nav/Nav.svelte";
    import { locationProducts } from "../nav/search";
    import Footer from "../footer/Footer.svelte";
    import { booleanPathName } from "../../../components/tools/pathName/pathName";
    import Pagination from "./Pagination.svelte";
    import Loading from "../../../components/tools/loading/Loading.svelte";
    let body;
    booleanPathName.set(false);
    let loading;

    let filterProductsByCategory;
    const getDescount = (price, descount) => {
        let des = descount / 100;
        let valorOriginal = price; // Ejemplo
        let descuento = valorOriginal * des;
        let valorFinal = valorOriginal - descuento;

        return valorFinal;
    };
</script>

<Loading bind:loading />
<div bind:this={body} class="body">
    <Nav bind:loading bind:filterProductsByCategory />

    {#if $locationProducts.products && $locationProducts.products != []}
        {#if $locationProducts.products.content}
            <div class="category">
                <h4>Categorías</h4>
                <select
                    on:change={async (e) => {
                        $locationProducts.category = e.target.value;
                        const response = await filterProductsByCategory(
                            $locationProducts.category,
                            $locationProducts.desc,
                            0,
                            $locationProducts.size,
                        );
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
                            <div style="display:flex;">
                                <div style=" width:40%; padding:1em;">
                                    <img
                                        style="border-radius: 5px; max-width:100%; width:300px;"
                                        src={pro.image}
                                        alt=""
                                    />
                                </div>
                                <div
                                    style="width:60%; display:flex; justify-content:end; background:#f07423; padding:1em;"
                                >
                                    <div style="width:90%; text-align:center;">
                                        <div>
                                            <p>{pro.title}</p>
                                        </div>

                                        <div>
                                            <p class="oferta">
                                                Descuento por comprar online
                                            </p>
                                            <div style="display:flex; justify-content:center;">
                                                <div style="display:flex;">
                                                    <p class="tachar pe-1">
                                                        ${pro.selling_price}
                                                    </p>
                                                    <p> - </p>
                                                    <p
                                                        style="text-align:right;"
                                                        class="oferta ps-1"
                                                    >
                                                        ${getDescount(
                                                            pro.selling_price,
                                                            10,
                                                        )}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
    .pagination {
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .oferta {
        color:#51f043;
        text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
        font-weight: bold;
    }
    .tachar {
        text-decoration: line-through;
    }
</style>
