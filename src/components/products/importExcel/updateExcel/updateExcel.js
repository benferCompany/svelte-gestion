import * as XLSX from "xlsx";
import { URL } from "../../../tools/connections/url";

const mappedProduct = async (products) => {
   
    let productDTOs = [];
    for (const object of products) {
        productDTOs.push({
          "idSupplierOne" : object.idSupplierOne,
          "cost_price": object.cost_price,
          "selling_price": object.selling_price
        })
    }

   return productDTOs;
}

export default mappedProduct;

export  async function fetchDataFromAPI() {
    // Hacer la solicitud GET a la API para obtener los datos de las columnas
    const apiUrl = URL+"/products/productoColumn";

    try {
      const response = await fetch(apiUrl);
      if (response.ok) {
        const data = await response.json();
        // Almacenar los nombres de las columnas de la base de datos
        
        
        return data;
      } else {
        console.error("Error en la llamada a la API:", response.statusText);
        return false;
      }
    } catch (error) {
      console.error("Error en la llamada a la API:", error);
      return false;
    }
  }



  export function handleFileUpload(event) {
    const file = event.target.files[0];
    let jsonData;
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        
        jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 }); // Asignar los datos a jsonData

        
        
      };
      reader.readAsArrayBuffer(file);
    }
    return jsonData[0];
  }

  export async function fetchEntity(URL){
    const apiUrl = URL

    try {
      const response = await fetch(apiUrl);
      if (response.ok) {
        const data = await response.json();
        // Almacenar los nombres de las columnas de la base de datos
        
        return data;
      } else {
        console.error("Error en la llamada a la API:", response.statusText);
      }
    } catch (error) {
      console.error("Error en la llamada a la API:", error);
    }
  }
