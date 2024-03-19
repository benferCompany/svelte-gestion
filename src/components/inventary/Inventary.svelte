<script>
    import Stock from "./components/stock/Stock.svelte";
import StoreSuppliers from "./components/storeSuppliers/StoreSuppliers.svelte";
    import Stores from "./components/stores/Stores.svelte";

    let selectOptions = 0;
    $: {
        selectOptions;
    }
</script>

<hr />
<div>
    <input
        on:click={() => {
            selectOptions = 0;
        }}
        type="button"
        value="Depositos"
        class="btn btn-success"
    />
    <input
        on:click={() => {
            selectOptions = 1;
        }}
        type="button"
        value="Almacen de proveedor"
        class="btn btn-success"
    />
    <input
        on:click={() => {
            selectOptions = 2;
        }}
        type="button"
        value="Stock"
        class="btn btn-success"
    />
</div>
<hr />

{#if selectOptions == 0}
    <Stores />
{:else if selectOptions == 1}
    <StoreSuppliers />
{:else if selectOptions == 2}
    <Stock/>
{/if}
