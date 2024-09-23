<script>
    import { createCategory, getCategories, categories } from "./categories";
    import Message from "../../message/Message.svelte";
    let parentCategory;
    onMount(async () => {
        categories.set(await getCategories());
    });

    export let props = {
        action: (category) => {},
    };
    import Overlay from "../../tools/overlay/Overlay.svelte";
    import { onMount } from "svelte";
    //props de Message
    let alertMessage = {
        alertStyle: "alert-info",
        message: "La categoría se creó con éxito",
    };
    let showAndHideAlert;
    export let visible= false

</script>

<Message bind:alertMessage bind:showAndHideAlert />
<Overlay bind:visible>
    <div class="div-form">
        <form
            on:submit|preventDefault={async (e) => {
                const response = await createCategory(e, parentCategory);
                console.log(response)
                if (response.status) {
                    props.action(response.entity);
                } else {
                    alertMessage = {
                        alertStyle: "alert-danger",
                        message: "Hubo un problema al crear la categoría.",
                    };
                    
                }
                
                visible = false;
                showAndHideAlert();
            }}
            action=""
        >
            <div>
                <h5>Crear categoría</h5>
            </div>
            <div>
                <label for="">Seleccionar categoría padre</label>
                <select
                    bind:value={parentCategory}
                    name="parentCategory"
                    id=""
                    class="form-control"
                >
                    {#if $categories}
                        {#each $categories as cat}
                            <option value={cat}>{cat.name}{cat.parentCategory?` ---> ${cat.parentCategory.name}`:""}</option>
                        {/each}
                    {/if}
                    <option value="">Sin categoría</option>
                </select>
            </div>

            <div>
                <label for="">Nombre</label>
                <input type="text" name="name" id="" class="form-control" required />
            </div>
            <div class="buttons">
                <input
                    class="btn btn-info btn-sm me-1"
                    type="submit"
                    value="Crear"
                />
                <input
                    on:click={()=>visible=false}
                    type="button"
                    value="Cancelar"
                    class="btn btn-danger btn-sm ms-1"
                />
            </div>
        </form>
    </div>
</Overlay>

<style>
    .div-form {
        width: 20em;
        background: white;
        border-radius: 1em;
        box-shadow: 1em 1em 1em rgba(0, 0, 0, 0.2);
        padding: 1em;
    }
    .buttons {
        width: 100%;
        display: flex;
        justify-content: end;
    }
</style>
