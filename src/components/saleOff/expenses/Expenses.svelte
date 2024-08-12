<script>
    import CreateExpenses from "./createExpenses/CreateExpenses.svelte";
    import Filter from "./filter/Filter.svelte";
    import Table from "./table/Table.svelte";
    import EditExpenses from "./editExpenses/EditExpenses.svelte";
    import Message from "../../message/Message.svelte";
    //Variables de importación
    let exportElement;
    let editExportElement;
    //Variables locales
    let outFlows
    let showAndHideAlert;
    let alertMessage;
    
</script>
<Message {alertMessage} bind:showAndHideAlert/>
<CreateExpenses bind:alertMessage {showAndHideAlert} bind:exportElement/>
<EditExpenses bind:alertMessage {showAndHideAlert} bind:exportElement={editExportElement}/>
<div class="">
    <input on:click={()=>{
        exportElement.visible = true;
        exportElement.inputFocus();
    }} type="button" value="Crear Gasto" class="btn btn-primary" />
</div>
<hr />
<Filter bind:outFlows/>
<Table bind:outFlows bind:exportElement={editExportElement}/>