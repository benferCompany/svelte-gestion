<script>
    import Siema from "siema";
    import { onMount } from "svelte";

    let siema;
    let siemaSelector;
    export let duration = { duration: 0, durationSiema: 0, direction:"next" };

    onMount(() => {
        siema = new Siema({
            selector: siemaSelector,
            loop: true, // Puedes configurar opciones de Siema aquí
            duration: duration.durationSiema, // Duración de la transición en milisegundos
            perPage: 1, // Número de elementos visibles por página
        });
        loop();
        return () => siema.destroy();
    });

    function loop() {
        setInterval(() => {
            if (duration.direction == "prev") {
                siema.prev();
            }else{
                siema.next();
            }
        }, duration.duration);
    }
</script>

<div class="contenedor">
    <div bind:this={siemaSelector} class="siema">
        <slot></slot>
    </div>
</div>

<style>
</style>
