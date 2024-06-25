<script>
    import FirebaseInput from "./FirebaseInput.svelte";
    import FirebaseOutput from "./FirebaseOutput.svelte";

    let value = {
        value: "Motrar fotos",
        class: "btn btn-warning",
        title: "Importar imagen",
        classBgTitle: "bg-warning",
    };
    let boolean = true;
    export let image;
    export let toggleImage;
</script>

<div style="position:sticky; top:0; z-index:100; background:white;">
    <div style="position:absolute; right:10px; top:5px;"><input on:click={()=>{
        toggleImage();
    }} class="btn {value.class} btn-sm" type="button" value="Cerrar"></div>
    <div class="bg-warning text-center">
        <h4 class="p-2 text-white {value.classBgTitle}">{value.title}</h4>
    </div>

    <div class="ms-2">
        <input
            on:click={() => {
                boolean = !boolean;
                if (boolean) {
                    value.value = "Mostrar fotos";
                    (value.class = "btn btn-warning"),
                        (value.title = "Importar imagen"),
                        (value.classBgTitle = "text-warning");
                } else {
                    value.value = "Subir foto";
                    (value.class = "btn btn-success"),
                        (value.title = "Buscar imagen");
                    value.classBgTitle = "bg-success";
                }
            }}
            type="button"
            value={value.value}
            class={value.class}
        />
    </div>
    <hr/>
</div>

{#if boolean}
    <FirebaseInput bind:image {toggleImage} />
{:else}
    <FirebaseOutput bind:image {toggleImage}/>
{/if}
