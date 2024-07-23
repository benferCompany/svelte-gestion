<script>
    
    import {costTotal, tdsStore, total} from "../../stores/cart";
    let subtotal = 0;
    let subCostTotal = 0;
    let discount = 0;
   
    $: {
        subtotal = 0; // Reinicializar subtotal en cada reevaluación
        $tdsStore.forEach((td) => {
            subtotal += td.subTotal;
            subCostTotal += td.subCostTotal;
        });
        $total = (subtotal * (1 - discount / 100)).toFixed(2);
        $costTotal = (subCostTotal * (1 - discount / 100)).toFixed(2);
        
    }
</script>

<div>
    <table class="table table-secondary table-bordered custom-table">
        <thead>
            <tr>
                <th class="text-end">Subtotal:</th>

                <td>${subtotal.toFixed(2)}</td>
            </tr>

            <tr>
                <th class="text-end">Descuento:</th>
                <td class="col-1">
                    <input
                        class="col-12"
                        bind:value={discount}
                        style="margin:auto;"
                        type="text"
                    />
                </td>
            </tr>
            <tr>
                <th class="text-end">Total compra:</th>
                <td>
                    ${$total}
                </td>
            </tr>
        </thead>
    </table>
</div>

<style>
    .custom-table {
        font-size: 12px; /* Ajusta el tamaño del texto en las celdas */
        margin-bottom: 10px; /* Ajusta el espaciado inferior */
    }

    .custom-table td {
        vertical-align: middle;
        text-align: center;
        padding: 0; /* Ajusta el espaciado interno de las celdas */
    }
</style>
