<script>
    // Propiedad para controlar la visibilidad del overlay
    export let visible = false;
</script>

{#if visible}
    <div class="overlay">
        <!-- Contenido que se muestra encima del overlay -->
        <slot></slot>
    </div>
{/if}

<style>
    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.6); /* Color oscuro semi-transparente */
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10;
    }
</style>
