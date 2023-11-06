<script>
    import InputSearch from "../inputs/search/InputSearch.svelte";
    import ImportExcel from "./importExcel/ImportExcel.svelte";
    import Pagination from "./pagination/Pagination.svelte";
    import Sidelbar from "./sidelbar/Sidelbar.svelte";
    import CreateProduct from "./sidelbar/components/create/CreateProduct.svelte";
    import Tablet from "./tablet/Tablet.svelte";
    let height = window.screen.availHeight - 150;
    let handleClickClose;
    let handleClickCreate;
    let debouncedSearch;
    let importBoolean;
</script>

<CreateProduct bind:handleClickCreate />

<div class="d-flex">
    <div class="sidelbar bg-secondary pt-5" style="height:{height}px;">
        <Sidelbar bind:importBoolean {handleClickCreate} />
    </div>
    <div class="container">
        {#if importBoolean}
            <div>
                <InputSearch {debouncedSearch} />
            </div>

            <div>
                <Tablet {handleClickClose} bind:debouncedSearch />
                <div class="d-flex justify-content-center">
                    <Pagination />
                </div>
            </div>
        {:else}
            <div>
                <ImportExcel />
            </div>
        {/if}
    </div>
</div>

<style>
    .sidelbar {
        width: 300px;
    }
</style>
