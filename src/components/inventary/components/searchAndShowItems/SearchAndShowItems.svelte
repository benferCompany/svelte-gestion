<script>
    import InputSearch from "../searchAndShowItems/inputSearch/InputSearch.svelte";
    import Tablet from "../searchAndShowItems/tablet/Tablet.svelte";
    export let handleChange;
    export let thead;
    export let data = [];
    export let handleClickClose;
</script>

<InputSearch {handleChange} />

{#if data.length > 0}
    <Tablet {handleClickClose} {thead} {data} />
{:else}
    <p>Sin resultados...</p>
{/if}
