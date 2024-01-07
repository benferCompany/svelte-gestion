<script>
    import { searchProduct } from "../../../../stores/products";
    import debounce from "lodash/debounce";
    import { URL } from "../../../../tools/connections/url";
    export let customers = [];

    export const debouncedSearch = debounce(async (name, page) => {
        customers = await searchProduct(
            `${URL}/customer/name?page=${page}&size=5`,
            {
                name: name.target.value,
            },
        );
    }, 300);
    $: {
        console.log(customers);
    }
</script>

{#if customers}
    <table class="table">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Dirección</th>
                <th>Telefono</th>
                <th>Cuit</th>
                <th>Acción</th>
            </tr>
        </thead>
        <tbody>
            {#if customers.content}
                {#each customers.content as customer}
                    <tr>
                        <td>
                            {customer.name}
                        </td>
                        <td>
                            {customer.last_name}
                        </td>
                        <td>
                            {customer.adrress}
                        </td>
                        <td>
                            {#if customer.phone}
                            {customer.phone}
                            {/if}
                        </td>
                        <td> 11-11111111-11 </td>
                        <td>
                            <button class="btn btn-warning btn-sm me-1">Editar</button>
                            <button class="btn btn-danger btn-sm">Eliminar</button>
                        </td>
                    </tr>
                {/each}
            {/if}
        </tbody>
    </table>
{/if}
