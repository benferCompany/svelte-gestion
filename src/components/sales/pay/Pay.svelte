<script>
    //Imports
    import { Link } from "svelte-routing";
    import { costTotal, payStore, tdsStore, total } from "../../stores/cart";
    import ParentSelectByText from "../../tools/selectetByText/ParentSelectByText.svelte";
    import {
        typeInvoice,
        fiscalStatus,
        typeOfPayment,
        clickBoton,
    } from "./pay";
    import { options, salePdf } from "./pay";
    import { globalSalePerson } from "../../../routes/user";
    import { selectCompany } from "../../stores/company";

    //variables
    let pago = 0;
    let customer;
    let fiscalstatus = "";
    let paymentType;
    let salePerson;
    let tpInv;

    //exports
    export let viewInvoice;

    $: {
        salePerson = $globalSalePerson;
        fiscalstatus =
            customer && customer.fiscal_status ? customer.fiscal_status : "";
    }
</script>

<div class="overlay">
    <div class="pay">
        <div class="header bg-primary">
            <div
                on:mousedown={() => {
                    payStore.handleClickPay($tdsStore);
                }}
                class="close"
            >
                <Link class="text-decoration-none" to="/ventas">&#128473;</Link>
            </div>
            <h4>Información de pago</h4>
        </div>
        <div class="d-flex">
            <div class="ps-3 pe-1">
                <label for="">Cliente</label>
                <ParentSelectByText bind:select={customer} {options} />
            </div>
            <div class="w-100 pe-3 ps-1">
                <label for="">Tipo de facturación</label>
                <select bind:value={tpInv} class="form-control" name="" id="">
                    {#each typeInvoice as item}
                        <option value={item}>{item.name}</option>
                    {/each}
                </select>
            </div>
        </div>

        <div class="d-flex justify-content-around">
            <div class="text-center">
                <label for="">Condición fiscal</label>
                <select bind:value={fiscalstatus} class="form-control">
                    {#each fiscalStatus as status}
                        <option value={status}>{status}</option>
                    {/each}
                </select>
            </div>
            <div class="mb-2" style="align-self:end;">
                <div>
                    <Link
                        to="/customers"
                        class="btn btn-secondary text-decoration-none"
                        style="width:20em;">Crear Cliente</Link
                    >
                </div>
            </div>
        </div>
        <div>
            <div class="d-flex justify-content-around text-center">
                <div>
                    <label for="">Tipo de pago</label>
                    <select
                        bind:value={paymentType}
                        style="
                        width:20em;
                    "
                        class="form-control"
                    >
                        {#each typeOfPayment as item}
                            <option value={item}>{item}</option>
                        {/each}
                    </select>
                </div>
                <div>
                    <label for="">Ingrese Monto</label>
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
                    <h3>Total</h3>
                    <h1 class="text-center">${$total.total - pago}</h1>
                </div>
            </div>
        </div>
        <div>
            <!-- svelte-ignore missing-declaration -->
            <button
                on:click={async () => {
                    let object = {
                        customer,
                        salePerson,
                        paymentType,
                        fiscalstatus,
                        products: $tdsStore,
                        company: $selectCompany,
                        typeInvoice: tpInv,
                        total: $total.total,
                        discount: $total.discount,
                        costTotal: $costTotal
                    };
                    $salePdf = object;
                    await clickBoton(object, viewInvoice);
                }}
                style="
                    margin-left:80%;
                "
                class="btn btn-primary">Procesar</button
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
        z-index: 10;
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
