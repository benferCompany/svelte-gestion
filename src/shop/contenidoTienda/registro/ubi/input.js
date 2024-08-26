import debounce from "lodash/debounce";
 const apiKey =
    "1L4aTfZ9CSW6TT5YvEjbT77uR8fayQySuGlakI2K9xLHaxGHZWLTJQQJ99AHACYeBjFcSjzbAAAgAZMPseRs"; // Reemplaza con tu clave de API de Azure Maps


export const keyPress = async (e) => {
    console.log(e.target.value);
    let query = "Argentina Chaco " + e.target.value;
    let response = await fetch(
      `https://atlas.microsoft.com/search/address/json?api-version=1.0&query=${encodeURIComponent(query)}&subscription-key=${apiKey}`,
    );
    let json = await response.json();
    console.log(json.results);
    streets = json.results;
  };

  const select = async (e, st) => {
    e.target.parentNode.style = "background:rgba(0,0,0,0.2);";

    await new Promise((resolve) => setTimeout(resolve, 100));
    if (inputFind) {
      console.log(st.address.freeformAddress);
      inputFind.value = st.address.freeformAddress;
    }
    getMap();
    cambioDeLugar(st.position.lat, st.position.lon);
    streets = "";
  };