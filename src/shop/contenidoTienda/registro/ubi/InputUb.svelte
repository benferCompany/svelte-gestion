<script>
  import { onMount } from "svelte";
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
  let body;
  export let ubicacion = {ub:null, ubMarcador:null};
  export let callback = () => {
    
    ubicacion.ubMarcador = positionMarket;
    if (inputFind) {
      inputFind.style = styleInput ? styleInput.input : "";
      body.style = "";
      body.children[0].style = "";
    }
  };
  export let styleInput;

  //variables locales
  let streets;
  let inputFind;

  onMount(() => {
    if (inputFind) {
      inputFind.style = styleInput ? styleInput.input : "";
    }
  });
  const keyPress = debounce(async (e) => {
    let query = "Argentina Chaco " + e.target.value;
    let response = await fetch(
      `https://atlas.microsoft.com/search/address/json?api-version=1.0&query=${encodeURIComponent(query)}&subscription-key=${apiKey}`,
    );
    let json = await response.json();
    streets = json.results;
  }, 1000);

  const select = async (e, st) => {
    e.target.parentNode.style = "background:rgba(0,0,0,0.2);";

    if (inputFind) {
      inputFind.value = st.address.freeformAddress;
    }
    getMap();
    let position = st.position;
    cambioDeLugar(position.lat, position.lon);
    ubicacion.ub =st;
    
    await new Promise((resolve) => setTimeout(resolve, 100));
    streets = "";
  };
</script>

<div bind:this={body}>
  <div style=" display:flex; justify-content:center;">
    <!-- svelte-ignore a11y-mouse-events-have-key-events -->
    <input
      class="ipt"
      style="width:100%;"
      on:keyup={keyPress}
      on:focus={(e)=>{
        e.target.style = styleInput.inputHover;
        body.style="position:absolute; top:2em;"
      }}
      type="search"
      name=""
      id=""
      bind:this={inputFind}
      on:mouseover={(e) => {
        e.target.style = styleInput.inputHover;
      }}
      on:mouseout={(e) => {
        e.target.style = styleInput.input;
      }}
      placeholder="Ubicación"
      
    />
  </div>
  <div>
    {#if streets}
      {#each streets as st}
        <div style="border: solid  1px black; ">
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
  <Map bind:callback bind:getMap bind:cambioDeLugar bind:positionMarket />
</div>

<style>
</style>
