<script>
    import { URL } from "../../../components/tools/connections/url";

    let response;
    export let image;
    export let toggleImage;
    const search = async (value) => {
        await new Promise((resolve) => setTimeout(resolve, 300));
        console.log(value.target.value);
        let fetchSearch = await fetch(
            `${URL}/images/name?name=${value.target.value}&page=0&size=5`,
        );
        response = await fetchSearch.json();
    };
</script>

<div class="d-flex justify-content-center">
    <input
        on:input={search}
        type="text"
        class="form-control"
        placeholder="Buscar Imagen"
        style="width:60%"
    />
</div>

<div>
    {#if response}
        <div
            class="row justify-content-center"
            style=" overflow-y:scroll;
            overflow-x: hidden;
            width:100%; 
            height:30vw; 
            overflow:auto;"
            >
            {#each response.content as item}
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div
                    on:click={() => {
                        console.log("es");
                        image = item.value;
                        toggleImage();
                    }}
                    class="align-self-end card m-2 shadow-lg p-3 mb-5 bg-white rounded"
                >
                    <div class="m-1 image-container">
                        <img src={item.value} alt="" />
                    </div>
                    <p class="text-center">{item.name}</p>
                </div>
            {/each}
        </div>
    {/if}
</div>

<style>
    .card {
        width: 18em;
        transition: transform 0.3s ease;
        cursor: pointer;
    }

    .card .image-container {
        width: 100%;
        height: 200px; /* Tamaño fijo de la tarjeta */
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .card img {
        max-width: 100%;
        max-height: 100%;
    }

    .card:hover {
        z-index: 99;
        transform: scale(1.1); /* Ajusta el valor según lo que desees */
        transition: transform 0.3s ease; /* Agrega una transición suave */
    }
</style>
