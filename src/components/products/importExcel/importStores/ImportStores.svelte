<script>
    import * as XLSX from "xlsx";
    import { getCurrentDate } from "../../../tools/dataNow/DataNow";
    import { URL } from "../../../tools/connections/url";
    let jsonData = null;
    let datos = [];
    let progress =0;
    const fileSubmit = async () => {
       
        for (const dt of datos) {
            try {
                let response = await fetch(`${URL}/stores/createOrUpdate`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(dt),
                });

                let responseJson = await response.json();
                progress +=1;
            } catch (error) {
                console.error("Error processing data:", dt, error);
            }
        }
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
        let stores = [];
        for (const item of json) {
            let store = {
                company: {
                    id: item.company,
                },
                product: { idInternal: item.product },
                last_modication: getCurrentDate(),
                stock: item.stock,
                stock_min: item.stock_min,
                stock_max: item.stock_max,
            };

            stores.push(store);
        }

        return stores;
    };
</script>

<div>
    <form on:submit|preventDefault={fileSubmit} action="">
        <input on:change={handleFileInput} type="file" />
        {#if datos.length > 0}
            <input type="submit" value="Enviar" />
        {/if}
    </form>
    {#if datos.length > 0}
        <div class="progress">
            <div
                class="progress-bar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax={datos.length}
            >
                {progress}% completado
            </div>
        </div>
    {/if}
</div>
