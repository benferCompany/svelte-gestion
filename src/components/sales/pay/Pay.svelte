<script>
    import { Link } from "svelte-routing";
    import {payStore, tdsStore,total} from "../../stores/cart"
    
    let pago = 0;
    console.log($total)
    
</script>

<div class="overlay">
    <div class="pay">
        <div class="header bg-primary">
            <div on:mousedown={()=>{
                payStore.handleClickPay($tdsStore)
            }} class="close">
                <Link class="text-decoration-none" to="/ventas">&#128473;</Link>
            </div>
            <h4>Información de pago</h4>
        </div>
        <div class="d-flex justify-content-around">
            <div class="text-center">
                <label for="">Cliente</label>
                <select
                    class="form-control"
                    style="
                    width:20em;
                "
                >
                    <option>Consumidor final</option>
                </select>
            </div>
            <div style="align-self:end;">
                <div>
                    <button class="btn btn-secondary" style="width:20em;"
                        >Crear Cliente</button
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
                    <h1 class="text-center">${$total-pago}</h1>
                </div>
            </div>
        </div>
        <div>
            <button
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
