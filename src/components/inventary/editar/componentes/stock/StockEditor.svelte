<script>
    export let product;
    let editStock={
        stockDisabled:true,
        color:"warning",
        string: "Editar Stock"
    }

    const toggleStock = () => {
        
        editStock.stockDisabled =!editStock.stockDisabled;
        if(editStock.stockDisabled){
            editStock.color = "warning";
            editStock.string = "Editar Stock";
        }else{
            editStock.color = "danger";
            editStock.string = "Cancelar";
        }
    };
</script>

<div class="d-flex justify-content-around text-center">
    <div class="col-2">
        <label for="">Stock Min</label>
        <input
            type="text"
            class="form-control text-center"
            name="stockMin"
            value={product.stockMin}
            disabled={editStock.stockDisabled}
        />
    </div>
    <div class="me-1 ms-1 col-2">
        <label for="">Stock</label>
        <input
            type="text"
            class="form-control text-center"
            value={product.stock}
            name="stock"
            disabled={editStock.stockDisabled}
        />
    </div>
    <div class="col-2">
        <label for="">Stock Max</label>
        <input
            type="text"
            class="form-control text-center"
            value={product.stockMax}
            name="stockMax"
            disabled={editStock.stockDisabled}
        />
    </div>
    <div class="col-2">
        <label for="">Almacen</label>
        <input
            type="text"
            class="form-control text-center"
            value={product.stockMax}
            
            disabled={editStock.stockDisabled}
        />
    </div>
    
    <div class="align-items-end d-flex">
        <button
            on:click|preventDefault={toggleStock}
            class="btn btn-{editStock.color} text-white text-decoration-none"
            >{editStock.string}</button
        >
    </div>
</div>