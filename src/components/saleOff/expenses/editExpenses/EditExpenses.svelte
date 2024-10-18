<script>
    import Overlay from "../../../tools/overlay/Overlay.svelte";
    import debounce from "lodash/debounce";
    import { editExpenses } from "./editExpenses";
    import { globalSalePerson } from "../../../../routes/user";

    //Variables locales
    let inputElement;
    let container;
    let close = { left: 0, top: 0, bottom: 0, right: 0 };
    //Variables de importación y expotación
    export let alertMessage;
    export let showAndHideAlert;
    //Metodos
    const inputFocus = debounce(() => {
        inputElement.focus();
        let position = container.getBoundingClientRect();
        close = {
            left: position.left,
            right: position.right,
            top: position.top,
            bottom: position.bottom,
        };
    }, 1);

    //Exportaciones
    export let exportElement = { visible: false, inputFocus, outFlows: "" };
</script>

<Overlay visible={exportElement.visible}>
    <div bind:this={container} class="bg-white w-50">
        <div
            style="position:absolute; right:{close.left}px; top:{close.top}px;"
        >
            <input
                on:click={() => {
                    exportElement.visible = false;
                }}
                class="btn btn-primary text-white"
                type="button"
                value="X"
            />
        </div>

        <div class="bg-primary text-white text-center p-2">
            <h2>Crear Gasto</h2>
        </div>
        {#if exportElement.outFlows}
            <form
                on:submit|preventDefault={async (e) => {
                    await editExpenses(e, $globalSalePerson);
                    alertMessage = {
                        alertStyle: "alert-warning",
                        message: "La salida se actualizó con éxito",
                    };
                    showAndHideAlert();
                    exportElement.visible = false;
                }}
                class="text-center w-100 d-flex row ps-4"
                action=""
            >
                <div class="col-4 pt-4">
                    <label for="">Id</label>
                    <input
                        type="text"
                        class="form-control"
                        value={exportElement.outFlows.id}
                        name="id"
                    />
                </div>
                <div class="col-8 pt-4">
                    <label for="">Vendedor</label>
                    <input
                        bind:this={inputElement}
                        type="text"
                        class="form-control"
                        value={exportElement.outFlows.salesPerson.name}
                        name="salesPerson"
                    />
                </div>
                <div class="">
                    <label for="">Fecha</label>
                    <input
                        type="text"
                        class="form-control"
                        value={exportElement.outFlows.date}
                        name="date"
                    />
                </div>
                <div>
                    <label for="">Descripción</label>
                    <input
                        type="text"
                        class="form-control"
                        value={exportElement.outFlows.description}
                        name="description"
                    />
                </div>
                <div class="col-6">
                    <label for="">Tipo de Pago</label>
                    <input
                        type="text"
                        class="form-control"
                        value={exportElement.outFlows.paymentType}
                        name="paymentType"
                    />
                </div>
                <div class="col-6 pb-4">
                    <label for="">Pago</label>
                    <input
                        type="text"
                        class="form-control"
                        value={exportElement.outFlows.amount}
                        name="amount"
                    />
                </div>
                <div class="d-flex justify-content-end">
                    <input
                        class="btn btn-warning me-1"
                        type="submit"
                        value="Actualizar"
                    />
                    <input
                        on:click={() => {
                            exportElement.visible = false;
                        }}
                        class="btn btn-danger ms-1"
                        type="button"
                        value="Cancelar"
                    />
                </div>
            </form>
        {/if}
    </div>
</Overlay>
