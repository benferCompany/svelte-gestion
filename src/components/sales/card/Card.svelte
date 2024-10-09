<script>
    import { Link } from "svelte-routing";
    import { URL } from "../../tools/connections/url";
    import { tdsStore } from "../../stores/cart";
    import { selectCompany, filterStock } from "../../stores/company";
    export let searchProduct;
    import debounce from "lodash/debounce";

    let products = [];
    let datos = [];
    export const debouncedSearch = debounce(async (description) => {
        products = await searchProduct(URL + "/products/name", {
            description: description.target.value,
        });
        products = products.content;
        console.log(products)
    }, 300); // 300ms de tiempo de espera antes de realizar la búsqueda

    let stock;
    let stock_min;
    let stock_max;
    let stock_id;

    $: {
        datos = [];
        if (products.length > 0 && $selectCompany) {
            for (const product of products) {
                stock =
                    product.stores[0] &&
                    filterStock(product.stores, $selectCompany.name)[0]
                        ? filterStock(product.stores, $selectCompany.name)[0]
                              .stock
                        : 0;
                stock_min =
                    product.stores[0] &&
                    filterStock(product.stores, $selectCompany.name)[0]
                        ? filterStock(product.stores, $selectCompany.name)[0]
                              .stock_min
                        : 0;
                stock_max =
                    product.stores[0] &&
                    filterStock(product.stores, $selectCompany.name)[0]
                        ? filterStock(product.stores, $selectCompany.name)[0]
                              .stock_max
                        : 0;
                stock_id =
                    product.stores[0] &&
                    filterStock(product.stores, $selectCompany.name)[0]
                        ? filterStock(product.stores, $selectCompany.name)[0]
                              .id
                        : 0;

                datos = [
                    ...datos,
                    {
                        imagen: product.image,
                        id: product.id,
                        idInternal: product.idInternal,
                        stock,
                        stock_min,
                        stock_max,
                        stock_id,
                        product: product.title,
                        costo: product.cost_price,
                        count: 1,
                        pvp: product.selling_price,
                        discount: 0,
                        subTotal: 0,
                        delete: "&#128465;",
                    },
                ];
            }
        }
    }
</script>

<div class="d-flex flex-wrap justify-content-around" style="width: 40%;">
    {#each datos as item}
        <Link style="text-decoration:none" to="/ventas">
            <div
                on:mousedown={() => {
                    tdsStore.handleClick(item);
                }}
                class="card-link mt-2"
            >
                <div
                    class="card"
                    style="width: 8rem; overflow:hidden;"
                >
                    <p class="pvp">${item.pvp}</p>
                    <img src={item.imagen} alt="" />
                    <div class="card-body rounded p-product">
                        <p class="s-product">{item.product}</p>
                        {#if item.stock < item.stock_min || item.stock == 0}
                            <strong class="s-product text-danger">
                                Stock: {item.stock}
                            </strong>
                        {:else}
                            <strong class="s-product text-info"
                                >Stock: {item.stock}</strong
                            >
                        {/if}
                    </div>
                </div>
            </div>
        </Link>
    {/each}
</div>

<style>
    .card-link div:hover {
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
    }
    img {
        width: 80%;
        margin: auto;
        margin-top: 1em;
    }
    .pvp {
        background: rgba(133, 216, 231, 0.8);
        position: absolute;
        left: 0.3em;
        top: 0.3em;
        padding: 0 0.5em 0 0.5em;
        border-radius: 0.2em;
        color: rgb(8, 8, 8);
    }
    .s-product {
        margin: 0;
        padding: 0;
        font-size: 0.8em;
    }
</style>
