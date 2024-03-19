<script>
    import { searchProduct } from "../../../../stores/products";
    import debounce from "lodash/debounce";
    import { URL } from "../../../../tools/connections/url";
    import { deleteSupplier } from "../../../suppliers";
    import MessageDelete from "../../../../tools/delete/message/MessageDelete.svelte";
    export let suppliers = [];
    export let handleClickClose;
    let text = "¿Estas seguro que quieres eliminar este proveedor?"
    let visible;
    let objectId;

    export const debouncedSearch = debounce(async (name, page) => {
        suppliers = await searchProduct(
            `${URL}/supplier/name?page=${page}&size=5`,
            {
                name: name.target.value,
            },
        );
    }, 300);
    $: {
        suppliers;
    }
</script>
<MessageDelete {text} bind:objects={suppliers} bind:visible bind:objectId deleteObject={deleteSupplier}/>
{#if suppliers}
    <table class="table">
        <thead>
            <tr> 
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Nombre de empresa</th>
                <th>Telefono</th>
                <th>Cuit</th>
                <th>Acción</th>
            </tr>
        </thead>
        <tbody>
            {#if suppliers.content}
                {#each suppliers.content as supplier}
                    <tr>
                        <td>
                            {supplier.name}
                        </td>
                        <td>
                            {supplier.last_name}
                        </td>
                        <td>
                            {supplier.name_bussiness}
                        </td>
                        <td>
                            {#if supplier.phone}
                                {supplier.phone}
                            {/if}
                        </td>
                        <td> 11-11111111-11 </td>
                        <td>
                            <button
                                on:click={() => {
                                    handleClickClose(supplier);
                                }}
                                class="btn btn-warning btn-sm me-1"
                                >Editar</button
                            >
                            <button
                                on:click={() => {
                                    visible= true;
                                    objectId = supplier.id;
                                }}
                                class="btn btn-danger btn-sm">Eliminar</button
                            >
                        </td>
                    </tr>
                {/each}
            {/if}
        </tbody>
    </table>
{/if}
