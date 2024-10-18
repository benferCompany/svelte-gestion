<script>
    export let visible = false;
    let detailInvoice = {};
    let arraysProducts;
    let total;
    export const viewInvoice = (detail) => {
        detailInvoice = detail;
        visible = !visible;
        
    };
    $: {
        arraysProducts = dividirArray(
            detailInvoice.products ? detailInvoice.products : [],
            13,
        );

        total = [];
        arraysProducts.map((arraP) => {
            let t = 0;
            arraP.map((p) => (t += p.subTotal));
            total.push(t);
        });
    }

    function printContent() {
        // Ejecutar la función de impresión del navegador
        window.print();
        // Mostrar todos los elementos nuevamente después de imprimir
    }

    const calcularDescuento = (precio, porcentaje) => {
        return precio - (precio * porcentaje) / 100;
    };

    import numeros from "numeros_a_palabras";
    import { dividirArray } from "../../../tools/dividirArray/dividirArray";
    import { payStore, tdsStore } from "../../../stores/cart";

    numeros.numero2word().Config._setSingular("PESO");
    numeros.numero2word().Config._setPlural("PESOS");
    numeros.numero2word().Config._setCentsSingular("CENTAVO");
    numeros.numero2word().Config._setCentsPlural("CENTAVOS");
</script>

