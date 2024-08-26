<script>
    import * as atlas from "azure-maps-control";

    let latitud = 0;
    let longitud = 0;
    let map;
    let marker;
    let booleanMap = false;
    export let positionMarket = {lon: 0, lat: 0};
    const apiKey =
        "1L4aTfZ9CSW6TT5YvEjbT77uR8fayQySuGlakI2K9xLHaxGHZWLTJQQJ99AHACYeBjFcSjzbAAAgAZMPseRs"; // Reemplaza con tu clave de API de Azure Maps

    export function getMap() {
        document.querySelector("#myMap").classList.remove("d-none");
        //Initialize a map instance.
        map = new atlas.Map("myMap", {
            view: "Auto",
            position: [longitud, latitud],
            zoom: 0,
            //Add authentication details for connecting to Azure Maps.
            authOptions: {
                authType: "subscriptionKey",
                subscriptionKey: apiKey,
            },
        });
        booleanMap = true;
        positionMarket = {lon: longitud, lat: latitud};
        //Wait until the map resources are ready.
        //Create a draggable HTML marker.
    }

    export const cambioDeLugar = (lat, lon) => {
        latitud = lat;
        longitud = lon;
        map.setCamera({
            center: [lon, lat],
            zoom: 17,
        });
        crearMarcador(lon, lat);
    };

    const crearMarcador = (lon, lat) => {
        map.markers.remove(marker);
        marker = new atlas.HtmlMarker({
            draggable: true,

            //Tip: add "pointer-events:none" as a style on the html content to disable the default drag behavior in MS Edge which will display an unwanted icon.
            htmlContent:
                '<img style="width:3em;" src="/imgs/pointer.png" alt="pushpin" style="pointer-events: none;" />',

            position: [lon, lat],
            pixelOffset: [5, -15],
        });
        positionMarket = marker.getOptions().position;
        var output = document.getElementById("output");

        //Add a drag event to get the position of the marker. Markers support drag, dragstart and dragend events.
        map.events.add("drag", marker, function () {
            var pos = marker.getOptions().position;
            positionMarket = {lon:pos[0], lat:pos[1]};
            //Round longitude,latitude values to 5 decimal places.
            output.innerText =
                Math.round(pos[0] * 100000) / 100000 +
                ", " +
                Math.round(pos[1] * 100000) / 100000;
        });

        //Add the marker to the map.
        map.markers.add(marker);
    };
    export let callback =()=>{

    }
    const handleMap = () => {
        booleanMap = false;
        document.querySelector("#myMap").classList.add("d-none");
        callback();
    };
</script>

<link
    href="https://atlas.microsoft.com/sdk/javascript/mapcontrol/3/atlas.min.css"
    rel="stylesheet"
/>

<div
    id="myMap"
    style="position:relative;width:100%;min-width:290px;height:150vw;"
></div>
{#if booleanMap}
    <div
        class="div-button"
    >
        <input
            on:click={() => {
                handleMap();
            }}
            type="button"
            value="Finalizar"
        />
    </div>
{/if}

<style>
    .div-button {
        width: 100%;
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 90%;
        left: 0;
        display:flex;
        flex-direction: column;
        justify-content: center;
    }

</style>
