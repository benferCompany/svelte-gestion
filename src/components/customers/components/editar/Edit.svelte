<script>
    import Overlay from "../../../tools/overlay/Overlay.svelte";
    import CloseButton from "../../../tools/close/CloseButton.svelte";
    let visible = false;
    let customer;
    export let handleClickClose = (getCustomer) => {
        customer = getCustomer;
        visible = !visible;
        console.log(customer);
    };
</script>

<Overlay bind:visible>
    <div class="edit">
        <div class="header bg-primary">
            <h1 class="text-center">Editar</h1>
            <CloseButton onClose={handleClickClose} />
        </div>
        {#if customer}
            <form action="">
                <div>
                    <div class="d-flex">
                        <div style={"width:30%; margin-right:0.5em;"}>
                            <label for="">ID</label>

                            <input
                                type="text"
                                name="id"
                                value={customer.id}
                                disabled
                                class="form-control"
                            />
                        </div>
                        <div style={"width:100%;"}>
                            <label for="">Cuit/DNI</label>
                            <input
                                type="text"
                                name="cuil"
                                value={customer.cuil}
                                class="form-control"
                            />
                        </div>
                    </div>
                </div>
                <div class="d-flex text-center">
                    <div style={"width:50%; margin-right:0.5em"}>
                        <label for="">Cuenta Corriente</label>
                        <input
                            type="text"
                            name="current_account"
                            value={customer.current_account}
                            class="form-control"
                        />
                    </div>
                    <div style={"width:50%;"}>
                        <label for="">Descuento</label>
                        <input
                            type="text"
                            name="discount"
                            value={customer.discount}
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
                            value={customer.name}
                            class="form-control me-2"
                        />
                        <input
                            type="text"
                            name="last_name"
                            value={customer.last_name}
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
                            name="adrress"
                            value={customer.adrress}
                            class="form-control form-control me-2"
                        />
                        <input
                            type="email"
                            name="email"
                            value={customer.email}
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
                            name="movil_phone"
                            value={customer.movil_phone}
                            class="form-control me-2"
                        />
                        <input
                            type="text"
                            name="phone"
                            value={customer.phone}
                            class="form-control"
                        />
                    </div>
                </div>
                <div class="d-flex justify-content-end">
                    <div class="me-2">
                        <input
                            type="submit"
                            value="Actualizar"
                            class="btn btn-primary"
                        />
                    </div>
                    <div>
                        <input
                            type="button"
                            value="Cancelar"
                            class="btn btn-danger"
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
