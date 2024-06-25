<script>
    export let details = [];7
    export let viewInvoice;
</script>
<table class="table">
    <thead>
        <tr>
            <td>Id</td>
            <td>Cliente</td>
            <td>Datos fiscal</td>
            <td>Vendedor</td>
            <td>Total</td>
            <td>Acción</td>
        </tr>
    </thead>
    <tbody>
        {#if details.length > 0}
            {#each details as detail}
                <tr>
                    <td>{detail.id}</td>
                    <td>{detail.customer.name}</td>
                    <td>{detail.fiscalStatus}</td>
                    <td>{detail.salesPerson.name}</td>
                    <td>${detail.total}</td>
                    <td><input on:click={()=>{
                        viewInvoice(detail);
                    }} type="button" value="Ver" class="btn btn-info btn-sm"></td>
                </tr>
            {/each}
        {/if}
    </tbody>
</table>
