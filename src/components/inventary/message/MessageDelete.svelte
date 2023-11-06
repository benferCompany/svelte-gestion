<script>
    import Overlay from "../../tools/overlay/Overlay.svelte";
    import { deleteProduct} from "../../stores/products";
    import Message from "../../message/Message.svelte";
    export let visible; 
    export let dts;
    export let products;
    let showAndHideAlert;

    const deleteProductById = async (id) => {
        const response = await deleteProduct(id);
        products = products.filter(product => product.id !== id);
        console.log(response.success)
        if(response.success){
            showAndHideAlert();
        }
    
    };

</script>
<Message bind:showAndHideAlert={showAndHideAlert}/>
<Overlay {visible}>
    <div class="confirm rounded">
        <div class="p-5">
            <div>
                <h5>¿Estas seguro que deseas elimnar este producto?</h5>
            </div>
            <div>
                <form action="">
                    <input
                        type="button"
                        value="Confirmar"
                        class="btn btn-success"
                        on:click={()=>{
                            visible=false;
                            deleteProductById(dts.product.id)
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
