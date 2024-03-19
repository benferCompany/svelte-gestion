<script>
    export let debouncedSearch;
    let page =0;
    export let desc;
</script>

<div>
    <div class="parentInput d-flex">
        <p>&#128269;</p>
        <input
            on:input={(e) => {
                debouncedSearch(e,page);
            }}
            bind:value={desc}
            class="rounded form-control ms-2"
            placeholder="Buscar proveedor"
            type="text"
        />
    </div>
</div>

<style>
    .parentInput {
        width: 50%;
        margin: 0 auto;
    }
    .parentInput p {
        font-size: 30px;
        margin: 0;
        padding: 0;
    }
</style>
