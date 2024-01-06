<script>
    import InputSearch from "./inputSearch/InputSearch.svelte"
    import Tablet from "./table/Tablet.svelte";
    import Pagination from "./pagination/Pagination.svelte";
    
    let debouncedSearch;
    let customers;
    let desc;
    let handleClickClose
    
</script>

<div>
    <InputSearch bind:desc {debouncedSearch} />
</div>

<div>
    <Tablet bind:customers bind:debouncedSearch />
    <div class="d-flex justify-content-center">
        <Pagination bind:customers bind:desc {debouncedSearch} />
    </div>
</div>