<script>
    import Siema from "siema";
    import { onMount } from "svelte";

    let siema;

    onMount(() => {
        siema = new Siema({
            loop: true, // Puedes configurar opciones de Siema aquí
            duration: 200, // Duración de la transición en milisegundos
            perPage: 1, // Número de elementos visibles por página
        });
        loop()
        return () => siema.destroy();
    });

    function loop() {
        setInterval(() => {
            siema.next();
        }, 3000);
    }
</script>

<div class="contenedor">
    <div class="siema">
        <slot></slot>
    </div>
</div>

<style>
</style>
