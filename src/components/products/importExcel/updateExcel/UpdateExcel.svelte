<!-- ExcelImport.svelte -->
<script>
  import { onMount } from "svelte";
  import * as XLSX from "xlsx";
  import { createOrUpdateProduct } from "../../../stores/products";
  import Message from "../../../message/Message.svelte";
  import mappedProduct, { fetchDataFromAPI, fetchEntity } from "./updateExcel";
    import { URL } from "../../../tools/connections/url";

  let excelColumnNames = []; // Almacenará los nombres de las columnas del archivo Excel
  let databaseColumnNames = []; // Almacenará los nombres de las columnas de la base de datos
  let jsonData = []; // Mover la declaración de jsonData aquí
  let booleanProgress = false;
  let alertMessage = {
    alertStyle: "alert-success",
    message: "Se importo los datos excel con éxito",
  };
  let productDTOs = [];
  let columns = [
    {
      name: "idSupplierOne",
      selectedColumn: "",
    },
    {
      name: "cost_price",
      selectedColumn: "",
    },
    {
      name: "selling_price",
      selectedColumn: "",
    },
  ];
  let index = 1;
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
      };
      reader.readAsArrayBuffer(file);
    }
  }

  function handleSubmit() {
    // Llamar a la función para crear el JSON mapeado
    createMappedJSON();

    // Realizar cualquier otro procesamiento necesario con los datos
  }

  async function createMappedJSON() {
    let objeto = [];

    for (const [i, excelColumn] of jsonData[0].entries()) {
      for (const column of columns) {
        if (column.selectedColumn == excelColumn) {
          objeto.push({
            columnName: column.name,
            index: i,
          });
        }
      }
      
    }
    for (let data of jsonData) {
      let obj = {};
      if (objeto.length > 0) {
        for (const column of objeto) {
          obj[column.columnName] = data[column.index];
        }
        if (Object.keys(obj).length > 0) {
          productDTOs.push(obj);
        }
        console.log(objeto);
      }
    }
    // `mappedData` ahora contiene los datos mapeados en el formato deseado
    const mp = async () => {
      return await mappedProduct(productDTOs);
    };

    productDTOs = await mp();
    let returnExcel;
    for (const [i, product] of productDTOs.entries()) {
      booleanProgress = true;
      returnExcel = await createOrUpdateProduct(
        URL+"/products/updatePrice",
        "POST",
        product,
      );
      index = i;
      if (i == productDTOs.length - 1) {
        showAndHideAlert();
        console.log(returnExcel);
      }
    }

    // Realiza cualquier otra acción necesaria con `mappedData`
  }

  // Llamar a fetchDataFromAPI cuando se monta el componente para obtener los datos de la API
  onMount(async () => {
    databaseColumnNames = await fetchDataFromAPI();
  });
</script>

<Message bind:alertMessage bind:showAndHideAlert />
{#if !booleanProgress}
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
          <div>
            <label for="">Id del proveedor</label>
            <select
              class="form-control"
              bind:value={columns[0].selectedColumn}
              name="idSupplierOne"
              id=""
            >
              {#each excelColumnNames as item}
                <option value={item}>{item}</option>
              {/each}
            </select>
          </div>
          <div>
            <label for="">Costo</label>
            <select
              class="form-control"
              bind:value={columns[1].selectedColumn}
              name="cost_price"
              id=""
            >
              {#each excelColumnNames as item}
                <option value={item}>{item}</option>
              {/each}
            </select>
          </div>

          <div>
            <label for="">Precio de venta</label>
            <select
              class="form-control"
              bind:value={columns[2].selectedColumn}
              name="selling_price"
              id=""
            >
              {#each excelColumnNames as item}
                <option value={item}>{item}</option>
              {/each}
            </select>
          </div>
        </div>
        <div class="d-flex justify-content-end">
          <button class="btn btn-success" type="submit">Importar</button>
        </div>
      </form>
    {/if}
  </div>
{:else}
  <div>
    <div>
      <h4 class="text-center">Progreso</h4>
    </div>
    <div>
      <progress
        id="file"
        style={"height:20px;"}
        class="progress w-100 bg-success"
        max={productDTOs.length}
        value={index}>{index}</progress
      >
    </div>
  </div>
{/if}

<style>
  .formExcel {
    margin-left: 2em;
  }
  .inputExcel {
    margin-left: 2em;
  }
</style>
