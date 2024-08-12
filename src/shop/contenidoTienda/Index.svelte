<script>
    import Nav from "./nav/Nav.svelte";
    import Search from "./search/Search.svelte";
    import Destacados from "./destacados/Destacados.svelte";
    import Slider from "./slider/Slider.svelte";
</script>

<div class="index">
    <Nav />
    <Search />
    <Slider />
    <Destacados/>
</div>

<style>
    .index {
        background: rgb(241, 239, 239);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
</style>
