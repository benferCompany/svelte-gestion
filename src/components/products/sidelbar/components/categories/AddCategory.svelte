<script>
    import { onMount } from "svelte";
    import { getCategories } from "./categories";
    import Message from "../../../../message/Message.svelte";
    let categories;
    onMount(async () => {
        categories = await getCategories();
    });

    export let propsCateg = {
        category: null,
        visible: false,
        categories,
        action: async (category) => {
            console.log(category);
        },
    };

    //Props Message
    let alertMessage = {
        alertStyle: "alert-info",
        message: "Se agrego una categoría al producto",
    };
    let showAndHideAlert;
</script>

<Message bind:alertMessage bind:showAndHideAlert />
{#if propsCateg.visible}
    <div class="content">
        <div class="content-div">
            <div class="content-div-div">
                <form
                    on:submit|preventDefault={async () => {
                        const response = await propsCateg.action(
                            propsCateg.category,
                        );
                        if (response) {
                            propsCateg.categories = response;
                            propsCateg.visible = !propsCateg.visible;
                            showAndHideAlert();
                            return response;
                        } else {
                            alertMessage = {
                                alertStyle: "alert-danger",
                                message: "Error inesperado no se pudo agregar la categoría",
                            };
                            showAndHideAlert();
                            propsCateg.visible = !propsCateg.visible;
                            return false;
                        }
                    }}
                    action=""
                >
                    <div>
                        <h4>Agregar Categoría</h4>
                    </div>
                    <div>
                        <label for="">Seleccionar categoría</label>
                        <select
                            class="form-control"
                            bind:value={propsCateg.category}
                            name="category"
                            id=""
                        >
                            {#if categories}
                                {#each categories as category}
                                    <option value={category}
                                        >{category.name}</option
                                    >
                                {/each}
                            {/if}
                        </select>
                    </div>
                    <div class="buttons">
                        <input
                            class="btn btn-info btn-sm me-1"
                            type="submit"
                            value="Agregar"
                        />
                        <input
                            on:click={() => {
                                propsCateg.visible = !propsCateg.visible;
                            }}
                            class="btn btn-danger btn-sm ms-1"
                            type="button"
                            value="Cancelar"
                        />
                    </div>
                </form>
            </div>
        </div>
    </div>
{/if}

<style>
    .content {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.2);
        display: flex;
        justify-content: center;
    }
    .content-div {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .content-div-div {
        width: 20em;
        background: white;
        padding: 2em;
        border-radius: 1em;
        box-shadow: 1em 1em 1em rgba(0, 0, 0, 0.2);
    }
    .buttons {
        display: flex;
        justify-content: center;
    }
</style>
