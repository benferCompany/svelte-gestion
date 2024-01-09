<script>
    import Message from "../message/Message.svelte";
    import Create from "./components/create/Create.svelte";
    import Edit from "./components/editar/Edit.svelte";
    import SearchAndShowProducts from "./components/searchAndShowProducts/SearchAndShowProducts.svelte";
    let handleClickClose;
    let customers;
    let visible = false;
    let showAndHideAlert;
    let alertMessage = {
        alertStyle: "alert-success",
        message: "El cliente se creó con éxito",
    };
</script>

<hr />
    <Message {alertMessage} bind:showAndHideAlert/>
    <Edit bind:customers bind:showAndHideAlert bind:alertMessage bind:handleClickClose />
    <Create bind:visible bind:showAndHideAlert/>

<div>
    <div class="d-flex">
        <div class="me-2">
            <input
                type="button"
                value="Crear cliente"
                class="btn btn-success"
                on:click={()=>{
                    visible = true;
                }}
            />
        </div>
        <div>
            <input
                type="button"
                value="Exportar clientes"
                class="btn btn-success"
            />
        </div>
    </div>
    <hr />
    <SearchAndShowProducts bind:customers bind:handleClickClose />
</div>
