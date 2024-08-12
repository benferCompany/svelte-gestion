<script>
    import Siema from "siema";
    import { onMount } from "svelte";

    let siema;

    onMount(()=>{
        siema = new Siema({
            duration:1000,
            loop:true
        })

        loop();
    })

    function loop(){
        setInterval(()=>{
            siema.prev()
        },3000)
    }
</script>
<div class="contenedor">
    <div class="siema">
        <slot></slot>
    </div>
</div>

<style>
</style>