<script>
    import Tablet from "./table/Tablet.svelte";
    import * as XLSX from "xlsx";
    import Loading from "../../tools/loading/Loading.svelte";
    import { saveAs } from "file-saver";
    import {URL} from "../../tools/connections/url";
    let booleanStores = false;
    let booleanStoreSuppliers = false;
    let booleanProducts = false;
    function exportToExcel(jsonData) {
        let flattenedData;
        let fileName = "";
        if (booleanProducts && !booleanStoreSuppliers && !booleanStores) {
            flattenedData = jsonData.map((product) => ({
                id: product.id,
                titulo: product.title,
                descripcion: product.description,
                costo: product.cost_price,
                pvp: product.selling_price,
                URL_imagen: product.image,
            }));

            fileName = "Productos";
        } else if (
            !booleanProducts &&
            !booleanStoreSuppliers &&
            booleanStores
        ) {
            flattenedData = jsonData.reduce((acc, product) => {
                acc.push(
                    ...product.stores.map((store) => ({
                        compania: store?.company?.name || "",
                        companiaId: store?.company?.id || "",
                        almacenId: store?.id || "",
                        stock: store?.stock || "",
                        stock_min: store?.stock_min || "",
                        stock_max: store?.stock_max || "",
                        codigo_producto: store?.productId || "",
                    })),
                );
                return acc;
            }, []);
            fileName = "Almacen";
        } else if (
            !booleanProducts &&
            booleanStoreSuppliers &&
            !booleanStores
        ) {
            flattenedData = jsonData.reduce((acc, product) => {
                acc.push(
                    ...product.storeSuppliers.map((storeSupplier) => ({
                        almacen_proveedor_id: storeSupplier?.id || "",
                        codigo: storeSupplier?.idInternal || "",
                        codigo_proveedor: storeSupplier?.idSupplierOne || "",
                        codigo_proveedor2: storeSupplier?.idSupplierTwo || "",
                        proveedor_nombre: storeSupplier?.supplier?.name || "",
                        proveedor_id: storeSupplier?.supplier?.id || "",
                        codigo_producto: storeSupplier?.idProduct || "",
                    })),
                );
                return acc;
            }, []);
            fileName = "Almacen_proveedor";
        }
        booleanStores = false;
        booleanStoreSuppliers = false;
        booleanProducts = false;
        const worksheet = XLSX.utils.json_to_sheet(flattenedData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, fileName);
        const excelBuffer = XLSX.write(workbook, {
            bookType: "xlsx",
            type: "array",
        });
        const data = new Blob([excelBuffer], {
            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        });
        saveAs(data, "productos.xlsx");
    }
    let loading = false;

    let promiseProducts;
    const products = async () => {
        loading = true;
        let fetchProducts = await fetch(
            URL+"/products/exportExcel",
        );
        promiseProducts = await fetchProducts.json();
       
        loading = false;
    };
</script>

<Loading bind:loading />
<div>
    {#if !promiseProducts}
        <h1>Importar Datos</h1>
        <p>Importa los productos desde la base de datos</p>
        <div>
            <input
                on:click={products}
                type="button"
                value="Importar"
                class="btn btn-success"
            />
        </div>
    {:else}
        <h1>Exportar Excel</h1>
        <p>Los datos ya estan listos para ser exportados</p>
        <div>
            <input
                on:click={() => {
                    booleanProducts = true;
                    exportToExcel(promiseProducts);
                }}
                type="button"
                value="Exportar Productos"
                class="btn btn-success"
            />
        </div>

        <div>
            <input
                on:click={() => {
                    booleanStores = true;
                    exportToExcel(promiseProducts);
                }}
                type="button"
                value="Exportar Almacen"
                class="btn btn-success"
            />
        </div>
        <div>
            <input
                on:click={() => {
                    booleanStoreSuppliers = true;
                    exportToExcel(promiseProducts);
                }}
                type="button"
                value="Exportar Almacen Proveedores"
                class="btn btn-success"
            />
        </div>
    {/if}
</div>

<Tablet products={promiseProducts} />
