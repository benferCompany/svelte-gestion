<script>
    import CreatePendingPayments from "./createPendingPayments/CreatePendingPayments.svelte";
    import EditPendingPayments from "./editPendingPayments/EditPendingPayments.svelte";
    import Filter from "./filter/Filter.svelte";
    import Table from "./table/Table.svelte";
    import Message from "../../message/Message.svelte";
    import MessageOptimized from "../../tools/delete/message/MessageOptimized.svelte";
    let pendingPayments;
    let visible;
    let handleFormHead;
    let getPosition;
    let visibleEdit;

    //Variables elementos del Message
    let showAndHideAlert;
    let elementsMessage = {
        alertMessage: {},
        showAndHideAlert,
    };

    let elementsMessageOptimized;
</script>

<MessageOptimized bind:elementsMessage={elementsMessageOptimized} />
<Message
    bind:alertMessage={elementsMessage.alertMessage}
    bind:showAndHideAlert={elementsMessage.showAndHideAlert}
/>
<CreatePendingPayments
    bind:pendingPayments
    bind:elementsMessage
    bind:visible
    bind:handleFormHead
/>
<EditPendingPayments
    bind:elementsMessage
    bind:visible={visibleEdit}
    bind:getPosition
    bind:pendingPayments
/>
<div class="d-flex w-50">
    <input class="btn btn-warning me-1" type="button" value="Por pagar" />
    <input class="btn btn-info ms-1" type="button" value="Pagado" />
    <input
        on:click={() => {
            visible = !visible;
            handleFormHead();
        }}
        class="btn btn-primary ms-1"
        value="Crear gasto fijo"
        type="text"
    />
</div>
<hr />
<Filter bind:elementsMessageOptimized bind:pendingPayments />
<Table
    bind:elementsMessage={elementsMessageOptimized}
    bind:visible={visibleEdit}
    bind:getPosition
    bind:pendingPayments
/>