{#if visible && detailInvoice}
    <div class="close d-flex">
        <input
            on:click={() => {
                visible = !visible;
                tdsStore.handleClickRemove();
                $payStore = false;
            }}
            type="button"
            value="Cerrar"
            class="btn btn-danger me-1"
        />
        <input
            on:click={() => printContent()}
            type="button"
            value="Imprimir"
            class="btn btn-success"
        />
    </div>
    <div class="viewNoice">
        {#each arraysProducts as arrayProduct, index}
            <div class="childrenInvoice">
                <div class="d-flex">
                    <div class="type card border-black">
                        <h1>{detailInvoice.typeInvoice.type}</h1>
                    </div>
                    <div style="width:50%;" class="card border-black">
                        <div class="d-flex justify-content-center">
                            <img
                                style="width:8em;"
                                src="https://www.zarla.com/images/zarla-construye-fcil-1x1-2400x2400-20220117-9jfq66hqmqfxrmgw9h6w.png?crop=1:1,smart&width=250&dpr=2"
                                alt=""
                            />
                        </div>
                        <h5 class="text-center">Electro Benfer</h5>
                    </div>
                    <div style="width:50%;" class="card border-black">
                        <div class="d-flex">
                            <div style="margin-left:2em;">
                                <h3>{detailInvoice.typeInvoice.name}</h3>
                                <h6>
                                    Nro. Comprobante: {detailInvoice.CbteDesde}
                                </h6>
                                <h6>Fecha de emisicón: 29-01-2024</h6>
                                <div style="display:flex;">
                                    <p>Responsable Monotributo</p>
                                    <p style="margin-left:1em;">
                                        Cuit: 20-35307058-5
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card border-black">
                    <div class="d-flex justify-content-around">
                        <p>Dirección: Leopoldo Lugones 726</p>
                        <p>Telefono: 362-4230777</p>
                        <p>Inivio de actividad: 30/06/2015</p>
                    </div>
                </div>

                <!----Datos del cliente---->

                <div class="row">
                    <div class="col-8 d-flex justify-content-between">
                        <div class=" ms-1">
                            <p>Cliente: {detailInvoice.customer.name?detailInvoice.customer.name:"Consumidor Final"}</p>
                            <p>
                                Dirección: {detailInvoice.customer.address?detailInvoice.customer.address:"Resistencia"}
                            </p>
                        </div>
                        <div class="">
                            <p>
                                Condición Fiscal: {detailInvoice.customer
                                    .fiscal_status?detailInvoice.customer
                                    .fiscal_status:"Consumidor Final"}
                            </p>
                            <p>Cuit: {detailInvoice.customer.idPersonal?detailInvoice.customer.idPersonal:""}</p>
                        </div>
                    </div>
                    <div class="col-4 text-end">
                        <p class="me-1">
                            Condición de pago: {detailInvoice.paymentType?detailInvoice.paymentType:"Efectivo"}
                        </p>
                    </div>
                </div>
                <table class="table">
                    <thead>
                        <tr>
                            <th class="text-center">Codigo</th>
                            <th>Descripción</th>
                            <th class="text-center">Cantidad</th>
                            <th class="text-center">Descuento</th>
                            <th class="text-center">Precio Unit.</th>
                            <th class="text-center">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each arrayProduct as item (item.id)}
                            <tr>
                                <td class="text-center">{item.id}</td>
                                <td>{item.product}</td>
                                <td class="text-center">{item.count}</td>
                                <td class="text-center">{item.discount}%</td>
                                <td class="text-center">${calcularDescuento(item.pvp, item.discount)}</td>
                                <td class="text-center">${item.subTotal}</td>
                            </tr>
                        {/each}
                    </tbody>
                </table>

                <div class="footer">
                    <hr class="bg-black" />
                    <div class="d-flex justify-content-end">
                        <div class="w-100">
                            <table class="table table-borderless">
                                <tbody class="text-end">
                                    <tr>
                                        <td></td>
                                        <td
                                            >Subtotal: ${parseFloat(
                                                total[index],
                                            ).toFixed(2)}</td
                                        >
                                    </tr>
                                    <tr>
                                        <td class="text-start"
                                            >Descuento {detailInvoice.customer
                                                .discount
                                                ? detailInvoice.customer
                                                      .discount
                                                : detailInvoice.discount}%</td
                                        >
                                        <td
                                            >Total: ${parseFloat(
                                                detailInvoice.total,
                                            ).toFixed(2)}</td
                                        >
                                    </tr>
                                </tbody>
                            </table>
                            <hr />
                        </div>
                    </div>
                    <hr />
                    <div class="d-flex ms-2">
                        <p>Son:</p>
                        <p>
                            {numeros
                                .numero2word(detailInvoice.total)
                                .toString()
                                .toLowerCase()
                                .charAt(0)
                                .toUpperCase() +
                                numeros
                                    .numero2word(detailInvoice.total)
                                    .toString()
                                    .toLowerCase()
                                    .slice(1)}
                        </p>
                    </div>
                    <hr />
                    <div class="row">
                        <div class="col-5">
                            <img
                                style="width:25%;"
                                src="/imgs/logoafip.webp"
                                alt=""
                            />
                            <strong>Comprobante autorizado</strong>
                        </div>
                        <div class="col-2">
                            <strong
                                >Pag {index + 1}/{arraysProducts.length}</strong
                            >
                        </div>
                        <div class="col-5">
                            <div>
                                <strong>CAE N°: {detailInvoice.CAE}</strong>
                            </div>
                            <div>
                                <strong
                                    >Fecha de Vto. de CAE: {detailInvoice.CAEFchVto}</strong
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {/each}
    </div>
{/if}

<style>
    .close {
        z-index: 100;
        position: fixed;
        top: 20px;
        right: 10px;
    }
    .viewNoice {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 11;
    }

    .childrenInvoice {
        width: 50em;
        background: white;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
        margin-top: 5em;
        margin-left: 5em;
    }

    p {
        margin: 0;
        padding: 0;
    }
    /* Puedes agregar estilos adicionales para el contenido del PDF aquí */
    .type {
        text-align: center;
        position: absolute;
        top: 10em;
        left: 30em;
        transform: translate(-50%, -50%);
        z-index: 30;
        width: 3em;
    }
    @page {
        margin: 0;
    }

    @media print {
        /* Estilos específicos para la impresión */
        .close,
        .close {
            visibility: hidden;
        }
        .viewNoice,
        .viewNoice * {
            visibility: visible;
        }
        .childrenInvoice,
        .childrenInvoice:nth-child(odd) {
            page-break-after: always;
        }
        .childrenInvoice {
            margin: 0;
            width: 100%;
            height: 100%;
        }
        .viewNoice {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
        }
        .footer {
            position: fixed;
            bottom: 100px;
            left: 0;
            width: 100%;
            margin: 0;
            padding: 0;
        }
        .type {
            text-align: center;
            position: absolute;
            top: 3em;
            left: 29.3em;
            transform: translate(-50%, -50%);
            z-index: 30;
            width: 3em;
        }
    }

    th {
        background: rgb(121, 117, 117);
        color: white;
    }
    .footer {
        margin: 0;
        padding: 0;
        width: 100%; /* Opcional, para que el footer ocupe todo el ancho */
    }
</style>
