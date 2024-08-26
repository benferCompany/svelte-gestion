<script>
  import { booleanPathName } from "../../../../components/tools/pathName/pathName";
  import Map from "./Map.svelte";
  import debounce from "lodash/debounce";

  $booleanPathName = false;
  //credenciales apikey
  const apiKey =
    "1L4aTfZ9CSW6TT5YvEjbT77uR8fayQySuGlakI2K9xLHaxGHZWLTJQQJ99AHACYeBjFcSjzbAAAgAZMPseRs"; // Reemplaza con tu clave de API de Azure Maps

  //importación de map
  let getMap;
  let cambioDeLugar;
  let positionMarket;

  //variables locales
  let streets;
  let inputFind;

  const keyPress = debounce(async (e) => {
    console.log(e.target.value);
    let query = "Argentina Chaco " + e.target.value;
    let response = await fetch(
      `https://atlas.microsoft.com/search/address/json?api-version=1.0&query=${encodeURIComponent(query)}&subscription-key=${apiKey}`,
    );
    let json = await response.json();
    console.log(json.results);
    streets = json.results;
  }, 1000);

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
</script>

<div class="body">
  <div style=" display:flex; justify-content:center;">
    <input
      style="width:100%;"
      on:keyup={keyPress}
      type="search"
      name=""
      id=""
      bind:this={inputFind}
    />
  </div>
  <div>
    {#if streets}
      {#each streets as st}
        <div style="border: solid  1px black">
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <p
            on:click={(e) => {
              select(e, st);
            }}
          >
            {st.address.freeformAddress}
          </p>
        </div>
      {/each}
    {/if}
  </div>
  <Map bind:getMap bind:cambioDeLugar bind:positionMarket />
</div>

<style>
  .body{
    width: 100%;
    
  }
</style>