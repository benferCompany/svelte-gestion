<script>
    export let debouncedSearch;
    let page = 0;
    export let desc;
    export let customers;
    if (customers) {
        try {
            customers.totalElements;
        } catch (error) {
            customers = { totalElements: 0 };
        }
    }
    const handleCount = (e) => {
            if (e.target.innerHTML == "Atras" && page > 0 && desc) {
                page -= 1;
                debouncedSearch({ target: { value: desc } }, page);
            } else if (
                e.target.innerHTML == "Adelante" &&
                desc &&
                page < (customers.totalElements / 5).toFixed(0)
            ) {
                page += 1;
                debouncedSearch({ target: { value: desc } }, page);
            }
        };

</script>
{#if customers}
<div class="d-flex">
    <button on:click={handleCount} class="me-1 rounded">Atras</button>
    <button disabled class="me-1 rounded">{page}</button>

    {#if customers.totalElements}
        <button disabled on:click={handleCount} class="rounded me-1">De</button>
        <button disabled class="me-1 rounded"
            >{(customers.totalElements / 5).toFixed(0)}</button
        >
    {/if}
    <button on:click={handleCount} class="rounded">Adelante</button>
</div>
{/if}
<style>
</style>
