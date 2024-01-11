<script>

    export let handleClickCreate;
    export let booleanView = 0;

</script>

<div class="d-flex justify-content-center">
    <div>
        <div>
            <button on:click={()=>{
               
                booleanView =0;
            }} type="button" class="btn btn-success">Productos</button
            >
        </div>
        <div>
            <button on:click={handleClickCreate} type="button" class="btn btn-success">Crear articulo</button
            >
        </div>
        <div>
            <button on:click={()=>{
                
                booleanView =1;
            }} type="button" class="btn btn-success"
                >Actualizar precios</button
            >
        </div>
        
        <div>
            <button on:click={()=>{
               
                booleanView = 2;
            }} type="button" class="btn btn-success">Exportar Excel</button
            >
        </div>
        <div>
            <button on:click={()=>{
               
                booleanView = 3;
            }} type="button" class="btn btn-success">Actualizar Stock</button
            >
        </div>
        <div>
            <button on:click={()=>{
               
                booleanView = 4;
            }} type="button" class="btn btn-success">Act. alm. proveedor</button
            >
        </div>
    </div>
</div>

<style>
    .btn {
        width: 14em;
    }
</style>
