<script>
    import {getData} from "./exportExcel";
    
    let stores= [];
    let suppliers = [];
    const fetchStores =async ()=>{
        stores = await getData("http://54.175.227.120:8080/company");
    }
    const fetchSuppliers =async ()=>{
        suppliers = await getData("http://54.175.227.120:8080/supplier");
    }

    
    fetchSuppliers()
    fetchStores()
    $:{
        console.log(stores)
        console.log(suppliers)
    }
    
</script>

<div>
    <h1>Filtro</h1>
    <div>
        <table class="table">
            <thead>
                <tr>
                    <th>Proveedor</th>
                    <th>Almacen</th>
                    <th>Acción</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="col-4">
                        <select class="form-control" name="">
                            {#each suppliers as supplier}
                            <option value={supplier}>{supplier.name}</option>
                            {/each}
                        </select>
                    </td>
                    <td class="col-4">
                        <select class="form-control" name="">
                            {#each stores as store}
                            <option value={store}>{store.name}</option>
                            {/each}
                        </select>
                    </td>
                    <td class="col-2">
                        <button class="btn btn-success btn-sm">Filtrar</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

