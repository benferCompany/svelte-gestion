<script>
    import MessageDelete from "../../../../tools/delete/message/MessageDelete.svelte";

    let objectId;
    let visible = false;
    export let data = [];
    export let thead = [];
    export let handleDelete = (e) => {
       console.log(e);
    };
    let alertMessage;
    let keys = Object.keys(data[0]);
</script>

<MessageDelete
    {objectId}
    {alertMessage}
    bind:objects={data}
    bind:deleteObject={handleDelete}
    bind:visible
/>
{#if data.length > 0}
    <div>
        <table class="table table-striped">
            <thead>
                <tr class="text-center">
                    {#each thead as th}
                        <th>{th}</th>
                    {/each}
                </tr>
            </thead>

            <tbody>
                {#each data as item,i}
                    <tr class="align-middle">
                        {#each keys as key}
                            {#if key !== "accion"}
                                <td class="text-center">{item[key].name}</td>
                            {:else}
                                <td class="text-center">
                                    {#each item[key] as itemAccion}
                                        <input
                                            on:click={() => {
                                                 let object = {};
                                                 console.log(item)
                                                    let itemKeys =
                                                        Object.keys(item);
                                                    itemKeys.forEach((keyI) => {
                                                            object[keyI] =
                                                            data[i][keyI].value;
                                                    });
                                                if(!itemAccion.delete){
                                                    itemAccion.onclick(object);
                                                }else{
                                                    objectId= object.id
                                                    visible =true
                                                    
                                                }
                                            }}
                                            type={itemAccion.type}
                                            value={itemAccion.value}
                                            class={itemAccion.class}
                                        />
                                    {/each}
                                </td>
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
