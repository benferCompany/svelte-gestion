<script>
    import Message from "../../../../message/Message.svelte";
    import CloseButton from "../../../../tools/close/CloseButton.svelte";
    import Overlay from "../../../../tools/overlay/Overlay.svelte";
    import ImageEditor from "../../../image/ImageEditor.svelte";
    import StockEditor from "./stock/StockEditor.svelte";
    import { handleCreate } from "./create";
    import StoreSupplier from "./storeSupplier/StoreSupplier.svelte";
    import { lastElement } from "../../../../stores/products";
    import { onMount } from "svelte";
    let booleanEdit = false;
    let addInternal;
    let cod2 = "";
    let idInternal =0;
    export let handleClickCreate = () => {
        booleanEdit = !booleanEdit;
    };
    let showAndHideAlert;
    let alertMessage = {
        alertStyle: "alert-success",
        message: "El producto se creo con éxito",
    };

    let image = "imgs/1.jpg";

    onMount(async () => {
        try {
            let response = await lastElement();
           
                if(typeof response !=="number"){
                    addInternal = 1
                    return false    
                }
                addInternal = response+1;
        
        } catch (error) {
            addInternal=1
            console.error("Hubo un error", error);
            return false;
        }
        idInternal = addInternal;
    });
    $:{idInternal=addInternal+cod2}
</script>

<Message {alertMessage} bind:showAndHideAlert />
<Overlay visible={booleanEdit}>
    <div class="create rounded">
        <div class="header bg-primary">
            <h1>Crear Producto</h1>
            <CloseButton onClose={handleClickCreate} />
        </div>
        <div class="d-flex justify-content-center mt-2">
            <form
                on:submit|preventDefault={(e) => {
                    const createResponse = handleCreate(e, image);
                    if (createResponse) {
                        e.target.reset();
                        showAndHideAlert();
                        booleanEdit = false;
                    } else {
                        alertMessage = {
                            alertStyle: "alert-danger",
                            message:
                                "Al parecer hubo un error y no pudo crearse el producto",
                        };
                        showAndHideAlert();
                        booleanEdit = false;
                    }
                }}
                class="w-75 mb-2"
            >
                <div class="d-flex">
                    <div class="col-3 me-2">
                        <label for="">Id interno</label>
                        <input
                            type="text"
                            class="form-control text-center bg-white text-dark"
                            bind:value={idInternal}
                            disabled
                        />
                        <input
                            type="text"
                            class="d-none"
                            name="idInternal"
                            bind:value={idInternal}
                        />
                    </div>
                    <div class="col-9">
                        <label for="" class=" text-center">Titulo</label>
                        <input
                            required
                            name="title"
                            type="text"
                            class="form-control"
                        />
                    </div>
                </div>
                <div class="d-flex justify-content-around">
                    <div>
                        <label for="" class=" text-center">Costo</label>
                        <input
                            name="cost_price"
                            type="number"
                            class="form-control text-center"
                            required
                        />
                    </div>
                    <div>
                        <label for="" class=" text-center"
                            >Precio de venta</label
                        >
                        <input
                            name="selling_price"
                            type="number"
                            class="form-control text-center"
                            required
                        />
                    </div>
                </div>

                <StockEditor />
                <StoreSupplier bind:cod2 />
                <ImageEditor bind:image />
                <div>
                    <input
                        class="btn btn-primary"
                        type="submit"
                        value="Crear"
                        name="image"
                    />
                    <input
                        on:click={handleClickCreate}
                        class="btn btn-danger"
                        type="button"
                        value="Cancelar"
                    />
                </div>
            </form>
        </div>
    </div>
</Overlay>

<style>
    .create {
        width: 45em;
        height: 40em;
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
</style>
