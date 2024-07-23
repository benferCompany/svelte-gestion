<script>
    import CloseButton from "../../../../../../tools/close/CloseButton.svelte";
    import Overlay from "../../../../../../tools/overlay/Overlay.svelte";
    import Message from "../../../../../../message/Message.svelte";
    import Loading from "../../../../../../tools/loading/Loading.svelte";
    import MessageDelete from "./message/MessageDelete.svelte";
    import { handleEdit, validaData, deleteObject } from "./edit";
    import Create from "./create/Create.svelte";
    import {productsTable} from "../table";
    //atributo de messageDelete
    let visibleMessageDelete;
    let objectId;
    /////////////

    let booleanEdit = false;
    let loading = false;
    let product = {};
    let classInputs = "form-control form-control-sm";
    export let handleClickClose = (prd) => {
        booleanEdit = !booleanEdit;
        if (prd.id) {
            prd.boolean = true;
            product = prd;
        }
    };

    let showAndHideAlert;
    let alertMessage = {
        alertStyle: "alert-success",
        message: "El stock se actualizo con éxito"
    };

    
</script>

<Message bind:alertMessage bind:showAndHideAlert />
<Overlay visible={booleanEdit}>
    <MessageDelete
        bind:visible={visibleMessageDelete}
        bind:object={product}
        bind:objectId
        bind:alertMessage
        {deleteObject}
    />
    <div class="edit rounded">
        <div class="header bg-primary">
            <h1 class="text-center">Editar</h1>
            <CloseButton onClose={handleClickClose} />
        </div>

        <div class="container mt-2">
            {#if product.stores}
                {#each product.stores as store}
                    <div class="text-center">
                        <h5>{store.company.name}</h5>
                    </div>
                    <form
                        on:submit|preventDefault={async (e) => {
                            let response = await handleEdit(e);

                            validaData(e, store);
                            if (validaData(e, store)) {
                                alertMessage = {
                                    alertStyle: "alert-success",
                                    message: "El stock se actualizo con éxito",
                                };
                                if (await response) {
                                    showAndHideAlert();
                                    $productsTable.content=$productsTable.content.map((ob)=>{
                                        ob.stores = ob.stores.map(st=>{
                                            if(st.id==response.id){
                                                st = response;
                                            }
                                            return st;
                                        })
                                        return ob;
                                    })
                                    
                                }
                            } else {
                                alertMessage = {
                                    alertStyle: "alert-warning",
                                    message: "No hubo cambios",
                                };
                                showAndHideAlert();
                            }
                        }}
                        class="row d-flex justify-content-center"
                        action=""
                    >
                        <input
                            type="text"
                            value={store.id}
                            name="id"
                            class="d-none"
                        />
                        <input
                            type="text"
                            value={JSON.stringify(store.company)}
                            name="company"
                            class="d-none"
                        />
                        <input
                            type="text"
                            value={JSON.stringify(product)}
                            name="product"
                            class="d-none"
                        />
                        <div class="col-2">
                            <label for="">Stock</label>
                            <input
                                type="text"
                                name="stock"
                                value={store.stock}
                                class={classInputs}
                            />
                        </div>
                        <div class="col-2">
                            <label for="">Stock Min</label>
                            <input
                                type="text"
                                name="stock_min"
                                value={store.stock_min}
                                class={classInputs}
                            />
                        </div>
                        <div class="col-2">
                            <label for="">Stock Max</label>
                            <input
                                type="text"
                                name="stock_max"
                                value={store.stock_max}
                                class={classInputs}
                            />
                        </div>
                        <div class="col-4 align-self-end">
                            <input
                                type="submit"
                                value="Editar"
                                class="btn btn-warning btn-sm"
                            />
                            <input
                                on:click={() => {
                                    alertMessage = {
                                        alertStyle: "alert-danger",
                                        message: "Stock eliminado",
                                    };
                                    objectId = store.id;
                                    visibleMessageDelete = true;
                                }}
                                type="button"
                                value="Eliminar"
                                class="btn btn-danger btn-sm ms-2"
                            />
                        </div>
                    </form>
                    <hr />
                {/each}
            {/if}
            <Create
                bind:product
                {classInputs}
            />
        </div>
    </div>
</Overlay>
<Loading bind:loading />

<style>
    .edit {
        width: 45em;
        height: 40em;
        overflow-y: auto;
        position: absolute;
        z-index: 30;
        background: white;
        left: 25%;
        right: 25%;
    }
    .header {
        color: white;
        padding: 0.5em;
    }
</style>
