<script>
    import { Link, navigate } from "svelte-routing";
    import { payStore, tdsStore, total } from "../../stores/cart";
    import ParentSelectByText from "../../tools/selectetByText/parentSelectByText.svelte";
    import { options, salePdf } from "./pay";
    let pago = 0;
    let customer;
    let fiscalstatus = "";
    let paymentType;
    let typeOfPayment = ["Efectivo", "Tarjeta de credito", "Debito", "Transferencia"]
    let fiscalStatus = ["Consumidor Final", "Responsable Monotributo", "Responsable Inscripto", "Excento"]
    $:{
        fiscalstatus = customer && customer.fiscal_status? customer.fiscal_status:"";        
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
        <div class="d-flex justify-content-around">
            <div class="text-center">
                <label for="">Cliente</label>
                <ParentSelectByText bind:select={customer} {options} />
                <label for="">Condición fiscal</label>
                <select bind:value={fiscalstatus} class="form-control" name="" id="">
                    {#each  fiscalStatus as status}
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
                    <h3>Total a pagar</h3>
                    <h1 class="text-center">${$total - pago}</h1>
                </div>
            </div>
        </div>
        <div>
            <button
                on:click={() => {
                    let object = {
                        Nombre: customer.name,
                        cuit: customer.idPersonal,
                        Direccion: customer.address,
                        TipoDePago: paymentType,
                        TipoFiscal: fiscalstatus,
                        Productos: $tdsStore,
                        total: $total,
                    };
                    console.log(object);
                    $salePdf = object;
                    if (customer) {
                        navigate("/factura");
                    }
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
