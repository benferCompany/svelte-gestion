<script>
    import * as XLSX from "xlsx";
    import { getCurrentDate } from "../../../tools/dataNow/DataNow";
    import { URL } from "../../../tools/connections/url";
    let jsonData = null;
    let datos = [];
    let progress = 0;
    let info = { update: 0, created: 0 };
    let select = 0;
    let booleanBreak =false;
    const fileSubmit = async () => {
        console.log(datos);
        select = 1;
        for (const dt of datos) {
            try {
                let response = await fetch(`${URL}/products/createOrUpdate`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(dt),
                });

                let responseJson = await response.json();
                progress += 1;
                if (responseJson.status == "UPDATE") {
                    info.update += 1;
                } else if (responseJson.status == "CREATED") {
                    info.created += 1;
                }
            } catch (error) {
                console.error("Error processing data:", dt, error);
            }
            if(booleanBreak){
                break;
                
            }
        }
        select = 2;
    };
    
    function handleFileInput(event) {
        let file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = function (e) {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: "array" });
            const sheetName = workbook.SheetNames[0]; // Suponiendo que solo hay una hoja de cálculo
            const worksheet = workbook.Sheets[sheetName];
            jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 2 });
            datos = convertJson(jsonData);
        };
        reader.readAsArrayBuffer(file);
    }

    const convertJson = (json) => {
        let products = [];
        for (const item of json) {
            let product = {
                idInternal: item.idInternal,
                title: item.titulo,
                description: item.descripcion,
                cost_price: item.costo,
                selling_price: item.pvp,
                stores: null,
                image: item.URL_imagen,
                creation_date: getCurrentDate(),
                storeSuppliers: null,
            };

            products.push(product);
        }

        return products;
    };
</script>

<div>
    {#if select == 0}
        <form on:submit|preventDefault={fileSubmit} action="">
            <input on:input={handleFileInput} type="file" />
            {#if datos.length > 0}
                <input type="submit" value="Enviar" />
            {/if}
        </form>
    {:else if select == 1}
        <h4 class="text-center">Progreso</h4>
    {:else if select == 2}
        <h4 class="text-center">Información:</h4>
    {/if}
    {#if datos.length > 0 && select != 0}
        <div>
            <progress style="width:100%;" value={progress} max={datos.length}
            ></progress>
        </div>
        <div class="d-flex justify-content-around">
            <h4>Productos creados {info.created}</h4>
            <h4>Productos actualizados {info.update}</h4>
        </div>
        {#if select == 2}
            <div class="d-flex justify-content-center">
                <input
                    on:click={() => {
                        select = 0;
                        datos = [];
                        progress =0;
                        jsonData =null;
                        booleanBreak =false;
                        info = { update: 0, created: 0 }
                    }}
                    class="btn btn-warning"
                    type="button"
                    value="Finalizar rebición"
                />
            </div>
        {:else}
            <div class="d-flex justify-content-center">
                <input
                    on:click={() => {
                        booleanBreak = true;
                       
                    }}
                    class="btn btn-danger"
                    type="button"
                    value="Parar"
                />
            </div>
        {/if}
    {/if}
</div>
