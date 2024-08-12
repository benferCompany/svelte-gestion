<script>
    import { deletependingPayments } from "../pendingPayments";

    export let visible;
    export let getPosition;

    //Variables de MessageOptimized
    export let elementsMessage;

   
</script>

<table class="table">
    <thead>
        <tr>
            <th>Id</th>
            <th>Fecha</th>
            <th>Descripción</th>
            <th>Tipo de pago</th>
            <th>Monto</th>
            <th>Condición</th>
            <th>Vendedor</th>
            <th>Actividad</th>
        </tr>
    </thead>
    <tbody>
        {#if elementsMessage}
            {#if elementsMessage.objects}
                {#each elementsMessage.objects as pendingPayment}
                    <tr>
                        <td>{pendingPayment.id}</td>
                        <td>{pendingPayment.date}</td>
                        <td>{pendingPayment.description}</td>
                        <td>{pendingPayment.paymentType}</td>
                        <td>{pendingPayment.amount}</td>
                        <td
                            >{#if pendingPayment.isPaid}
                                <strong class="text-success">Pagado</strong>
                            {:else}
                                <strong class="text-danger">Pendiente</strong>
                            {/if}
                        </td>
                        <td>{pendingPayment.salesPerson.name}</td>
                        <td>
                            <input
                                type="button"
                                value="Editar"
                                class="btn btn-warning btn-sm"
                                on:click={() => {
                                    getPosition(pendingPayment);
                                    visible = !visible;
                                }}
                            />
                            <input
                                on:click={() => {
                                    if (elementsMessage) {
                                        elementsMessage.objectId =
                                            pendingPayment.id;
                                        elementsMessage.text =
                                            "Esas seguro que quieres eliminar este pago?";
                                        elementsMessage.deleteObject =
                                            deletependingPayments;
                                        elementsMessage.visible =
                                            !elementsMessage.visible;

                                        console.log(elementsMessage);
                                    }
                                }}
                                type="button"
                                value="Eliminar"
                                class="btn btn-danger btn-sm"
                            />
                        </td>
                    </tr>
                {/each}
            {/if}
        {/if}
    </tbody>
</table>
