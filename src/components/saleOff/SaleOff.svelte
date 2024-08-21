<script>
    import "./saleOff.js";
    import Expenses from "./expenses/Expenses.svelte";
    import PendingPayments from "./pendingPayments/PendingPayments.svelte"
    import PaymentsSuppliers from "./paymentsSuppliers/PaymentsSuppliers.svelte";

    let select = 1;

</script>


<div>
    <input on:click={()=>{select=1}} class="btn btn-success" type="button" value="Salidas">
    <input on:click={()=>{select=2}} class="btn btn-success" type="button" value="Gastos Fijos">
    <input on:click={()=>{select=3}} class="btn btn-success" type="button" value="Pagos a proveedores">
</div>
<hr/>

{#if select ==1}
    <Expenses/>
{:else if select==2}
    <PendingPayments/>
{:else}
    <PaymentsSuppliers/>
{/if}

