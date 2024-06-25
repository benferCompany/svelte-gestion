<script>
    import StockEditor from "./componentes/stock/StockEditor.svelte";
    import ImageEditor from "../image/ImageEditor.svelte";
    import CloseButton from "../../tools/close/CloseButton.svelte";
    import Overlay from "../../tools/overlay/Overlay.svelte";
    import { handleEdit } from "./edit";
    import Message from "../../message/Message.svelte";
    import StoreSupplier from "./componentes/storeSupplier/StoreSupplier.svelte";
    import Loading from "../../tools/loading/Loading.svelte";
    import {productsTablet} from "../../searchAndShowProducts/table/tablet";
    export let booleanEdit = false;

    let loading = false;
    let product = {};
    let objectFind;
    export let products;
    let image = "";
    export let handleClickClose = (prd) => {
        booleanEdit = !booleanEdit;
        if (prd.id) {
            image = prd.image;
            prd.boolean = true;
            product = prd;
            console.log(product)
        }

        objectFind = products.findIndex((object) => object.id === product.id);
    };
    let showAndHideAlert;
    let alertMessage = {
        alertStyle: "alert-success",
        message: "El producto se actualizo con éxito",
    };
</script>

<Message {alertMessage} bind:showAndHideAlert />
<Overlay visible={booleanEdit}>
    <div class="edit rounded">
        <div class="header bg-primary">
            <h1 class="text-center">Editar</h1>
            <CloseButton onClose={handleClickClose} />
        </div>

        <div class="d-flex justify-content-center mt-2">
            <form
                on:submit|preventDefault={async (e) => {
                    booleanEdit = false;
                    loading = true;
                    const responseEdit = await handleEdit(e, image);
                    if (responseEdit) {
                        loading = false;
                        $productsTablet.content[objectFind] = responseEdit;
                        e.target.reset();
                        showAndHideAlert();
                    } else {
                        alertMessage = {
                            alertStyle: "alert-danger",
                            message:
                                "Al parecer hubo un error y no pudo crearse el producto",
                        };
                        showAndHideAlert();
                    }
                }}
                class="w-75 mb-2"
            >
                <div class="d-flex">
                    <div class="col-1 me-2">
                        <label for="" class="text-center">ID</label>
                        <input
                            type="text"
                            disabled
                            class="form-control"
                            placeholder="ID"
                            value={product.id}
                        />
                        <input
                            type="text"
                            class="d-none"
                            value={product.id}
                            name="id"
                        />
                    </div>
                    <div class="col-3 me-2">
                        <label for="">Id interno</label>
                        <input
                            type="text"
                            class="form-control text-center"
                            name="idInternal"
                            value={product.idInternal}
                            
                        />
                    </div>
                    
                    <div class="col-8">
                        <label for="" class=" text-center">Titulo</label>
                        <input
                            type="text"
                            class="form-control"
                            placeholder="Titulo"
                            value={product.title}
                            name="title"
                        />
                    </div>
                </div>
                <div>
                    <label for="" class=" text-center">Descripción</label>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Descripción"
                        value={product.description}
                        name="description"
                    />
                </div>
                <div class="d-flex justify-content-around">
                    <div>
                        <label for="" class=" text-center">Costo</label>
                        <input
                            type="text"
                            class="form-control text-center"
                            placeholder="Costo"
                            value={product.cost_price}
                            name="cost_price"
                        />
                    </div>
                    <div>
                        <label for="" class=" text-center"
                            >Precio de venta</label
                        >
                        <input
                            type="text"
                            class="form-control text-center"
                            placeholder="Precio de venta"
                            value={product.selling_price}
                            name="selling_price"
                        />
                    </div>
                </div>
                <StockEditor {product} />
                <StoreSupplier {product} booleanCreate={true} />
                <ImageEditor bind:image />

                <div>
                    <input
                        class="btn btn-primary"
                        type="submit"
                        value="Editar"
                    />
                    <input
                        on:click={handleClickClose}
                        class="btn btn-danger"
                        type="button"
                        value="Cancelar"
                    />
                </div>
            </form>
        </div>
    </div>
</Overlay>
<Loading bind:loading/>

<style>
    .edit {
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
