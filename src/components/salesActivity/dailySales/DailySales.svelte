<script>
    import { onMount } from "svelte";
    import { getClosingNow } from "./dailySale";
    import Alert from "./alert/Alert.svelte";
    let visible;
    let closingNow;
    onMount(async () => {
        closingNow = await getClosingNow();
        console.log(closingNow);
    });
</script>

<Alert bind:visible />
{#if closingNow}
    <div class="d-flex justify-content-around">
        <div style="width:48%">
            <h4>Salidas</h4>
            <div class="content">
                <table class="">
                    <thead>
                        <tr>
                            <th class="col-3">Descripción</th>
                            <th>Tipo de pago</th>
                            <th>pago</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each closingNow.movements.outFlows as outFlows}
                            <tr>
                                <td>{outFlows.description}</td>
                                <td>Efectivo</td>
                                <td>{outFlows.payment}</td>
                            </tr>
                        {/each}
                        {#each closingNow.movements.supplierPayments as supplierPayments}
                            <tr>
                                <td
                                    >{supplierPayments.invoiceSupplier
                                        .numberInvoice}</td
                                >
                                <td>{supplierPayments.paymentType}</td>
                                <td>{supplierPayments.payment}</td>
                            </tr>
                        {/each}
                    </tbody>
                </table>
            </div>
            
        </div>
        <div style="width:48%">
            <h4>Entrada</h4>
            <div class="content">
                <table class="">
                    <thead>
                        <tr>
                            <th>Descripción</th>
                            <th>Tipo de pago</th>
                            <th>pago</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each closingNow.movements.details as details}
                            <tr>
                                <td>{details.numberInvoice}</td>
                                <td>{details.paymentType}</td>
                                <td>{details.total}</td>
                            </tr>
                        {/each}
                    </tbody>
                </table>
            </div>
            
        </div>
    </div>
    <hr />
    <div class="d-flex justify-content-around">
        <div style="">
            <h3>Activo</h3>
            <h5 class="text-warning">Efectivo: ${closingNow.active.cash}</h5>
            <h5 class="text-warning">
                Cuenta: ${closingNow.active.account_bank}
            </h5>
            <h5 class="text-danger">
                Cuenta Corriente: ${closingNow.active.current_account}
            </h5>
            <h5>Almacen ${closingNow.active.value_store}</h5>
            <hr />
            <h5>Total ${closingNow.active.total}</h5>
        </div>

        <div style="">
            <h3>Pasivo</h3>
            <h5 class="text-info">
                Cuenta proveedor ${closingNow.passive.account_suppliers}
            </h5>
            <h5 class="text-info">Gastos: ${closingNow.passive.outFlows}</h5>
            <h5 class="text-info">
                Pagos a proveedores: ${closingNow.passive.supplierPayment}
            </h5>
            <h5 class="text-success">Total: ${closingNow.passive.total}</h5>
            <div style="">
                <h3>Capital</h3>
                <h5 class="text-info">
                    Capital Social ${closingNow.capital.capital_social}
                </h5>
                <h5 class="text-info">
                    Resultado: ${closingNow.active.total-(closingNow.passive.total+closingNow.capital.total)}
                </h5>
                <h5 class="text-success">Total: ${closingNow.capital.total}</h5>
            </div>
        </div>
    </div>
    <div></div>

    <div class="d-flex justify-content-center">
        <input
            on:click={() => {
                visible = !visible;
            }}
            class="btn btn-info"
            type="button"
            value="Cerrar caja"
        />
    </div>
{/if}

<style>
    .content {
        width: 100%;
        height: 200px;

        background-color: #f0f0f0;
        border: 1px solid #ccc;
        box-shadow:
            inset 0 4px 6px rgba(0, 0, 0, 0.2),
            /* Sombra oscura en la parte superior */ inset 0 -4px 6px rgba(0, 0, 0, 0.2),
            /* Sombra oscura en la parte inferior */ inset 4px 0 6px
                rgba(0, 0, 0, 0.2),
            /* Sombra oscura en la izquierda */ inset -4px 0 6px rgba(0, 0, 0, 0.2),
            /* Sombra oscura en la derecha */ inset 0 6px 6px
                rgba(255, 255, 255, 0.5); /* Sombra clara en el centro para darle más profundidad */
        border-radius: 0.1em;
        padding: 20px;
        box-sizing: border-box;
    }
    table {
        width: 100%;
        border-collapse: collapse;
    }
    th,
    td {
        border: 1px solid #ccc;
        padding: 8px;
        text-align: left;
    }

    th {
        background-color: #f4f4f4;
    }

    tbody tr:nth-child(odd) {
        background-color: #aab2b4; /* Color para las filas pares */
    }
</style>
