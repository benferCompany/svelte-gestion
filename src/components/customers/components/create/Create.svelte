<script>
    import Overlay from "../../../tools/overlay/Overlay.svelte";
    import CloseButton from "../../../tools/close/CloseButton.svelte";
    import {handleSubmit} from "./create";
    export let visible = false;
    export let showAndHideAlert;
    let handleClickClose = (e) => {
        visible = !visible;
    };
    
</script>

<Overlay bind:visible>
    <div class="cretae">
        <div class="header bg-primary">
            <h1 class="text-center">Crear cliente</h1>
            <CloseButton onClose={handleClickClose} />
        </div>
            <form on:submit|preventDefault={(e)=>{
                visible= false
                showAndHideAlert()
                handleSubmit(e)
            }}>
                <div>
                    <div class="d-flex">
                        <div style={"width:100%;"}>
                            <label for="">Cuit/DNI</label>
                            <input
                                type="text"
                                name="idPersonal"
                                class="form-control"
                                required
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
                            class="form-control"
                            required
                        />
                    </div>
                    <div style={"width:50%;"}>
                        <label for="">Descuento</label>
                        <input
                            type="text"
                            name="discount"
                            class="form-control"
                            required
                        />
                    </div>
                </div>

                <div class="text-center">
                    <label for="">Nombre y Apellido</label>
                    <div class="d-flex">
                        <input
                            type="text"
                            name="name"
                            class="form-control me-2"
                            required
                        />
                        <input
                            type="text"
                            name="last_name"
                            class="form-control"
                            required
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
                            class="form-control form-control me-2"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            class="form-control"
                            required
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
                            class="form-control me-2"
                        />
                        <input
                            type="text"
                            name="phone"
                            class="form-control"
                        />
                    </div>
                </div>
                <div class="d-flex justify-content-end">
                    <div class="me-2">
                        <input
                            type="submit"
                            value="Crear"
                            class="btn btn-primary"
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
    
    </div>
</Overlay>

<style>
    .cretae {
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
