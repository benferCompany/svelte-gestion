<script>
    import Message from "../../../message/Message.svelte";
    import Overlay from "../../overlay/Overlay.svelte";

    let alertMessage;
    export let elementsMessage = {
        visible: false,
        objectId: 0,
        objects: [],
        deleteObject: async (id) => {},
        text: "estas seguro?",
        alertMessage: {
            alertStyle: "alert-warning",
            message: "El producto se eliminó con éxito",
        },
    };
    let showAndHideAlert;

    const deleteObjectById = async (id) => {
        console.log(id);
        const response = await elementsMessage.deleteObject(id);
        
        console.log(response);
        if (response) {
            showAndHideAlert();
            elementsMessage.objects = elementsMessage.objects.filter(
                (object) => object.id !== id,
            );
        }
    };
</script>

<Message alertMessage={elementsMessage.alertMessage} bind:showAndHideAlert />
<Overlay bind:visible={elementsMessage.visible}>
    <div class="confirm rounded">
        <div class="p-5">
            <div>
                <h5>{elementsMessage.text}</h5>
            </div>
            <div>
                <form action="">
                    <input
                        type="button"
                        value="Confirmar"
                        class="btn btn-success"
                        on:click={() => {
                            elementsMessage.visible = false;
                            deleteObjectById(elementsMessage.objectId);
                        }}
                    />
                    <input
                        type="button"
                        value="Cancelar"
                        class="btn btn-danger"
                        on:click={() => {
                            elementsMessage.visible = false;
                        }}
                    />
                </form>
            </div>
        </div>
    </div>
</Overlay>

<style>
    .confirm {
        text-align: center;
        width: 45em;
        position: absolute;
        z-index: 99;
        background: white;
        left: 25%;
        right: 25%;
    }
</style>
