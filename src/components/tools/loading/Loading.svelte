<script>

    import Overlay from "../overlay/Overlay.svelte";
    export let loading = false;
</script>
<Overlay visible={loading}>
    <div class="loading">
        <img src="imgs/loading.gif" alt="">
    </div>
</Overlay>

<style>
    .loading{
        width:100%;
    }
    .loading img{
        width: 100%;
    }
</style>
