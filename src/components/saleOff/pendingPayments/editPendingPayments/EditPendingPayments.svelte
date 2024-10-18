<script>
    import Overlay from "../../../tools/overlay/Overlay.svelte";
    import debounce from "lodash/debounce";
    import { editPendingPayments } from "./editPendingPayments";
    import { parseDate } from "../../../tools/dataNow/DataNow";
    //variables locales

    let pendingPayment;
    //Metododos
    export const getPosition = debounce((e) => {
        pendingPayment = e;
    });

    //Variables de expotación e Impotación
    export let visible;
    export let elementsMessage;
    export let pendingPayments;
</script>

<Overlay bind:visible>
    <div>
        <div class="d-flex justify-content-center">
            <div style="position:relative; left:48.5%;">
                <input
                    on:click={() => {
                        visible = !visible;
                    }}
                    type="button"
                    value="X"
                    class="btn btn-warning"
                />
            </div>

            {#if pendingPayment}
                <form
                    on:submit|preventDefault={async (e) => {
                        let response = await editPendingPayments(e);
                        if (response) {
                            pendingPayments = [response];
                            elementsMessage.alertMessage = {
                                alertStyle: "alert-warning",
                                message: "El gasto fijo se actualizó con éxito",
                            };
                        } else {
                            elementsMessage.alertMessage = {
                                alertStyle: "alert-danger",
                                message:
                                    "Al parecer hubo un error. No se pudo actualizar el gasto.",
                            };
                        }
                        elementsMessage.showAndHideAlert();
                        visible = !visible;
                    }}
                    class="bg-white d-flex row w-50"
                    action=""
                >
                    <div class="bg-warning text-white text-center mb-2">
                        <h2>Editar Pago</h2>
                    </div>

                    <div class="col-2">
                        <label for="">Id</label>
                        <input
                            value={pendingPayment.id}
                            type="text"
                            name="id"
                            id=""
                            class="form-control"
                        />
                    </div>
                    <div class="col-10">
                        <label for="">Fecha</label>
                        <input
                            value={parseDate(pendingPayment.date)}
                            type="datetime-local"
                            id=""
                            class="form-control"
                            disabled
                        />
                        <input
                            class="d-none"
                            type="text"
                            name="date"
                            value={pendingPayment.date}
                        />
                    </div>
                    <div>
                        <label for="">Descripción</label>
                        <input
                            value={pendingPayment.description}
                            type="text"
                            name="description"
                            id=""
                            class="form-control"
                        />
                    </div>
                    <div class="col-6">
                        <label for="">Monto</label>
                        <input
                            value={pendingPayment.amount}
                            type="text"
                            name="amount"
                            id=""
                            class="form-control"
                        />
                    </div>
                    <div class="text-center col-6">
                        <label for="">Esta Pagado?</label>
                        <div class="d-flex justify-content-center">
                            {#if pendingPayment.isPaid}
                                <input
                                    on:click={() => {
                                        pendingPayment.isPaid =
                                            !pendingPayment.isPaid;
                                    }}
                                    class="btn btn-success btn-sm"
                                    type="button"
                                    value="&#10003;"
                                />
                                <input
                                    type="text"
                                    name="isPaid"
                                    value="on"
                                    class="d-none"
                                />
                            {:else}
                                <input
                                    on:click={() => {
                                        pendingPayment.isPaid =
                                            !pendingPayment.isPaid;
                                    }}
                                    class="btn btn-danger btn-sm"
                                    type="button"
                                    value="&#10007;"
                                />
                                <input
                                    type="text"
                                    name="isPaid"
                                    value="off"
                                    class="d-none"
                                />
                            {/if}
                        </div>
                    </div>
                    <div class="col-6">
                        <label for="">Tipo de pago</label>
                        <input
                            value={pendingPayment.paymentType}
                            type="text"
                            name="paymentType"
                            id=""
                            class="form-control"
                        />
                    </div>
                    <div class="col-6">
                        <label for="">Vendedor</label>
                        <input
                            value={pendingPayment.salesPerson.name}
                            type="text"
                            id=""
                            class="form-control"
                        />
                        <select class="d-none" name="salesPerson" id="">
                            <option
                                value={JSON.stringify(
                                    pendingPayment.salesPerson,
                                )}>{pendingPayment.salesPerson}</option
                            >
                        </select>
                    </div>

                    <div class="d-flex justify-content-end">
                        <input
                            type="submit"
                            value="Actualizar"
                            class="btn btn-warning me-1"
                        />
                        <input
                            on:click={() => {
                                visible = !visible;
                            }}
                            type="button"
                            value="Cancelar"
                            class="btn btn-danger ms-1"
                        />
                    </div>
                </form>
            {/if}
        </div>
    </div>
</Overlay>
