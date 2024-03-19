<script>
    import SearchAndShowItems from "../searchAndShowItems/SearchAndShowItems.svelte";
    import {
        handleDelete,
        thead,
        handleSubmit,
        convertObjectStoreSupplier,
        handleChange,
    
    } from "./storeSuppliers";
    
    import Edit from "../editar/Edit.svelte";

    let alertMessage = {
        alertStyle: "alert-success",
        message: "El almacen de proveedor se actualizo con éxito",
    };
   
     let showAndHideAlert;
    ////////////////////
    
    let handleClickClose;
    let data = [];
    
</script>

<h3>Tienda de proveedores</h3>

<hr />
<Edit convertObject={convertObjectStoreSupplier} {handleSubmit} bind:handleClickClose bind:data {alertMessage} {showAndHideAlert} />
{#if data}
    <SearchAndShowItems
        {data}
        {handleChange}
        {handleDelete}
        {thead}
        bind:handleClickClose
    />
{/if}
