<script>
    import InputSearch from "./inputSearch/InputSearch.svelte"
    import Tablet from "./table/Tablet.svelte";
    import Pagination from "./pagination/Pagination.svelte";
    
    let debouncedSearch;
    export let suppliers;
    let desc;
    export let handleClickClose
    
    
</script>

<div>
    <InputSearch bind:desc {debouncedSearch} />
</div>

<div>
    <Tablet bind:handleClickClose bind:suppliers bind:debouncedSearch />
    <div class="d-flex justify-content-center">
        <Pagination bind:suppliers bind:desc {debouncedSearch} />
    </div>
</div>