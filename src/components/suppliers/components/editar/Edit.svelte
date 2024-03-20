<script>
    import Overlay from "../../../tools/overlay/Overlay.svelte";
    import CloseButton from "../../../tools/close/CloseButton.svelte";
    import { handleSubmit } from "./edit";
    import Loading from "../../../tools/loading/Loading.svelte";
    export let showAndHideAlert;
    export let alertMessage;
    export let suppliers;
    let supplierEdit;
    let visible = false;
    let supplier;
    let loading = false;

    export let handleClickClose = (getSupplier) => {
        supplier = getSupplier;
        visible = !visible;
    };
</script>

<Loading bind:loading />
<Overlay bind:visible>
    <div class="edit">
        <div class="header bg-warning">
            <h1 class="text-center">Editar</h1>
            <CloseButton onClose={handleClickClose} />
        </div>
        {#if supplier}
            <form
                on:submit|preventDefault={async (e) => {
                    loading = true;
                    handleClickClose(e);
                    supplierEdit = await handleSubmit(e);

                    if (supplierEdit) {
                        alertMessage = {
                            alertStyle: "alert-success",
                            message: "El proveedor se actualizo con éxito",
                        };
                        showAndHideAlert();
                    }

                    suppliers.content = suppliers.content.map((ct) =>
                        ct.id === supplierEdit.id ? supplierEdit : ct,
                    );

                    loading = false;
                }}
                action=""
            >
                <div>
                    <div class="d-flex">
                        <div style={"width:30%; margin-right:0.5em;"}>
                            <label for="">ID</label>

                            <input
                                type="text"
                                value={supplier.id}
                                disabled
                                class="form-control"
                            />
                            <input
                                type="text"
                                class="d-none"
                                value={supplier.id}
                                name="id"
                            />
                        </div>

                        <div style={"width:100%;"}>
                            <label for="">Cuit/DNI</label>
                            <input
                                type="text"
                                name="idPersonal"
                                value={supplier.idPersonal}
                                class="form-control"
                            />
                        </div>
                    </div>
                    <div class="text-center">
                        <label for="">Nombre de empresa</label>
                        <input
                            type="text"
                            name="name_bussiness"
                            value={supplier.name_bussiness}
                            class="form-control"
                        />
                    </div>
                </div>
                
                <div class="text-center">
                    <label for="">Nombre y Apellido</label>
                    <div class="d-flex">
                        <input
                            type="text"
                            name="name"
                            value={supplier.name}
                            class="form-control me-2"
                        />
                        <input
                            type="text"
                            name="last_name"
                            value={supplier.last_name}
                            class="form-control"
                        />
                    </div>
                </div>
                <div>
                    <div class="d-flex justify-content-around">
                        <label for="">Dirección</label>
                        <label for="">Email</label>
                    </div>
                    <div class="d-flex">
                        <input
                            type="text"
                            name="address"
                            value={supplier.address}
                            class="form-control form-control me-2"
                        />
                        <input
                            type="email"
                            name="email"
                            value={supplier.email}
                            class="form-control"
                        />
                    </div>
                </div>
                <div>
                    <div class="d-flex justify-content-around">
                        <label for="">Celular</label>
                        <label for="">Telefono</label>
                    </div>
                    <div class="d-flex">
                        <input
                            type="text"
                            name="mobile_phone"
                            value={supplier.mobile_phone}
                            class="form-control me-2"
                        />
                        <input
                            type="text"
                            name="phone"
                            value={supplier.phone}
                            class="form-control"
                        />
                    </div>
                </div>
                <div class="d-flex justify-content-end">
                    <div class="me-2">
                        <input
                            type="submit"
                            value="Editar"
                            class="btn btn-warning"
                        />
                    </div>
                    <div>
                        <input
                            type="button"
                            value="Cancelar"
                            class="btn btn-danger"
                            on:click={handleClickClose}
                        />
                    </div>
                </div>
            </form>
        {/if}
    </div>
</Overlay>

<style>
    .edit {
        width: 35em;
        height: 30em;
        overflow-y: auto;
        position: absolute;
        z-index: 99;
        background: white;
        left: 25%;
        right: 25%;
    }
    .header {
        color: white;
        padding: 0.5em;
    }
    form {
        width: 98%;
        margin-left: auto;
        margin-right: auto;
    }
    input {
        width: 100%;
    }
</style>
