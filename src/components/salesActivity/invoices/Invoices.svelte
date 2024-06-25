<script>
    import { onMount } from "svelte";
    import { getDetails } from "./invoices";
    import Table from "./table/Table.svelte";
    import Overlay from "../../tools/overlay/Overlay.svelte"
    import ViewInvoice from "./viewInvoice/ViewInvoice.svelte";
    let details = [];
    let viewInvoice;
    let visible;
    onMount(async () => {
        details = await getDetails();
    });
  </script>

  <Overlay {visible}/>
  <ViewInvoice bind:viewInvoice bind:visible/>
  
  

<dir>

  <div class="d-flex justify-content-center">
    <input type="text"  class="form-control  w-50" placeholder="Buscar por cliente">
    <h4 class="ms-1">&#128269;</h4>
  </div>
  <Table {viewInvoice} {details} />

</dir>
    


  