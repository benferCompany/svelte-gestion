<script>
    import { onMount } from "svelte";
    import {getOutFlows} from "./fitler";
    export let outFlows = [];
    onMount(async () => {
        outFlows = await getOutFlows();
    });
</script>

<div>
    <div class="d-flex justify-content-center">
        <div class="w-50">
            <input
                type="search"
                class="form-control text-center"
                placeholder="Buscar por descripción"
            />
        </div>
    </div>
    <div class="d-flex justify-content-center">
        <div class="w-50 d-flex justify-content-around text-center">
            <div>
                <label for="">Fecha Inicio</label>
                <input
                    type="date"
                    class="form-control"
                    placeholder="Fecha Inicio"
                />
            </div>
            <div>
                <label for="">Fecha Final</label>
                <input
                    type="date"
                    class="form-control"
                    placeholder="Fecha Final"
                />
            </div>
            <div class="mt-4">
                <input type="button" value="Filtrar" class="btn btn-info" />
            </div>
        </div>
    </div>
</div>

