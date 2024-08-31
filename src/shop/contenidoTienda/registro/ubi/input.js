import debounce from "lodash/debounce";
const apiKey =
"1L4aTfZ9CSW6TT5YvEjbT77uR8fayQySuGlakI2K9xLHaxGHZWLTJQQJ99AHACYeBjFcSjzbAAAgAZMPseRs"; // Reemplaza con tu clave de API de Azure Maps


export const keyPress = debounce(async (e) => {
    console.log(e.target.value);

    let query = "Argentina Chaco " + e.target.value;
    let response = await fetch(
      `https://atlas.microsoft.com/search/address/json?api-version=1.0&query=${encodeURIComponent(query)}&subscription-key=${apiKey}`,
    );
    let json = await response.json();
    console.log(json.results);
    streets = json.results;
  }, 1000);