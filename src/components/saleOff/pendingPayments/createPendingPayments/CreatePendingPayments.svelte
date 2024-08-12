<script>
    import Overlay from "../../../tools/overlay/Overlay.svelte";
    import debounce from "lodash/debounce";
    import { globalSalePerson } from "../../../../routes/user";
    import { createPendingPayments } from "./createPendingPayments";
    //Variables locales
    let formHead;
    let position = { left: 0, right: 0, top: 0, bottom: 0 };

    //Variables de exportación
    export let visible;

    //Metodos exportados
    export const handleFormHead = debounce(() => {
        position = formHead.getBoundingClientRect();
    });

    //Variables de exportación e importación
    export let elementsMessage;
    export let pendingPayments;
</script>

<Overlay bind:visible>
    <div
        style="position:absolute;right:{position.left}px; top:{position.top}px;"
    >
        <input
            on:click={() => {
                visible = !visible;
            }}
            type="button"
            value="X"
            class="btn btn-primary"
        />
    </div>
    <div class="w-50 bg-white">
        <div bind:this={formHead} class="bg-primary text-white p-1 text-center">
            <h2>Crear gasto fijo</h2>
        </div>

        <form
            on:submit|preventDefault={async (e) => {
                let response = await createPendingPayments(
                    e,
                    $globalSalePerson,
                );

                if (response) {
                    pendingPayments.push(response);
                    pendingPayments = pendingPayments;
                    elementsMessage.alertMessage = {
                        alertStyle: "alert-info",
                        message: "El gasto fijo se creó con éxito",
                    };
                } else {
                    elementsMessage.alertMessage = {
                        alertStyle: "alert-danger",
                        message:
                            "Al parecer hubo un error. No se pudo crear el gasto.",
                    };
                }
                elementsMessage.showAndHideAlert();
                visible = !visible;
            }}
            class="d-flex row text-center"
            action=""
            style="padding:1em;"
        >
            <div class="col-12">
                <label for="">Vendedor</label>
                <input
                    type="text"
                    name="salesPerson"
                    id=""
                    class="form-control"
                    value={$globalSalePerson.name}
                    disabled
                />
            </div>
            <div class="col-12">
                <label for="">Descripción</label>
                <input
                    type="text"
                    name="description"
                    id=""
                    class="form-control"
                />
            </div>
            <div class="col-6">
                <label for="">Tipo de pago</label>
                <select name="paymentType" class="form-control">
                    <option value="Efectivo">Efectivo</option>
                    <option value="Transferencia">Efectivo</option>
                </select>
            </div>
            <div class="col-6">
                <label for="">Monto</label>
                <input type="number" name="amount" id="" class="form-control" />
            </div>

            <div class="d-flex justify-content-end">
                <input
                    type="submit"
                    value="Crear"
                    class="btn btn-primary me-1"
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
    </div>
</Overlay>
