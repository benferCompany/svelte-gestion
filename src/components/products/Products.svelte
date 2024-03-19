<script>
    import ExportExcel from "./exportExcel/ExportExcel.svelte";
    import UpdateExcel from "./importExcel/updateExcel/UpdateExcel.svelte";
    import Sidelbar from "./sidelbar/Sidelbar.svelte";
    import CreateProduct from "./sidelbar/components/create/CreateProduct.svelte";
    import SearchAndShowProducts from "../searchAndShowProducts/SearchAndShowProducts.svelte";
    let height = window.screen.availHeight - 150;
    let handleClickCreate;
    let booleanView;
</script>

<CreateProduct bind:handleClickCreate />

<div class="d-flex">
    <div class="sidelbar bg-secondary pt-5" style="height:{height}px;">
        <Sidelbar bind:booleanView {handleClickCreate} />
    </div>
    <div class="container">
        {#if booleanView === 0}
            <SearchAndShowProducts />
        {:else if booleanView === 1}
            <UpdateExcel />
        {:else if booleanView === 2}
            <ExportExcel />
        {/if}
    </div>
</div>

<style>
    .sidelbar {
        width: 300px;
    }
</style>
