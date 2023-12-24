<!-- ExcelImport.svelte -->
<script>
  import { onMount } from "svelte";
  import * as XLSX from "xlsx";
  import { createOrUpdateProduct } from "../../stores/products";
  import Message from "../../message/Message.svelte";
  import mappedProduct from "./importExcel";
  let productDTOs;
  let excelColumnNames = []; // Almacenará los nombres de las columnas del archivo Excel
  let databaseColumnNames = []; // Almacenará los nombres de las columnas de la base de datos
  let columnMapping = {}; // Almacenará el mapeo de columnas
  let jsonData = []; // Mover la declaración de jsonData aquí
  let alertMessage = {
    alertStyle: "alert-success",
    message: "Se importo los datos excel con éxito",
  };

  let showAndHideAlert;
  
  async function handleFileUpload(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 }); // Asignar los datos a jsonData

        // Obtener los nombres de las columnas del archivo Excel
        excelColumnNames = jsonData[0];

        console.log("Datos importados desde el archivo Excel:", jsonData);
      };
      reader.readAsArrayBuffer(file);
    }
  }

  async function fetchDataFromAPI() {
    // Hacer la solicitud GET a la API para obtener los datos de las columnas
    const apiUrl = "http://54.175.227.120:8080/products/productoColumn";

    try {
      const response = await fetch(apiUrl);
      if (response.ok) {
        const data = await response.json();
        // Almacenar los nombres de las columnas de la base de datos
        databaseColumnNames = data;
        console.log("Datos obtenidos desde la API:", data);
        data.push("Sin Datos")
      } else {
        console.error("Error en la llamada a la API:", response.statusText);
      }
    } catch (error) {
      console.error("Error en la llamada a la API:", error);
    }
  }

  function handleSubmit() {
    // Aquí puedes acceder a `columnMapping` para obtener cómo el usuario mapeó las columnas
    console.log("Mapeo de columnas:", columnMapping);

    // Llamar a la función para crear el JSON mapeado
    createMappedJSON();

    // Realizar cualquier otro procesamiento necesario con los datos
  }

  async function createMappedJSON() {
    const mappedData = [];

    // Recorre las filas de datos de la tabla de Excel (omitimos la primera fila que contiene los nombres de las columnas)
    for (let i = 1; i < jsonData.length; i++) {
      const row = jsonData[i];
      const mappedRow = {};

      // Recorre las columnas de Excel y asigna los valores a las columnas de la base de datos correspondientes según el mapeo
      for (let j = 0; j < row.length; j++) {
        const excelColumnName = excelColumnNames[j];
        const dbColumnName = columnMapping[j]; // Obtenemos el nombre de la columna de la base de datos

        // Asignamos el valor de la columna de Excel a la columna de la base de datos correspondiente
        mappedRow[dbColumnName] = row[j];
      }

      mappedData.push(mappedRow);
    }

    // `mappedData` ahora contiene los datos mapeados en el formato deseado
    console.log("Datos mapeados:", mappedData);
    const mp =async ()=>{
      return await mappedProduct(mappedData);
      
      
    }
    productDTOs = await mp();
     
    const returnExcel = await createOrUpdateProduct(
      "http://54.175.227.120:8080/products/importExcel",
      "POST",
      productDTOs,
    );
    
    if(returnExcel){
      showAndHideAlert();
      console.log(returnExcel);
    }else{
      console.log("al parecer hubo un error");
    }
    
    // Realiza cualquier otra acción necesaria con `mappedData`
  }

  // Llamar a fetchDataFromAPI cuando se monta el componente para obtener los datos de la API
  onMount(() => {
    fetchDataFromAPI();
  });
</script>

<Message bind:alertMessage bind:showAndHideAlert />
<div class="inputExcel">
  <label for="" class="h3">Seleccione un archivo excel</label>
  <input
    class="form-control"
    type="file"
    accept=".xlsx"
    on:change={handleFileUpload}
  />
</div>
<div class="formExcel">
  {#if excelColumnNames.length > 0}
    <form class="form-control" on:submit|preventDefault={handleSubmit}>
      <h2>Seleccionar columnas</h2>
      <div class="">
        {#each excelColumnNames as excelColumnName, i}
          <div>
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label>{excelColumnName}:</label>
            <select class="form-control" bind:value={columnMapping[i]}>
              {#each databaseColumnNames as dbColumnName}
                <option value={dbColumnName}>{dbColumnName}</option>
              {/each}
            </select>
          </div>
        {/each}
      </div>
      <div class="d-flex justify-content-end">
        <button class="btn btn-success" type="submit">Importar</button>
      </div>
    </form>
  {/if}
</div>

<style>
  .formExcel {
    margin-left: 2em;
  }
  .inputExcel {
    margin-left: 2em;
  }
</style>
