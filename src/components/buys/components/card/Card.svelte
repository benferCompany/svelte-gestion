<script>
    import {Link} from "svelte-routing"
    import {tdsStore} from "../cart";
    import debounce from "lodash/debounce";
    import { URL } from "../../../tools/connections/url";
    export let searchProduct;
    let storeSuppliers = [];
    let datos = [];
    export const debouncedSearch = debounce(async (description) => {
       
        storeSuppliers = await searchProduct(
                URL+"/storeSuppliers/idSupplier",
                { idSupplierOne: description.target.value }
            );
            storeSuppliers = storeSuppliers.content
    }, 300); // 300ms de tiempo de espera antes de realizar la búsqueda

    
    let stock;

    $: {
        datos = [];
        if (storeSuppliers.length > 0) {
            for (const storeSupplier of storeSuppliers) {
                if (storeSupplier.product.stores[0]) {
                    stock = storeSupplier.product.stores[0].stock;
                } else {
                    stock = 0;
                }
                datos = [
                    ...datos,
                    {
                        imagen: storeSupplier.product.image,
                        id: storeSupplier.product.id,
                        stock,
                        product: storeSupplier.product.description,
                        count: 1,
                        costo: storeSupplier.product.cost_price,
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
        <Link style="text-decoration:none" to="/buys">
            <div
                on:mousedown={() => {
                    tdsStore.handleClick(item);
                }}
                class="card-link mt-2"
            >
                <div
                    class="card"
                    style="width: 8rem; height:12em; overflow:hidden;"
                >
                    <p class="costo">${item.costo}</p>
                    <img src={item.imagen} alt="" />
                    <div class="card-body rounded p-product">
                        <p class="s-product">{item.product}</p>
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
    .costo {
        background: rgba(133, 216, 231, 0.8);
        position: absolute;
        left: 0.3em;
        top: 0.3em;
        padding: 0 0.5em 0 0.5em;
        border-radius: 0.2em;
        color: rgb(8, 8, 8);
    }
    .s-product{
        font-size: 0.8em;
        
    }
    
</style>
