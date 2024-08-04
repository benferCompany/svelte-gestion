<script>
    import Overlay from "../../../tools/overlay/Overlay.svelte";
    import debounce from "lodash/debounce";
    import { globalSalePerson } from "../../../../routes/user";
    import { createExpenses } from "./createExpenses";
    import { getCurrentDateInput } from "../../../tools/dataNow/DataNow";
    //Variables locales
    let inputElement;
    let container;
    let close = { left: 0, top: 0, bottom: 0, right: 0 };
    //Variables de importación y expotación
    export let showAndHideAlert;
    export let alertMessage;
    //Metodos
    const inputFocus = debounce(async () => {
        inputElement.focus();
        let position = container.getBoundingClientRect();
        close = {
            left: position.left,
            right: position.right,
            top: position.top,
            bottom: position.bottom,
        };
    });

    let currentDate = getCurrentDateInput();

    //Exportaciones
    export let exportElement = { visible: false, inputFocus };
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
        <form
            on:submit|preventDefault={async (e) => {
                await createExpenses(e, $globalSalePerson);
                alertMessage = {
                    alertStyle: "alert-warning",
                    message: "El gasto se creo con éxito",
                };
                showAndHideAlert();
                exportElement.visible = false;
            }}
            class="text-center w-100 d-flex row ps-4"
            action=""
        >
            <div class="col-6 pt-4">
                <label for="">Vendedor</label>
                <input
                    bind:this={inputElement}
                    type="text"
                    class="form-control"
                    value={$globalSalePerson.name}
                    name="salesPerson"
                    disabled
                />
            </div>
            <div class="col-6 pt-4">
                <label for="">Fecha</label>
                <input
                    type="date"
                    class="form-control"
                    bind:value={currentDate}
                    name="date"
                    disabled
                />
            </div>
            <div>
                <label for="">Descripción</label>
                <input type="text" class="form-control" name="description" />
            </div>
            <div class="col-6">
                <label for="">Tipo de Pago</label>
                <input type="text" class="form-control" name="paymentType" />
            </div>
            <div class="col-6 pb-4">
                <label for="">Pago</label>
                <input type="text" class="form-control" name="amount" />
            </div>
            <div class="d-flex justify-content-end">
                <input type="submit" value="Crear" class="btn btn-info me-1" />
                <input
                    on:click={() => {
                        exportElement.visible = false;
                    }}
                    type="button"
                    value="Cancelar"
                    class="btn btn-danger ms-1"
                />
            </div>
        </form>
    </div>
</Overlay>
