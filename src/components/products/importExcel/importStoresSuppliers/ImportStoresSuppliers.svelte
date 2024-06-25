<script>
    import * as XLSX from "xlsx";
    import { getCurrentDate } from "../../../tools/dataNow/DataNow";
    import { URL } from "../../../tools/connections/url";
    let jsonData = null;
    let datos = [];

    const fileSubmit = async () => {
        console.log(datos);
        for (const dt of datos) {
            try {
                let response = await fetch(`${URL}/storeSuppliers/createOrUpdate`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(dt),
                });

                let responseJson = await response.json();
                console.log(responseJson);
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
        let storeSuppliers = [];
        for (const item of json) {
            

            let storeSupplier = 
                {
                    idSupplierOne: item.idProveedor,
                    idSupplierTwo: "Na",
                    supplier: {
                        id: 1,
                        name: "123",
                        last_name: "123",
                        address: "123",
                        email: "123@123",
                        phone: "123",
                        mobile_phone: "123",
                        name_bussiness: "1231",
                        idPersonal: "1231",
                    },
                    stores: product.stores,
                }
            
            
            storeSuppliers.push(storeSupplier);
        }

        return products;
    };
</script>

<div>
    <form on:submit|preventDefault={fileSubmit} action="">
        <input on:change={handleFileInput} type="file" />
        {#if datos.length > 0}
            <input type="submit" value="Enviar" />
        {/if}
    </form>
    {#if jsonData}
        <pre>{JSON.stringify(jsonData, null, 2)}</pre>
    {/if}
</div>
