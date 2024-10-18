<script>
    import Overlay from "../../../tools/overlay/Overlay.svelte";
    import CloseButton from "../../../tools/close/CloseButton.svelte";
    import Loading from "../../../tools/loading/Loading.svelte";
    import Message from "../../../message/Message.svelte"

    //Atributos de Message
    export let alertMessage;
    export let showAndHideAlert;
    //////////////////////

    let paramData = {};
    let keys;
    let visible = false;
    let loading = false
    export let data = [];
    export let convertObject;
    export let handleClickClose = (e) => {
        paramData = convertObject(e);
        keys = Object.keys(paramData);
        visible = !visible;
    };
    export let handleSubmit = (e) => {
        console.log("falta codigo",e.target);
    };
</script>
<Message {alertMessage} bind:showAndHideAlert />
<Loading bind:loading/>
<Overlay bind:visible>
    {#if keys}
        <div class="edit">
            <div class="header bg-warning">
                <h1 class="text-center">Editar</h1>
                <CloseButton onClose={handleClickClose} />
            </div>
            <form on:submit|preventDefault={async (e)=>{
                
                visible = !visible;
                loading = true;
                let response= await handleSubmit(e)
                response
                data = []
                loading =false;
                showAndHideAlert();
                
                
                
            }}>
                <div class="row container">
                    {#each keys as key (key)}
                        {#if key != "Acción"}
                            <div class={paramData[key][2]}>
                                <label for="">{key}</label>
                                <div>
                                    {#if key == "id"}
                                        <input
                                            disabled
                                            type={paramData[key][3]}
                                            id=""
                                            class="form-control"
                                            value={paramData[key][0]}
                                        />
                                        <input
                                            type={paramData[key][3]}
                                            name={paramData[key][1]}
                                            id=""
                                            class="form-control d-none"
                                            value={paramData[key][0]}
                                        />
                                    {:else}
                                        <input
                                            type={paramData[key][3]}
                                            name={paramData[key][1]}
                                            id=""
                                            class="form-control"
                                            value={paramData[key][0]}
                                        />
                                    {/if}
                                </div>
                            </div>
                        {:else}
                            <div class="d-flex justify-content-end">
                                <div class="w-50 d-flex">
                                    <input
                                        type="submit"
                                        
                                        id=""
                                        class={paramData[key][2]}
                                        value={paramData[key][0]}
                                    />

                                    <input
                                        on:click={handleClickClose}
                                        type="button"
                                        
                                        id=""
                                        class={paramData[key][3]}
                                        value={paramData[key][1]}
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
