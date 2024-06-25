<script>
  import ImportProducts from "./importProducts/ImportProducts.svelte";
  import ImportStores from "./importStores/ImportStores.svelte";
  import ImportStoresSuppliers from "./importStoresSuppliers/ImportStoresSuppliers.svelte";
  let select = 0;
  
</script>

<hr />
<div class ="d-flex">
  <div>
    <input on:click={()=>{
      select = 0
    }} class="btn btn-success me-1" type="button" value="Importar Productos" />
  </div>
  <div>
    <input on:click={()=>{
      select = 1
    }} class="btn btn-success me-1" type="button" value="Importar Tiendas" />
  </div>
  <div>
    <input on:click={()=>{
      select = 2
    }} class="btn btn-success ms-1" type="button" value="Importar T. Proveedores" />
  </div>
</div>
<hr />

{#if select == 0}
  <h3>Importar Products</h3>
  <ImportProducts />
{:else if select == 1}
<h3>Importar Tienda</h3>
  <ImportStores />
{:else if select == 2}
<h3>Importar Tienda de Proveedores</h3>
  <ImportStoresSuppliers />
{/if}
