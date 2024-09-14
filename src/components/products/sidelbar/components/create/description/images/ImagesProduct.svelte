<script>
    import { onMount } from "svelte";
    import Firebase from "../../../../../../../routes/image/Firebase/Firebase.svelte";
    import { getImagesProduct } from "./imagesProduct";
    let image;
    let visible = false;
    let imagesProduct;
    let toggleImage = () => {
        visible = !visible;
        console.log(image);
        if (image) {
            // Asegúrate de que el array esté inicializado
            if (!imagesProduct.src) {
                imagesProduct.src = [];
            }
            // Crear un nuevo array con la imagen agregada
            imagesProduct = {
                ...imagesProduct, // Mantenemos el resto de propiedades de imagesProduct
                src: [...imagesProduct.src, image], // Reasignamos el array para que Svelte detecte el cambio
            };
            console.log(imagesProduct.src);
            image =null;
        }
    };
    const deleteImage =(src)=>{
        imagesProduct.src = imagesProduct.src.filter(sc=>sc!=src)
        console.log(imagesProduct.src);
    }
    onMount(async () => {
        let idProd;
        const params = new URLSearchParams(window.location.search);
        idProd = params.get("id");
        imagesProduct = await getImagesProduct(idProd);
    });
</script>
<hr/>
{#if imagesProduct}
    <div>
        <button on:click={toggleImage} class="btn btn-info"
            >Agregar imagen</button
        >
    </div>
    <hr/>
{/if}

{#if visible}
    <Firebase bind:image bind:toggleImage />
    <hr/>
{/if}

{#if imagesProduct}
    <div style="width:100%; display:flex;flex-wrap:wrap; justify-content:space-around;">
        {#each imagesProduct.src as image}
            <div style="width:20%; background:rgba(0,0,0,0.2); margin:1em;">
                <div style="padding:0; margin:0; display:flex; justify-content:end;">
                    <input on:click={()=>{deleteImage(image)}} class="btn btn-danger btn-sm" type="button" value="Eliminar">
                </div> 
                <div style="width:100%; border:1px solid black;">
                    <img style="width:100%;" src={image} alt="" />
                </div>
            </div>
        {/each} 
    </div>
    <div style="display:flex; justify-content:center;">
        <input type="button" value="Actualizar imagenes" class="btn btn-warning m-1">
        <input type="button" value="Cancelar" class="btn btn-danger m-1">
    </div>
{/if}
