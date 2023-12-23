<script>

    export let handleClickCreate;
    export let importBoolean = true;
    export let exportBoolean = false;
    export let updateBoolean = false;

</script>

<div class="d-flex justify-content-center">
    <div>
        <div>
            <button on:click={()=>{
                importBoolean = true;
                exportBoolean = false;
                updateBoolean = false
            }} type="button" class="btn btn-success">Inventario</button
            >
        </div>
        <div>
            <button on:click={handleClickCreate} type="button" class="btn btn-success">Crear articulo</button
            >
        </div>
        <div>
            <button on:click={()=>{
                importBoolean = false;
                exportBoolean = false;
                updateBoolean = true;
            }} type="button" class="btn btn-success"
                >Actualizar precios</button
            >
        </div>
        <div>
            <button on:click={()=>{
                
                importBoolean = false;
                exportBoolean = false;
                updateBoolean = false
                }} type="button" class="btn btn-success">Importar Excel</button
            >
        </div>
        <div>
            <button on:click={()=>{
                exportBoolean = true;
                importBoolean = false;
                updateBoolean = false;
            }} type="button" class="btn btn-success">Exportar Excel</button
            >
        </div>
    </div>
</div>

<style>
    .btn {
        width: 14em;
    }
</style>
