import { URL } from "../tools/connections/url";

export const deleteCustomer = async (id) => {
  try {
    const response = await fetch(URL + "/customer/" + id, {
      method: "DELETE",
    });

    if (!response.ok) {
      // La solicitud no fue exitosa
      throw new Error(`Error al eliminar el cliente (código ${response.status})`);
    }

    
    return response; // Puedes ajustar esto según la estructura de tu respuesta
  } catch (error) {
    console.error("Error durante la solicitud de eliminación:", error);
    throw error; // Puedes manejar el error de alguna manera o simplemente relanzarlo
  }
};
