<script>
    import {URL} from "../../../../../tools/connections/url"
    let company;
    let getCompany = async () => {
        const comp = await fetch(URL+"/company");
        company = await comp.json();
    };
    getCompany();
    
    
</script>

<div class="text-center">
    <div><h2>Control de Stock</h2></div>
</div>
<div>
    <label class="text-center" for="">Almacen</label>
    {#if company}
        <select
            class="form-control text-center"
            name="company"
           
        >
            {#each company as item}
                <option value={JSON.stringify(item)}>{item.name}</option>
            {/each}
        </select>
    {/if}
</div>
<div class="d-flex justify-content-around text-center">
    <div class="col-3">
        <label for="">Stock Min</label>
        <input
            type="number"
            class="form-control text-center"
            name="stockMin"
           
        />
    </div>

    <div class="me-1 ms-1 col-3">
        <label for="">Stock</label>

        <input
            type="number"
            class="form-control text-center"
            name="stock"
            />
    </div>
    <div class="col-3">
        <label for="">Stock Max</label>
        <input
            type="number"
            class="form-control text-center"
            name="stockMax"
            />
    </div>
</div>
