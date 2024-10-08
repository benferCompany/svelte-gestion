<script>
    import Overlay from "../../tools/overlay/Overlay.svelte";

    export let props = {
        visible: false,
        action: async(category) => {},
        category:null
    };
    let visible = false;
    $:visible = props.visible;
</script>
<Overlay bind:visible>

    <div class="content-div-div">
        <p>¿Esta seguro que quieres elminar esta categoría</p>
        <div class="buttons">
            <input
                on:click = {async()=>{
                    if(props.category){

                        await props.action(props.category);
                    }
                }}
                class="btn btn-info btn-sm me-1"
                type="button"
                value="Confirmar"
            />
            <input
                on:click={()=>{
                    props.visible = !props.visible
                }}
                type="button"
                value="Cancelar"
                class="btn btn-danger btn-sm ms-1"
            />
        </div>
    </div>
</Overlay>

<style>
    .content-div-div {
        background:white;
        width: 20em;
        padding: 1em;
        border-radius: 1em;
        box-shadow: 1em 1em 1em rgba(0, 0, 0, 0.2);
    }
    .buttons {
        display: flex;
        width: 100%;
        justify-content: end;
    }
</style>
