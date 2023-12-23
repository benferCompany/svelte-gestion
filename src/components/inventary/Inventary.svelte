<script>
    import InputSearch from "../inputs/search/InputSearch.svelte";
    import ExportExcel from "./exportExcel/ExportExcel.svelte";
    import UpdateExcel from "./importExcel/updateExcel/UpdateExcel.svelte";
    import Pagination from "./pagination/Pagination.svelte";
    import Sidelbar from "./sidelbar/Sidelbar.svelte";
    import CreateProduct from "./sidelbar/components/create/CreateProduct.svelte";
    import Tablet from "./tablet/Tablet.svelte";
    import UpdatePrice from "./updatePrice/UpdatePrice.svelte";
    let height = window.screen.availHeight - 150;
    let handleClickClose;
    let handleClickCreate;
    let debouncedSearch;
    let importBoolean;
    let exportBoolean;
    let updateBoolean;
</script>

<CreateProduct bind:handleClickCreate />

<div class="d-flex">
    <div class="sidelbar bg-secondary pt-5" style="height:{height}px;">
        <Sidelbar bind:importBoolean bind:exportBoolean bind:updateBoolean {handleClickCreate} />
    </div>
    <div class="container">
        {#if importBoolean && !exportBoolean}
            <div>
                <InputSearch {debouncedSearch} />
            </div>

            <div>
                <Tablet {handleClickClose} bind:debouncedSearch />
                <div class="d-flex justify-content-center">
                    <Pagination />
                </div>
            </div>
        {:else if !importBoolean && !exportBoolean && !updateBoolean }
            <div>
                <UpdateExcel />
            </div>
        {:else if exportBoolean}
            <ExportExcel/>
        {:else if updateBoolean}
            <UpdatePrice/>
        {/if}
    </div>
</div>

<style>
    .sidelbar {
        width: 300px;
    }
</style>
