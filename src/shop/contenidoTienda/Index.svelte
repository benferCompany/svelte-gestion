<script>
    import BannerProducts from "./banner-products/BannerProducts.svelte";
    import Banner from "./banner/Banner.svelte";
    import Footer from "./footer/Footer.svelte";
    import Nav from "./nav/Nav.svelte";
    
</script>

    <div class="index">
        <div class="nav">
            <Nav />
        </div>
        <div class="body">
            <Banner />
            <BannerProducts />
            <Footer />
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
        background-color: #053f3f;
        height: 500px;
    }

    .body {
        margin-top: 50px;
    }
</style>
