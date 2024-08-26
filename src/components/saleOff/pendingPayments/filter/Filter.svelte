<script>
    import { onMount } from "svelte";
    import { getOutFlows } from "../../saleOff";
    import {getPendingPayments} from "./filter"
    //variables de exportación
    export let pendingPayments;
    export let elementsMessageOptimized
    //Metodos
    onMount(async () => {
        
        pendingPayments = await getPendingPayments();
        console.log(pendingPayments)
        elementsMessageOptimized.objects = pendingPayments;
    });

</script>

<div class="d-flex justify-content-center">
    <div class="w-50">
        <input
            type="search"
            name=""
            id=""
            class="form-control"
            placeholder="Buscar por descripción"
        />
        <div class="d-flex justify-content-around">
            <div>
                <label for="">Fecha de Inico</label>
                <input type="date" name="" id="" class="form-control" />
            </div>
            <div>
                <label for="">Fecha Final</label>
                <input type="date" name="" id="" class="form-control" />
            </div>
            <div
                style="
                display:flex;
                flex-direction:column;
                justify-content:end;
                "
            >
                <input type="button" value="filtar" class="btn btn-primary" />
            </div>
        </div>
    </div>
</div>
