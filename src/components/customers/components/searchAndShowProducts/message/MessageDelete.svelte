<script>
    import Message from "../../../../message/Message.svelte";
    import Overlay from "../../../../tools/overlay/Overlay.svelte";
    
    export let visible; 
    export let objectId;
    export let objects;
    export let deleteObject;
    export let text = "¿Estas seguro que deseas elimnar este producto?";
    let showAndHideAlert;

    const deleteObjectById = async (id) => {
        const response = await deleteObject(id);
        objects = objects.filter(object => object.id !== id);
        console.log(objects)
        
        if(response.ok){
            showAndHideAlert();
        }
    
    };
    export let alertMessage;
</script>
<Message {alertMessage} bind:showAndHideAlert={showAndHideAlert}/>
<Overlay {visible}>
    <div class="confirm rounded">
        <div class="p-5">
            <div>
                <h5>{text}</h5>
            </div>
            <div>
                <form action="">
                    <input
                        type="button"
                        value="Confirmar"
                        class="btn btn-success"
                        on:click={()=>{
                            visible=false;
                            deleteObjectById(objectId)
                        }}
                    />
                    <input
                        type="button"
                        value="Cancelar"
                        class="btn btn-danger"
                        on:click={()=>{
                            visible=false;
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
