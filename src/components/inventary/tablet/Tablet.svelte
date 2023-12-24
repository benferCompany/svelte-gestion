<script>
    import { searchProduct } from "../../stores/products";
    export let handleClickClose;
    import debounce from "lodash/debounce";
    import MessageDelete from "../message/MessageDelete.svelte";
    import Edit from "../editar/Edit.svelte";

    let products = [];
    let visible = false;
    let dts;

    export const debouncedSearch = debounce(async (description) => {
        products = await searchProduct("http://54.175.227.120:8080/products/name", {
            description: description.target.value,
        });
    }, 300);
</script>

<MessageDelete bind:products bind:visible {dts} />
<Edit bind:products bind:handleClickClose />
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
            {#each products as product}
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
                                    dts = {
                                        product,
                                    };
                                }}>Eliminar</button
                            >
                        </div>
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
