<script>
    import { onMount } from "svelte";
    import Firebase from "../../../../../../../routes/image/Firebase/Firebase.svelte";
    import { getImagesProduct, updateImages } from "./imagesProduct";
    import Message from "../../../../../../message/Message.svelte";
    let image;
    let visible = false;
    let imagesProduct;
    let idProd;
    let inputBack = false;
    let toggleImage = async () => {
        visible = !visible;
        if (await image) {
            // Asegúrate de que el array esté inicializado
            if (!imagesProduct) {
                imagesProduct = { src: [] };
            }
            // Crear un nuevo array con la imagen agregada
            imagesProduct = {
                ...imagesProduct, // Mantenemos el resto de propiedades de imagesProduct
                src: [...imagesProduct.src, image], // Reasignamos el array para que Svelte detecte el cambio
            };
            console.log(imagesProduct.src);
            image = null;
        }
    };
    const deleteImage = (src) => {
        imagesProduct.src = imagesProduct.src.filter((sc) => sc != src);
        console.log(imagesProduct.src);
    };
    onMount(async () => {
        idProd;
        const params = new URLSearchParams(window.location.search);
        idProd = params.get("id");
        imagesProduct = await getImagesProduct(idProd);
    });

    //Props de Message
    let alertMessage = {
        alertStyle: "alert-success",
        message: "Se guardaron los cambios exitosamente",
    };

    let showAndHideAlert;
</script>

<Message bind:alertMessage bind:showAndHideAlert />
<hr />
<div>
    <button on:click={toggleImage} class="btn btn-info">Agregar imagen</button>
</div>
<hr />
{#if visible}
    <Firebase bind:image bind:toggleImage />
    <hr />
{/if}

{#if imagesProduct}
    <div
        style="width:100%; display:flex;flex-wrap:wrap; justify-content:space-around;"
    >
        {#each imagesProduct.src as image}
            <div style="width:20%; background:rgba(0,0,0,0.2); margin:1em;">
                <div
                    style="padding:0; margin:0; display:flex; justify-content:end;"
                >
                    <input
                        on:click={() => {
                            deleteImage(image);
                        }}
                        class="btn btn-danger btn-sm"
                        type="button"
                        value="Eliminar"
                    />
                </div>
                <div style="width:100%; border:1px solid black;">
                    <img style="width:100%;" src={image} alt="" />
                </div>
            </div>
        {/each}
    </div>
    <div style="display:flex; justify-content:center;">
        {#if !inputBack}
            <input
                type="button"
                value="Actualizar imagenes"
                class="btn btn-warning m-1"
                on:click={async () => {
                    console.log(imagesProduct);
                    if (!imagesProduct.idProd) {
                        imagesProduct.idProd = idProd;
                    }
                    const response = await updateImages(imagesProduct);

                    if (response) {
                        showAndHideAlert();
                        inputBack = !inputBack;
                    } else {
                        alertMessage = {
                            alertStyle: "alert-warning",
                            message:
                                "Error inesperado al intentar guardar los cambios.",
                        };
                    }
                }}
            />
            <input
                on:click={() => {
                    window.history.back();
                }}
                type="button"
                value="Cancelar"
                class="btn btn-danger m-1"
            />
        {:else}
            <input
                on:click={() => {
                    window.history.back();
                }}
                type="button"
                value="Volver"
                class="btn btn-secondary"
            />
        {/if}
    </div>
{/if}
