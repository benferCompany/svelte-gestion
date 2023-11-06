<script>
    export let image;
    let editImage = {
        imageDisabled: true,
        color: "warning",
        string: "Editar Imagen"
    }

    const toggleImage = () => {
        editImage.imageDisabled = !editImage.imageDisabled;
        if(editImage.imageDisabled){
            editImage.color = "warning";
            editImage.string = "Editar Imagen"
        }else{
            editImage.color = "danger";
            editImage.string = "Cancelar"
        }
    };
</script>

<div class="d-flex justify-content-around align-items-end">
    <div class="col-8">
        <label for="" class=" text-center">Imagen</label>
        <input
            type="text"
            class="form-control"
            placeholder="imagen"
            name="image"
            bind:value={image}
            disabled={editImage.imageDisabled}
        />
    </div>
    <div>
        <button on:click|preventDefault={toggleImage} class="btn btn-{editImage.color}" >{editImage.string}</button>
    </div>
</div>
<div class="d-flex justify-content-center">
    <!-- svelte-ignore a11y-missing-attribute -->
    <img style="width:10em; height:10em;" src={image} />
</div>