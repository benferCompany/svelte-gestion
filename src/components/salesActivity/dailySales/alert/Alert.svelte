<script>
    import Overlay from "../../../tools/overlay/Overlay.svelte"
    export let visible = false; 
   

</script>
<Overlay bind:visible>
    <div class="content">
        <div class="bg-warning text-white text-center">
            <h2>Alerta</h2>
        </div>    
        <div class="bg-secondary text-center">
            <p class="h5">¿Estas seguro que quieres cerra la caja? Una ves cerrada la caja ya no se prodrá modificar.</p>
        </div>
        <div class="d-flex justify-content-end me-2">
            <div>

                <input on:click={()=>{visible=!visible}} class="btn btn-danger" type="button" value="Cancelar">
                <input class="btn btn-info" type="button" value="Aceptar" >
            </div>
        </div>
    </div>
</Overlay>

<style>
    .content{
        position: absolute;
        top:25%;
        left:25%;
        width: 50%;
        background: white;
    }
    
</style>