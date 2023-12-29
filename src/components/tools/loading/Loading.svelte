<script>

    import Overlay from "../overlay/Overlay.svelte";
    export let loading = false;
</script>
<Overlay visible={loading}>
    <div class="loading">
        <img src="imgs/loading.gif" alt="">
    </div>
</Overlay>
