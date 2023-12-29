<script>
    import ExportExcel from "./exportExcel/ExportExcel.svelte";
    import UpdateExcel from "./importExcel/updateExcel/UpdateExcel.svelte";
    import Sidelbar from "./sidelbar/Sidelbar.svelte";
    import CreateProduct from "./sidelbar/components/create/CreateProduct.svelte";
    import SearchAndShowProducts from "../searchAndShowProducts/SearchAndShowProducts.svelte"
    let height = window.screen.availHeight - 150;
    let handleClickCreate;
    let exportBoolean;
    let updateBoolean;
    
</script>

<CreateProduct bind:handleClickCreate />

<div class="d-flex">
    <div class="sidelbar bg-secondary pt-5" style="height:{height}px;">
        <Sidelbar  
            bind:exportBoolean
            bind:updateBoolean
            {handleClickCreate}
        />
    </div>
    <div class="container">
        {#if !exportBoolean && !updateBoolean}
            <SearchAndShowProducts/>
        
        {:else if exportBoolean && !updateBoolean}
            <ExportExcel />
        {:else if updateBoolean && !exportBoolean}
            <UpdateExcel />
        {/if}
    </div>
</div>

<style>
    .sidelbar {
        width: 300px;
    }
</style>
