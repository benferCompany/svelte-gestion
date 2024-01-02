<script>
    let debouncedSearch;
    let products;
    let desc;
    let handleClickClose
    import InputSearch from "./inputSearch/InputSearch.svelte";
    import Pagination from "./pagination/Pagination.svelte";
    import Tablet from "./table/Tablet.svelte";
</script>

<div>
    <InputSearch bind:desc {debouncedSearch} />
</div>

<div>
    <Tablet bind:products {handleClickClose} bind:debouncedSearch />
    <div class="d-flex justify-content-center">
        <Pagination bind:products bind:desc {debouncedSearch} />
    </div>
</div>