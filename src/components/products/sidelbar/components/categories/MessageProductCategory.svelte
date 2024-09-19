<script>
    import Message from "../../../../message/Message.svelte";

    export let props = {
        visible: false,
        action: async (product) => {
            console.log(product);
        },
        product: null,
    };

    //Props Message
    let alertMessage = {
        alertStyle: "alert-warning",
        message: "Se elimino la categoría con éxito.",
    };

    let showAndHideAlert;
</script>

<Message bind:alertMessage bind:showAndHideAlert />
{#if props.visible}
    <div class="override">
        <div class="override-div">
            <div class="override-div-div">
                <p>
                    ¿Esta seguro que quieres eliminar esta categoría? La
                    categoría solo se eliminar del producto.
                </p>
                <div class="buttons">
                    <input
                        on:click={async () => {
                            const response = await props.action(props.product);
                            if (response) {
                                showAndHideAlert();
                                return response;
                            }
                            alertMessage = {
                                alertStyle: "alert-danger",
                                message:
                                    "Hubo un problema al querer eliminar la categoría",
                            };
                            showAndHideAlert();
                            return false;
                        }}
                        type="button"
                        value="Confirmar"
                        class="btn btn-info btn-sm me-1"
                    />
                    <input
                        on:click={() => {
                            props.visible = !props.visible;
                        }}
                        type="button"
                        value="Cancelar"
                        class="btn btn-danger btn-sm ms-1"
                    />
                </div>
            </div>
        </div>
    </div>
{/if}

<style>
    .override {
        position: absolute;
        top: 0;
        left: 0;
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        background: rgba(0, 0, 0, 0.2);
    }
    .override-div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0;
        padding: 0;
    }
    .override-div-div {
        background: white;
        max-width: 20em;
        padding: 1em;
        border-radius: 2em;
        box-shadow: 1em 1em 1em rgba(0, 0, 0, 0.2);
    }
    .buttons {
        display: flex;
        justify-content: end;
    }
</style>
