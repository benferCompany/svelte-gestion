<script>
    import { Link } from "svelte-routing";
    import { tdsStore } from "../cart";
    let ths = [
        "id",
        "stock",
        "Producto",
        "Cantidad",
        "Costo",
        "Desc",
        "SubTotal",
        "delete",
    ];
    //export let $tdsStore= [];

    function updateSubtotal(item) {
        item.subTotal = item.count * item.costo * (1 - item.discount / 100);
    }

    $: {
        $tdsStore.forEach((td) => {
            if (td.count > 0) {
                updateSubtotal(td);
            }
        });
       
    }

    const handleLink = (e) => {
        let id = parseInt(e.target.getAttribute("value"));
        $tdsStore = $tdsStore.filter((item) => item.id !== id);
        sessionStorage.setItem("tdsStore", JSON.stringify($tdsStore));
    };
</script>

<div>
    <table class="table table-striped table-bordered custom-table">
        <thead class="">
            <tr>
                {#each ths as item}
                    <th>{item}</th>
                {/each}
            </tr>
        </thead>
        <tbody>
            {#if $tdsStore.length > 0}
                {#each $tdsStore as item}
                    <tr>
                        <td>{item.id}</td>
                        {#if item.stock + item.count < item.stock_min}
                            <td class="bg-danger text-white">{item.stock + item.count}</td>
                        {:else}
                            <td class="bg-info text-white">{item.stock + item.count}</td>
                        {/if}
                        <td>{item.product}</td>
                        <td class="col-1"
                            ><input
                                on:change={(e) => {
                                    if (e.target.value < 1) {
                                        e.target.value = 1;
                                    }
                                }}
                                class="col-12 text-center"
                                type="number"
                                bind:value={item.count}
                                style="margin:auto"
                            /></td
                        >
                        <td class="col-1"
                            ><input
                                class="col-12 text-center"
                                type="text"
                                bind:value={item.costo}
                                style="margin:auto"
                            /></td
                        >
                        <td class="col-1"
                            ><input
                                class="col-12 text-center"
                                type="text"
                                bind:value={item.discount}
                                style="margin:auto"
                            /></td
                        >
                        <td>{item.subTotal.toFixed(2)}</td>
                        <td>
                            <Link
                                style="
                        font-size:20px;
                        text-decoration:none;
                        
                        "
                                to="/buys"
                                ><p on:mousedown={handleLink} value={item.id}>
                                    {@html item.delete}
                                </p>
                            </Link>
                        </td>
                    </tr>
                {/each}
            {/if}
        </tbody>
    </table>
</div>

<style>
    .custom-table {
        font-size: 12px; /* Ajusta el tamaño del texto en las celdas */
        margin-bottom: 10px; /* Ajusta el espaciado inferior */
    }
    .custom-table th {
        width: 150px;
    }
    .custom-table td {
        vertical-align: middle;
        text-align: center;
        padding: 0; /* Ajusta el espaciado interno de las celdas */
    }
    .custom-table td p {
        margin: 0;
    }
</style>
