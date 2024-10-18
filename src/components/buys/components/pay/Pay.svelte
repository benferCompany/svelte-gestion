<script>
    import { Link } from "svelte-routing";
    import { payStore, tdsStore, total } from "../cart";
    import { options, objectInvoice } from "./pay";
    import ParentSelectByText from "../../../tools/selectetByText/ParentSelectByText.svelte";
    import { globalSalePerson } from "../../../../routes/user";
    import {selectCompany} from "../../../stores/company";
    let select;
    let pago = 0;
    let object
    
    $:object = { salesPerson: $globalSalePerson, select,detailProductInvoiceSuppliers:$tdsStore,company:$selectCompany};
</script>

<div class="overlay">
    <div class="pay">
        <div class="header bg-warning">
            <div
                on:mousedown={() => {
                    payStore.handleClickPay($tdsStore);
                }}
                class="close"
            >
                <Link class="text-decoration-none text-white" to="/buys"
                    >&#128473;</Link
                >
            </div>
            <h4>Información de pago</h4>
        </div>
        <div class="d-flex justify-content-around">
            <div class="text-center">
                <label for="">Proveedor</label>
                <ParentSelectByText bind:select {options} />
            </div>
            <div style="align-self:end;">
                <div>
                    <Link
                        to="/suppliers"
                        class="btn btn-secondary text-black text-decoration-none"
                        style="width:20em;">Crear Proveedor</Link
                    >
                </div>
            </div>
        </div>
        <div>
            <div class="d-flex justify-content-around">
                <select
                    style="
                    width:20em;
                "
                    class="form-control"
                >
                    <option value="">Efectivo</option>
                </select>
                <div>
                    <input
                        class="form-control"
                        type="text"
                        placeholder="Digite el valor del pago"
                        style="width:20em;"
                        bind:value={pago}
                    />
                </div>
            </div>

            <div class="d-flex justify-content-center">
                <div>
                    <h3>Total a pagar</h3>
                    <h1 class="text-center">${$total - pago}</h1>
                </div>
            </div>
        </div>
        <div>
            <button
                style="
                    margin-left:80%;
                "
                class="btn btn-warning"
                on:click={() => {
                }}>Procesar</button
            >
        </div>
    </div>
</div>

<style>
    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.6); /* Color oscuro semi-transparente */
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 98;
    }
    .pay {
        width: 45em;
        position: absolute;
        z-index: 99;
        background: white;
        left: 25%;
        right: 25%;
    }
    .header {
        color: white;
        padding: 0.5em;
    }
    .close {
        position: absolute;
        top: 0;
        left: 97%;
        bottom: 0;
        right: 0;
    }
</style>
