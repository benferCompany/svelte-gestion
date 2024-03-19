<script>
    import Overlay from "../../../tools/overlay/Overlay.svelte";
    import CloseButton from "../../../tools/close/CloseButton.svelte";
    import Loading from "../../../tools/loading/Loading.svelte";
    
    export let title = "Create";
    export let data = {}
    let keys = Object.keys(data); 
    export let visible = false;
    let loading = false
    let handleClickClose = (e) => {
        visible = !visible;
    };
    export let handleSubmit = (e) => {
        console.log(e.target);
    };

    

</script>
<Loading bind:loading/>
<Overlay bind:visible>
    {#if keys}
        <div class="edit">
            <div class="header bg-info">
                <h1 class="text-center">{title}</h1>
                <CloseButton onClose={handleClickClose} />
            </div>
            <form on:submit|preventDefault={async (e)=>{
                visible = !visible;
                loading = true;
                handleSubmit(e)
                loading =false;
                
                
                
            }}>
                <div class="row container">
                    {#each keys as key (key)}
                        {#if key != "Acción"}
                            <div class={data[key][1]}>
                                <label for="">{key}</label>
                                <div>
                                        <input
                                            type={data[key][2]}
                                            name={data[key][0]}
                                            id=""
                                            class="form-control"
                                            required
                                        />
                                    
                                </div>
                            </div>
                        {:else}
                            <div class="d-flex justify-content-end">
                                <div class="w-50 d-flex">
                                    <input
                                        type="submit"
                                        
                                        id=""
                                        class={data[key][2]}
                                        value={data[key][0]}
                                    />

                                    <input
                                        on:click={handleClickClose}
                                        type="button"
                                        
                                        id=""
                                        class={data[key][3]}
                                        value={data[key][1]}
                                    />
                                </div>
                            </div>
                        {/if}
                    {/each}
                </div>
            </form>
        </div>
    {/if}
</Overlay>

<style>
    .edit {
        width: 35em;
        height: 30em;
        overflow-y: auto;
        position: absolute;
        z-index: 99;
        background: white;
        left: 25%;
        right: 25%;
        border-radius: 0.5em;
    }
    .header {
        color: white;
        padding: 0.5em;
    }
    form {
        width: 98%;
        margin-left: auto;
        margin-right: auto;
    }
    input {
        width: 100%;
    }
</style>
