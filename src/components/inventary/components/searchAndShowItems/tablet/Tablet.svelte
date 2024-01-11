<script>
    // Supongamos que tienes un array de objetos con propiedades comunes
    export let data = [];
    export let thead = [];
    export let handleClickClose;
    export let handleDelete = (e)=>{
        console.log(e)
    }
    // Obtén las claves del primer objeto para usarlas como encabezados
    let keys = Object.keys(data[0]);
   
</script>

{#if data.length > 0}
    <div>
        <table class="table table-striped">
            <thead>
                <tr>
                    {#each thead as th}
                        <th>{th}</th>
                    {/each}
                </tr>
            </thead>

            <tbody>
                {#each data as item}
                    <tr class="align-middle">
                        {#each keys as key}
                            {#if key === "accion"}
                                <td>
                                    <input
                                        on:click={()=>{
                                            handleClickClose(item)
                                        }}
                                        type="button"
                                        value="Editar"
                                        class="btn btn-warning btn-sm"
                                    />
                                    <input
                                        on:click={()=>{
                                            handleDelete(item.id)
                                        }}
                                        type="button"
                                        value="Eliminar"
                                        class="btn btn-danger btn-sm"
                                    />
                                </td>
                            {:else}
                                <td>{item[key]}</td>
                            {/if}
                        {/each}
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
{:else}
    <p>No hay datos disponibles.</p>
{/if}
