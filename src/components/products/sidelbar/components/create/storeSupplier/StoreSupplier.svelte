<script>
    import {URL} from "../../../../../tools/connections/url"
    export let cod2;
    let storeSupplier;
    let getStoreSupplier = async () => {
        const fetchSupplier = await fetch(
            URL+"/supplier"
        );
        storeSupplier = await fetchSupplier.json();
    };

    getStoreSupplier();
       
</script>

<div class="text-center">
    <div><h2>Control de almacen de proveedor</h2></div>
</div>
<div class="">
    <label for="" class="text-center">Seleccone un proveedor</label>
    {#if storeSupplier}
        <select
            class="form-control text-center"
            name="supplier"
        >
            {#each storeSupplier as item}
                <option value={JSON.stringify(item)}>{item.name}</option>
            {/each}
        </select>
    {/if}
</div>
<div class="d-flex justify-content-around text-center">
    
    <div class="col-3">
        <label for="">Cod prov 1</label>
        <input
            type="text"
            class="form-control text-center"
            name="idSupplierOne"
            
        />
    </div>
    <div class="col-3">
        <label for="">Cod prov 2 </label>
        <input
            type="text"
            class="form-control text-center"
            name="idSupplierTwo"
            bind:value={cod2}
            
        />
    </div>

    
</div>
