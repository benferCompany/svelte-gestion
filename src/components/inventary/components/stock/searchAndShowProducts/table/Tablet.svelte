<script>
    import { searchProduct } from "../../../../../stores/products";
    import debounce from "lodash/debounce";
    import Edit from "./edit/Edit.svelte";
    import { URL } from "../../../../../tools/connections/url";
    import { productsTable } from "./table";
    import {selectCompany, filterStock} from "../../../../../stores/company"
    export let handleClickClose;
    let products;
    let stores = [];
    export const debouncedSearch = debounce(async (description, page) => {
        $productsTable = await searchProduct(
            `${URL}/products/name?page=${page}&size=5`,
            {
                description: description.target.value,
            },
        );
    }, 300);

    $:{
        stores =[];
        products = $productsTable;
        if(products){
            if(products.content){
                products.content.map(p=>{
                    stores = [...stores, filterStock(p.stores,$selectCompany.name)[0]]
                    
                
                    
                });
            }
        }
       }
</script>

{#if products.content}
    <Edit bind:handleClickClose />
    <div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th class="col-1">IdInterno</th>
                    <th class="col-3">Descripción</th>
                    <th class="col-1">Stock</th>
                    <th class="col-1">Stock Min</th>
                    <th class="col-1">Stock Max</th>
                    <th class="col-1">Costo</th>
                    <th class="col-1">PVP</th>
                    <th class="col-1">Acción</th>
                </tr>
            </thead>

            <tbody>
                {#each products.content as product, index}
                    <tr class="align-middle">
                        <td>{product.idInternal}</td>
                        <td>{product.description}</td>
                        <td>{stores[index]? stores[index].stock:"S/E"}</td>
                        <td>{stores[index]? stores[index].stock_min:"S/E"}</td>
                        <td>{stores[index]? stores[index].stock_max:"S/E"}</td>                        
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
                            </div>
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
{/if}
