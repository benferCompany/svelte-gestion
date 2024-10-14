<script>
    import { booleanPathName } from "../../../components/tools/pathName/pathName";
    import MisCompras from "./MisCompras.svelte";
    import Nav from "../nav/Nav.svelte";
    import Footer from "../footer/Footer.svelte";
    booleanPathName.set(false);
</script>

<div class="index background-primary">
    <Nav />
    <div style="margin-top:100px;">
        <MisCompras />
    </div>
    <Footer />
</div>

<style>
    .index {
        width:100%;
        padding:0;
        margin:0;
        position: absolute;
        top:0;
        left:0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
</style>
