<script>
    import { InputBuilder } from "./inputs";
    //variables
    export let selectValue;
    
    // Uso del Builder
    const builder = new InputBuilder();
    const input = builder
        .setClass("form-control")
        .setName("")
        .setStyle("background:red")
        .setValue(123)
        .setType("select")
        .build();

   
</script>

{#if input.type == "select"}
    <select bind:value={selectValue} class={input.class} style={input.style} name={input.name} id="">
        {#if Array.isArray(input.value)}
            {#each input.value as item}
                <option value="">{item}</option>
            {/each}
        {:else}
            <option value="">{input.value}</option>
        {/if}
    </select>
{/if}
