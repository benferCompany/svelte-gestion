<script>
    export let products = [];
</script>

{#if products}
<div>
    <table class="table table-striped">
        <thead>
            <tr>
                <th class="col-1">Id</th>
                <th class="col-3">Descripción</th>
                <th class="col-1">Costo</th>
                <th class="col-1">PVP</th>
            </tr>
        </thead>

        <tbody>
            {#each products.slice(0,20) as product}
                <tr class="align-middle">
                    <td>{product.id}</td>
                    <td>{product.description}</td>
                    <td>${product.cost_price}</td>
                    <td>${product.selling_price}</td>
                    
                </tr>
            {/each}
        </tbody>
    </table>
</div>

{/if}