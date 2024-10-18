<script>
    export let dts;
    export let visible;
    export let input;
    export let headAndKey =[
        {head:"Id", key:"id"},
        {head:"Descripción", key:"description"}
    ]
    let data;
    export let indiceSeleccionado = null;
    export let select;
    function manejarTecla(e) {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            e.preventDefault();
            moverSeleccion(e.key === "ArrowDown" ? 1 : -1);
        } else if (e.key === "Enter" && indiceSeleccionado !== null) {
            // Aquí puedes hacer algo con el elemento seleccionado
            select = data[indiceSeleccionado];
            visible=false;
        }
    }

    function moverSeleccion(direccion) {
        if (indiceSeleccionado === null) {
            indiceSeleccionado = 0;
            return;
        }

        indiceSeleccionado =
            (indiceSeleccionado + direccion + data.length) % data.length;
    }

    $: {
        data = dts? dts.content:null
    }
</script>

<div class="bg-white">
    <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
    <table bind:this={input} on:keydown={manejarTecla} tabindex="0">
        <thead>
            <tr>
                {#each headAndKey as head}
                <th>{head.head}</th>
                {/each}
            </tr>
        </thead>
        <tbody>
            {#if data}
                {#each data as dato, i (dato.id)}
                    <tr on:click={()=>{
                        select = data[i]
                        indiceSeleccionado = i;
                        visible = false;
                    }} class:activo={i === indiceSeleccionado}>
                       {#each headAndKey as key}
                        <td>{dato[key.key]}</td>
                       {/each}
                    </tr>
                {/each}
            {/if}
        </tbody>
    </table>
</div>

<style>
    /* Estilos opcionales según tus necesidades */
    table {
        border-collapse: collapse;
        width: 100%;
    }

    td,
    th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
    }

    tr:nth-child(even) {
        background-color: #f2f2f2;
    }

    tr:hover {
        background-color: #ddd;
    }

    tr.activo {
        background-color: #a0a0a0;
    }
</style>
