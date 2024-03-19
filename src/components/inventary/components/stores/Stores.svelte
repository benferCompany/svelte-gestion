<script>
    import Create from "../create/Create.svelte";
    import Edit from "../editar/Edit.svelte";
    import SearchAndShowItems from "../searchAndShowItems/SearchAndShowItems.svelte";
    import { thead, handleDelete, handleChange } from "./stores";
    import { convertObject, handleSubmit } from "../editar/edit";
    import { objectCreate, submitStoreCreate } from "../create/create";

    //Atributos de message
     let alertMessage = {
        alertStyle: "alert-success",
        message: "La compañia se actualizo con éxito",
    };
    
    let showAndHideAlert;
         ////////////////////
    let handleClickClose;
    let data = [];
    let page = 0;
    let visible = false;
    
    
</script>

<h3>Depositos</h3>
<hr />
<div>
    <input
        on:click={() => {
            visible = true;
        }}
        type="button"
        value="Crear deposito"
        class="btn btn-secondary"
    />
</div>
<hr />
<Create handleSubmit={submitStoreCreate} bind:visible data={objectCreate} />
<Edit {convertObject} {handleSubmit} bind:handleClickClose bind:data {alertMessage} {showAndHideAlert} />
<SearchAndShowItems
    {handleDelete}
    {thead}
    {data}
    {handleChange}
    bind:handleClickClose
/>
