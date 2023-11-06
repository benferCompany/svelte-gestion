<script>
    import { Link } from "svelte-routing";
    import { tdsStore } from "../../stores/cart";
    export let searchProduct;
    import debounce from "lodash/debounce";

    let products = [];
    let datos = [];
    export const debouncedSearch = debounce(async (description) => {
       
            products = await searchProduct(
                "http://localhost:8080/products/name",
                { description: description.target.value }
            );
        
    }, 300); // 300ms de tiempo de espera antes de realizar la búsqueda

    
    let stock;

    $: {
        datos = [];
        if (products.length > 0) {
            for (const product of products) {
                if (product.stores[0]) {
                    stock = product.stores[0].stock;
                } else {
                    stock = 0;
                }
                datos = [
                    ...datos,
                    {
                        imagen: product.image,
                        id: product.id,
                        stock,
                        product: product.description,
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
                    style="width: 8rem; height:12em; overflow:hidden;"
                >
                    <p class="pvp">${item.pvp}</p>
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
    .pvp {
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
