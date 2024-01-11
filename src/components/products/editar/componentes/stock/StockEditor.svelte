<script>
    
    export let product = {};
    let company;

    export let booleanCreate = false;
    let dNone = "d-none";
    let buttonNone = "";

    let editStock = {
        stockDisabled: true,
        color: "warning",
        string: "Editar Stock",
    };

    const toggleStock = () => {
        editStock.stockDisabled = !editStock.stockDisabled;
        if (editStock.stockDisabled) {
            editStock.color = "warning";
            editStock.string = "Editar Stock";
        } else {
            editStock.color = "danger";
            editStock.string = "Cancelar";
        }
    };

    if (booleanCreate) {
        dNone = "";
        buttonNone = "d-none";
        editStock = {
            stockDisabled: false,
            color: "warning",
            string: "Editar Stock",
        };
    }
</script>

<div class="{dNone} text-center">
    <div><h2>Control de Stock</h2></div>
    
</div>

<div class="d-flex justify-content-around text-center">
    {#if company}
    <input class="d-none" type="text" name="company" value={JSON.stringify(company.company)}>
    <div class="col-2">
        <label for="">Stock Min</label>
        <input
            type="text"
            class="form-control text-center"
            name="stockMin"
            value={company.stock_min}
            disabled={editStock.stockDisabled}
        />
    </div>
    
        <div class="me-1 ms-1 col-2">
            <label for="">Stock</label>

            <input
                type="text"
                class="form-control text-center"
                value={company.stock}
                name="stock"
                disabled={editStock.stockDisabled}
            />
        </div>
        <div class="col-2">
            <label for="">Stock Max</label>
            <input
                type="text"
                class="form-control text-center"
                value={company.stock_max}
                name="stockMax"
                disabled={editStock.stockDisabled}
            />
        </div>
        <input class="d-none" type="text" name="storeId" value={company.id}>
    {/if}
    <div class="col-2">
        <label for="">Almacen</label>
        <select
            class="form-control text-center"
            name="stores"
            disabled={editStock.stockDisabled}
            bind:value={company}
        >
            {#each product.stores as item}
                <option value={item}>{item.company.name}</option>
            {/each}
        </select>
    </div>
    

    <div class="align-items-end d-flex {buttonNone}">
        <button
            on:click|preventDefault={toggleStock}
            class="btn btn-{editStock.color} text-white text-decoration-none"
            >{editStock.string}</button
        >
    </div>
</div>
