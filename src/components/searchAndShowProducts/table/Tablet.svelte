<script>
    import { searchProduct } from "../../stores/products";
    import debounce from "lodash/debounce";
    import MessageDelete from "../../tools/delete/message/MessageDelete.svelte";
    import { selectCompany, filterStock } from "../../stores/company";
    import Edit from "../../Products/editar/Edit.svelte";
    import { URL } from "../../tools/connections/url";
    import { deleteProduct } from "../../stores/products";
    import { productsTablet } from "./tablet";
    export let handleClickClose;
    export let products = [];
    let visible;
    let objectId;
    let stock;
    let stock_min;
    let stock_max;
    let stock_id;
    let stores = [];

    export const debouncedSearch = debounce(async (description, page) => {
        $productsTablet = await searchProduct(
            `${URL}/products/name?page=${page}&size=5`,
            {
                description: description.target.value,
            },
        );
    }, 300);
    let alertMessage;
    $: products = $productsTablet;
    $: {
        stores = [];
        if (products.content) {
            for (const product of products.content) {
                console.log(product.stores);
                console.log(filterStock(product.stores, $selectCompany.name));
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
                        ? filterStock(product.stores, $selectCompany.name)[0].id
                        : 0;

                stores = [
                    ...stores,
                    {
                        stock,
                        stock_min,
                        stock_max,
                    },
                ];
            }
        }
    }
</script>

{#if products.content}
    <MessageDelete
        {alertMessage}
        bind:visible
        bind:objects={products.content}
        bind:objectId
        deleteObject={deleteProduct}
    />
    <Edit products={products.content} bind:handleClickClose />
    <div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th class="col-1">Id</th>
                    <th class="col-3">Descripción</th>
                    <th class="col-1">Stock</th>
                    <th class="col-1">Stock-min</th>
                    <th class="col-1">Stock-max</th>
                    <th class="col-1">Costo</th>
                    <th class="col-1">PVP</th>
                    <th class="col-1">Acción</th>
                </tr>
            </thead>

            <tbody>
                {#each products.content as product, index (product)}
                    <tr class="align-middle">
                        <td>{product.id}</td>
                        <td>{product.description}</td>

                        <td>{stores[index] ? stores[index].stock : 0}</td>
                        <td>{stores[index] ? stores[index].stock_min : 0}</td>
                        <td>{stores[index] ? stores[index].stock_max : 0}</td>

                        <td>${product.cost_price}</td>
                        <td>${product.selling_price}</td>
                        <td>
                            <div class="d-flex">
                                <button
                                    on:click={handleClickClose(product)}
                                    type="button"
                                    class="btn btn-warning btn-sm"
                                    >Editar</button
                                >
                                <button
                                    type="button"
                                    class="btn btn-danger btn-sm ms-1"
                                    on:click={(e) => {
                                        visible = true;
                                        objectId = product.id;
                                    }}>Eliminar</button
                                >
                            </div>
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
{/if}
