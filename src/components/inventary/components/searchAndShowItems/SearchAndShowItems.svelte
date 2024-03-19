<script>
    import InputSearch from "../searchAndShowItems/inputSearch/InputSearch.svelte";
    import Tablet from "../searchAndShowItems/tablet/Tablet.svelte";
    export let handleChange;
    export let thead;
    export let data = [];
    export let handleDelete;
    export let handleClickClose;
    
</script>

<InputSearch {handleClickClose} bind:data {handleChange} />
{#await data}
    <p>Cargando</p>
{:then d}
    {#if d.length > 0}
        <Tablet bind:handleDelete {thead} data={d} />
    {:else}
        <p>Sin resultados...</p>
    {/if}
{/await}
