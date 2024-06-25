<script>
    import Firebase from "../../../routes/image/Firebase/Firebase.svelte";
    export let image;
    let editImage = {
        imageDisabled: true,
        color: "warning",
        string: "Editar Imagen",
    };

    const toggleImage = () => {
        editImage.imageDisabled = !editImage.imageDisabled;
        if (editImage.imageDisabled) {
            editImage.color = "warning";
            editImage.string = "Editar Imagen";
        } else {
            editImage.color = "danger";
            editImage.string = "Cancelar";
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
        <button
            on:click|preventDefault={toggleImage}
            class="btn btn-{editImage.color}">{editImage.string}</button
        >
    </div>
</div>
<div class="mt-2 mb-2">
    <!-- svelte-ignore a11y-missing-attribute -->
    <div class="d-flex justify-content-center" style="width:100%; height:200px">
        <img style="max-width:100%; max-height:100%;" src={image} />
    </div>
</div>

{#if !editImage.imageDisabled}
    <div class="divAuthorize">
        <div class="rounded">
            <Firebase {toggleImage} bind:image />
        </div>
    </div>
{/if}

<style>
    .divAuthorize {
        position: absolute;

        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.2);
        width: 100%;
        height: 160vh;
        z-index: 99;
    }
    .divAuthorize div {
        width: 60%;
        height: 50vw;
        background: white;
        position: fixed;
        top: 10%;
        left: 20%;
        right: 20%;
    }
</style>
