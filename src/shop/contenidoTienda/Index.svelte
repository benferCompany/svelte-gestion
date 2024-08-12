<script>
    import Banner from "./banner/Banner.svelte";
    import Nav from "./nav/Nav.svelte";
</script>
<link rel="stylesheet" href=" https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
<div class="index">
    <div class="nav">
        <Nav />
    </div>
    <div class="body">
        <Banner />
    </div>
</div>

<style>
    .index {
        position: absolute;
        top: 0;
        left: 0;
        margin: 0;
        padding: 0;
        width: 100%;
        background-color: skyblue;
        height: 100%;
    }

    .nav {

    }

    .body {
        margin-top: 50px;
    }
</style>
