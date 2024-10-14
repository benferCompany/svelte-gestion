<script>
    import { onMount } from "svelte";
    import { getPayments, getShippingStatus } from "./misCompras";
    import { formatDateMercadoPago } from "../../../components/tools/mercadopago/date/formatDate";
    let misCompras;
    let currentPage = 0; // Página actual (comienza en 0)
    let pageSize = 10; // Tamaño de página, por ejemplo 10 pagos por página
    let totalPages = 0; // Total de páginas disponibles
    const fetchPayments = async (page = 0, size = 10) => {
        const response = await getPayments("benjidfer@gmail.com", page, size);
        console.log(response);
        if (response && response.content) {
            misCompras = {
                content: response.content.map((element) => {
                    return {
                        id: element.id,
                        items: element.additionalInfo.items,
                        status: element.status,
                        statusDetail: element.statusDetail,
                        transactionAmount: element.transactionAmount,
                        dateCreated: element.dateCreated,
                    };
                }),
                empty: response.empty,
                first: response.first,
                last: response.last,
                number: response.number,
                numberOfElements: response.numberOfElements,
                pageable: response.pageable,
                size: response.size,
                sort: response.sort,
                totalElements: response.totalElements,
                totalPages: response.totalPages,
            };
            totalPages = misCompras.totalPages; // Total de páginas
            currentPage = misCompras.number; // Página actual
        }
    };

    // Funciones para la paginación
    const goToNextPage = () => {
        if (currentPage < totalPages - 1) {
            fetchPayments(currentPage + 1, pageSize);
        }
    };

    const goToPreviousPage = () => {
        if (currentPage > 0) {
            fetchPayments(currentPage - 1, pageSize);
        }
    };

    const goToPage = (page) => {
        if (page >= 0 && page < totalPages) {
            fetchPayments(page, pageSize);
        }
    };

    onMount(() => {
        fetchPayments(currentPage, pageSize);
    });

    const status = (status) => {
        if (status === "approved") {
            return "<strong class='color-oferta'>Aprobado</strong>";
        } else if ("pending") {
            return "<strong class='color-tertiary'>Pendiente</strong>";
        }
        return status;
    };

    const statusShiping = (id) => {
        if (getShippingStatus(id)) {
            return "<strong class='color-oferta'>Entregado</strong>";
        } else if ("pending") {
            return "<strong class='color-tertiary'>Pendiente</strong>";
        }
        return status;
    };
</script>

<div
    style="display:flex; flex-direction:column; justify-content:space-between; margin:0; padding:0;"
>
    {#if misCompras}
        <div>
            {#each misCompras.content as compra}
                <div class="content background-quaternary">
                    <div style="display:flex; justify-content:space-between;">
                        <p>ID: {compra.id}</p>
                        <p>Fecha:{formatDateMercadoPago(compra.dateCreated)}</p>
                    </div>
                    <p>Detalle:</p>
                    <div class="content-table background-secondary">
                        <table>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Descripción</th>
                                    <th>Cantidad</th>
                                    <th>Precio</th>
                                    <th>Imagen</th>
                                </tr>
                            </thead>
                            <tbody>
                                {#each compra.items as prod}
                                    <tr>
                                        <td style="text-align:start;"
                                            >{prod.id}</td
                                        >
                                        <td style="text-align:right;"
                                            >{prod.description}</td
                                        >
                                        <td style="text-align:center;"
                                            >{prod.quantity}</td
                                        >
                                        <td style="text-align:center;"
                                            >{prod.unitPrice *
                                                prod.quantity}</td
                                        >
                                        <td
                                            style="display:flex; justify-content:end; width:100;"
                                            ><img
                                                style="max-width:100%; width:50px;"
                                                src={prod.pictureUrl}
                                                alt=""
                                            /></td
                                        >
                                    </tr>
                                {/each}
                            </tbody>
                        </table>
                    </div>
                    <div style="display:flex; justify-content:space-around">
                        <div style="display:flex; gap:0.5em;">
                            <p>Esta de pago:</p>
                            {@html status(compra.status)}
                        </div>
                        <strong>Total:$ {compra.transactionAmount}</strong>
                    </div>
                    <div style="display:flex; gap:0.5em;">
                        <p>Esta de envio:</p>
                        {@html statusShiping(compra.id)}
                    </div>
                </div>
            {/each}
        </div>
    {/if}

    <div style="display:flex; justify-content:center;">
        <button
            class="button background-tertiary"
            on:click={goToPreviousPage}
            disabled={currentPage === 0}>Anterior</button
        >
        {#each Array(totalPages) as _, index}
            <button
                class="button background-tertiary"
                on:click={() => goToPage(index)}
                disabled={index === currentPage}>{index + 1}</button
            >
        {/each}
        <button
            class="button background-tertiary"
            on:click={goToNextPage}
            disabled={currentPage === totalPages - 1}>Siguiente</button
        >
    </div>
</div>

<style>
    .content {
        color: rgb(212, 212, 212);
        text-shadow: 0.05em 0.05em 0.05em rgba(0, 0, 0, 0.3);
        padding: 0.5em;
        border-radius: 0.5em;
        margin: 0.5em;
        box-shadow: 0.1em 0.1em 0.1em rgba(0, 0, 0, 0.3);
    }
    .content-table {
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 0.5%em;
        border-radius: 0.5em;
        box-shadow: 0.1em 0.1em 0.1em rgba(0, 0, 0, 0.3);
    }
    th {
        text-decoration: none;
        font-weight: normal;
        text-align: center;
        font-size: 15px;
    }
    td {
        font-size: 15px;
    }
    .button {
        margin: 1em;
        border: none;
        color: #f07423;
        font-weight: bold;
        box-shadow: 0.1em 0.1em 0.1em rgba(0, 0, 0, 0.3);
    }
</style>
