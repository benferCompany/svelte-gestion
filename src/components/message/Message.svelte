<script>
    import { fade } from 'svelte/transition';

    export let alertMessage = {
        alertStyle: "alert-warning",
        message: "El producto se eliminó con éxito",
    };

    let showAlert = false;

    export const showAndHideAlert=()=> {
        showAlert = true;
        setTimeout(() => {
            showAlert = false;
        }, 2000);
    }
</script>

{#if showAlert}
    <div
        class="alert {alertMessage.alertStyle}"
        role="alert"
        in:fade
        out:fade
        on:outfadeend={() => showAlert = false}
        style="opacity: 1;"
    >
        <p>{alertMessage.message}</p>
    </div>
{/if}

<style>
    div {
        z-index: 99;
        position: fixed;
        bottom: 0;
        left: 30%;
        right: 30%;
        padding-bottom: 0;
        opacity: 0;
    }

    p {
        font-size: 20px;
    }
</style>
