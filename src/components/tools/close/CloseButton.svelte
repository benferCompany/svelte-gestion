<script>
    // Propiedad para manejar el evento de cierre
    export let onClose;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click={onClose} class="close">
    <span>&#128473;</span>
</div>

<style>
    .close {
        position: absolute;
        top: 0;
        left: 97%;
        bottom: 0;
        right: 0;
        cursor: pointer;
    }
</style>
