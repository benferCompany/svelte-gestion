<script>
    import { showSupplier } from "../../../../stores/supplier";
    import { URL } from "../../../../tools/connections/url";
    let getSuppliers = [];
    let suppliers = [];
    async function fetchData() {
        // Haces la llamada asíncrona
        let datos = await showSupplier(URL + "/supplier");
        getSuppliers = datos;
    }
    $: {
        if (getSuppliers != undefined) {
            suppliers = getSuppliers;
        }
    }
    fetchData();

    let storeSupplier;

    export let product = {
        storeSuppliers: [
            {
                idInternal: 0,
                idSupplierOne: 0,
                idSupplierTwo: 0,
                supplier: {
                    id: 0,
                    name: "",
                    last_name: "",
                    address: "",
                    email: "",
                    phone: 0,
                    mobil_phone: 0,
                    cuil: 0,
                    name_bussiness: "",
                },
            },
        ],
        boolean: false,
    };
    storeSupplier = product.storeSuppliers[0];

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
    <div><h2>Control de almacen de proveedor</h2></div>
</div>
<div class="">
    <label for="" class="text-center">Seleccone un proveedor</label>
    {#if !product.boolean}
        <select
            class="form-control text-center"
            name="storeSupplier"
            disabled={editStock.stockDisabled}
            on:change={(e) => {
                storeSupplier = JSON.parse(e.target.value);
            }}
        >
            {#each suppliers as stSup}
                <option
                    value={JSON.stringify(product.storeSuppliers[0])}
                    selected>{stSup.name}</option
                >
            {/each}
        </select>
    {:else}
        <select
            class="form-control text-center"
            name="storeSupplier"
            disabled={editStock.stockDisabled}
            on:change={(e) => {
                storeSupplier = JSON.parse(e.target.value);
            }}
        >
            {#each suppliers as supplier, index}
                    {#if !product.storeSuppliers[index]}
                        <option
                            value={JSON.stringify({
                                id: 0,
                                idInternal: 0,
                                idSupplierOne: 0,
                                idSupplierTwo: 0,
                                supplier: supplier,
                                product:product,
                            })}>{supplier.name}</option
                        >
                    {:else}
                        <option value={JSON.stringify(product.storeSuppliers[index])}
                            >{product.storeSuppliers[index].supplier.name}</option
                        >
                    {/if}
                
            {/each}
        </select>
    {/if}
</div>
<div class="d-flex justify-content-around text-center">
    <input
        class="d-none"
        type="text"
        name="storeSupplierId"
        value={storeSupplier?storeSupplier.id:0}
    />
    <input
        type="text"
        name="supplier"
        class="d-none"
        value={JSON.stringify(storeSupplier?storeSupplier.supplier:suppliers[0])}
    />
    <div class="col-4">
        <label for="">Cod prov 1</label>
        <input
            type="text"
            class="form-control text-center"
            name="idSupplierOne"
            value={storeSupplier?storeSupplier.idSupplierOne:0}
            disabled={editStock.stockDisabled}
        />
    </div>
    <div class="col-4">
        <label for="">Cod prov 2 </label>
        <input
            type="text"
            class="form-control text-center"
            name="idSupplierTwo"
            value={storeSupplier?storeSupplier.idSupplierTwo:0}
            disabled={editStock.stockDisabled}
        />
    </div>

    <div class="align-items-end d-flex {buttonNone}">
        <button
            on:click|preventDefault={toggleStock}
            class="btn btn-{editStock.color} text-white text-decoration-none"
            >{editStock.string}</button
        >
    </div>
</div>
