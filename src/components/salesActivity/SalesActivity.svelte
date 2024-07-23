<script>
    import DailySales from "./dailySales/DailySales.svelte";
import Invoices from "./invoices/Invoices.svelte";
    let select = 0;
    const selection = (s) => {
        select = s;
    };
</script>

<hr />

<div class="d-flex">
    <div class="me-2">
        <input
            on:click={() => {
                selection(0);
            }}
            type="button"
            value="Caja del día"
            class="btn btn-success"
        />
    </div>
    <div class="me-2">
        <input
            on:click={() => {
                selection(1);
            }}
            type="button"
            class="btn btn-success"
            value="Ventas"
        />
    </div>
    <div class="me-2">
        <input
            on:click={() => {
                selection(2);
            }}
            type="button"
            class="btn btn-success"
            value="Facturas"
        />
    </div>
</div>
<hr />

{#if select == 0}
    <DailySales/>
{:else if select == 1}
    <h1>Ventas</h1>
{:else if select == 2}
    <Invoices />
{/if}
