<script>
    import Message from "../../../message/Message.svelte";
    import Overlay from "../../overlay/Overlay.svelte";
    
    export let visible; 
    export let target;
    export let objects;
    export let updateObject;
    export let text = "¿Estas seguro que deseas atualizar este producto?";
    let showAndHideAlert;

    const deleteObjectById = async (id) => {
        const response = await updateObject(id);
        let data =[]        
       
        
           data = objects.forEach((ob)=>{
                let keyOb = Object.keys(ob);
                keyOb.forEach((key)=>{
                    
                    
                    ob[key].value = response[key]
                    ob[key].name = response[key]
                    
                })
            })
        
        if(response){
            objects = data
            
            showAndHideAlert();
        }
    
    };

</script>
<Message bind:showAndHideAlert={showAndHideAlert}/>
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
                            deleteObjectById(target)
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
