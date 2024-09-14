<script>
    import { changeImputImage, handleImageUpload } from "./firebase";
    //Variables
    let file;
    let fileName;
    let isValidType = false;
    export let image;
    export let toggleImage;
    let message;
    let booleanFinally = false;
    let buttonAttribute = {
        value: "Enviar",
        class: "btn btn-warning",
    };
    let loading = false;
</script>

<div class="d-flex justify-content-center">
    <div class="w-80">
        <div>
            <input
                type="file"
                on:change={(e) => {
                    file = changeImputImage(e);
                    fileName = file.name;
                    if (booleanFinally) {
                        booleanFinally = !booleanFinally;
                        buttonAttribute.class = "btn btn-warning";
                        buttonAttribute.value = "Enviar";
                    }
                }}
                class="form-control"
                accept="image/*"
            />
        </div>
        {#if file}
            <div class="mt-1 text-center">
                <label class="mb-1" for="">Nombre de la imagen</label>
                <input
                    on:input={(e) => {
                        if (e.target) {
                            fileName = e.target.value;
                        }
                    }}
                    class="form-control"
                    type="text"
                    value={file.name}
                />
            </div>
        {/if}
        <div class="d-flex justify-content-end">
            {#if !loading}
                {#if file}
                    <input
                        on:click={async () => {
                            if (!booleanFinally) {
                                loading = true;
                                let response = await handleImageUpload(
                                    file,
                                    fileName,
                                    isValidType,
                                );
                                image = response.entity.value;
                                message = response.message;
                                if (!response.error) {
                                    booleanFinally = !booleanFinally;
                                    if (booleanFinally) {
                                        buttonAttribute.class =
                                            "btn btn-success";
                                        buttonAttribute.value = "Finalizar";
                                    }
                                }
                                loading = false;
                            } else {
                                toggleImage();
                            }
                        }}
                        class={buttonAttribute.class}
                        type="button"
                        value={buttonAttribute.value}
                    />
                {/if}
            {:else}
                <div
                    class="d-flex justify-content-end"
                    style="width:100%; height:50px;"
                >
                    <img
                        style="max-width:100%; max-height:100%"
                        src="imgs/loading.gif"
                        alt=""
                    />
                </div>
            {/if}
        </div>
    </div>
</div>
{#if message}
    <div class="mt-2">
        <p class="text-warning text-center">{message}</p>
    </div>
    <div>
        <div
            class="d-flex justify-content-center"
            style="width:100%; height:100px;"
        >
            <img style="max-width:100%; max-height:100%;" src={image} alt="" />
        </div>
    </div>
{/if}
