<script>
    import { searchProduct } from "../../stores/products";
    import debounce from "lodash/debounce";
    import MessageDelete from "../../tools/delete/message/MessageDelete.svelte";
    import Edit from "../../inventary/editar/Edit.svelte";
    import { URL } from "../../tools/connections/url"
    import {deleteProduct} from "../../stores/products";
    export let handleClickClose;
    export let products = [];
    let visible;
    let objectId;


    export const debouncedSearch = debounce(async (description,page) => {
        products = await searchProduct(
            `${URL}/products/name?page=${page}&size=5`,
            {
                description: description.target.value,
            },
        );
    }, 300);
   $:{products}

</script>

{#if products.content}
<MessageDelete bind:visible bind:objects ={products.content} bind:objectId deleteObject={deleteProduct} />
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
            {#each products.content as product}
                <tr class="align-middle">
                    <td>{product.id}</td>
                    <td>{product.description}</td>

                    <td>{product.stores[0].stock}</td>
                    <td>{product.stores[0].stock_min}</td>
                    <td>{product.stores[0].stock_max}</td>

                    <td>${product.cost_price}</td>
                    <td>${product.selling_price}</td>
                    <td>
                        <div class="d-flex">
                            <button
                                on:click={handleClickClose(product)}
                                type="button"
                                class="btn btn-warning btn-sm">Editar</button
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