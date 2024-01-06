<script>
    export let payBoolean = false;
    
    import {tdsStore, payStore} from "../cart";
    export const handleClickPay = () => {
        if ($tdsStore.length > 0) {
            payBoolean = !payBoolean;
        }
    };
    
</script>

<div>
    <div>
        <button on:click={()=>{
            payStore.handleClickPay($tdsStore);
        }} class="btn btn-primary">Pagar</button>
        <button on:click={tdsStore.handleClickRemove} class="btn btn-danger">Cancelar</button>
    </div>
</div>
