<script>
    export let debouncedSearch;
    let page = 0;
    export let desc;
    export let products;
    try {
        products.totalElements
    } catch (error) {
        products ={totalElements:0}
    }
    const handleCount = (e) => {
        if (e.target.innerHTML == "Atras" && page > 0 && desc) {
            
            page -= 1;
            debouncedSearch({'target':{'value': desc}}, page);
        } else if (e.target.innerHTML == "Adelante" && desc && page < (products.totalElements/5).toFixed(0)) {
            page += 1;
            debouncedSearch({'target':{'value': desc}}, page);
        }
    };
    
</script>

<div class="d-flex">
    <button on:click={handleCount} class="me-1 rounded">Atras</button>
    <button disabled class="me-1 rounded">{page}</button>
   
    {#if products.totalElements}
    <button disabled on:click={handleCount} class="rounded me-1">De</button>
    <button disabled class="me-1 rounded">{(products.totalElements/5).toFixed(0)}</button>
    {/if}
    <button on:click={handleCount} class="rounded">Adelante</button>
</div>

<style>
</style>
