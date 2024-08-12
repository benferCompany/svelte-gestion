<script>
    export let outFlows;
    export let exportElement;
    $:{outFlows}
</script>

<div>
    <table class="table">
        <thead>
            <tr>
                <th>Id</th>
                <th>Fecha</th>
                <th>Descripción</th>
                <th>Tipo de Pago</th>
                <th>Pago</th>
                <th>Vendedor</th>
                <th>Actividad</th>
            </tr>
        </thead>
        <tbody>
            {#if outFlows}
                {#if outFlows.expenses}
                    {#each outFlows.expenses as expenses}
                        <tr>
                            <td>{expenses.id}</td>
                            <td>{expenses.date}</td>
                            <td>{expenses.description}</td>
                            <td>{expenses.paymentType}</td>
                            <td>{expenses.amount}</td>
                            <td>{expenses.salesPerson.name}</td>
                            <td>
                                <input
                                    type="button"
                                    class="btn btn-danger btn-sm"
                                    value="Eliminar"
                                />
                                <input
                                    on:click={async () => {
                                        exportElement.visible = true;
                                        exportElement.inputFocus();
                                        exportElement.outFlows = expenses;
                                    }}
                                    type="button"
                                    class="btn btn-warning btn-sm"
                                    value="Editar"
                                />
                            </td>
                        </tr>
                    {/each}
                {/if}
            {/if}
        </tbody>
    </table>
</div>
