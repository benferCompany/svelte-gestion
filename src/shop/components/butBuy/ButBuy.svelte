<script>
    let contentImgTitle = "display:flex; margin:10em;";
    let contentImg = "width:100em;";
    let contentTitle = "width:100em;";
    let img = "width:100%";
    window.addEventListener("resize", () => {
        console.log(screen.availWidth);

        if (screen.availWidth < 1025) {
            contentImgTitle = "display:block; width:100%;";
            contentImg = "width:100%; display:flex; justify-content:center;";
            contentTitle = "width:100%; text-align:center;";
            img = "width:50%";
        } else {
            contentImgTitle = "display:flex; margin:10em;";
            contentImg = "";
            contentTitle = "width:100em;";
            img = "width:100%";
        }
    });
</script>

<div style={contentImgTitle}>
    <div style={contentImg}>
        <img
            style={img}
            src="https://cdn-icons-png.flaticon.com/512/2649/2649150.png"
            alt=""
        />
    </div>
    <div style={contentTitle}>
        <h1>Como comprar</h1>
        <p class="h2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
            eligendi esse aliquam voluptas, expedita labore quidem atque fuga
            aperiam vel dicta, amet quisquam. Veritatis dolore, officia numquam
            assumenda ab quae.
        </p>
    </div>
</div>

<style>
</style>
