<script>
    //Importaciones
    import Nav from "../nav/Nav.svelte";
    import Footer from "../footer/Footer.svelte";
    import { booleanPathName } from "../../../components/tools/pathName/pathName";
    import { onMount } from "svelte";
    import { getParentCategories } from "./categoria";
    import { Link } from "svelte-routing";
    let body;
    booleanPathName.set(false);
    let parentCategories;
    onMount(async () => {
        parentCategories = await getParentCategories();
        console.log(parentCategories);
    });
</script>

<div bind:this={body} class="body">
    <Nav />
    <div class="content">
        <div>
            {#if parentCategories}
                {#each parentCategories as category}
                    <div>
                        <Link style="text-decoration:none; color:white; font-size:20px" to="/childCategory?category={category.name}"><p>{category.name}</p></Link>
                    </div>
                {/each}
            {/if}
        </div>
    </div>
    <Footer />
</div>

<style>
    /*NAV 2 ESTILOS*/ /*NAV 2 ESTILOS*/
    .body {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: #09506a;
    }
    .content {
        margin-top: 100px;
        display: flex;
        justify-content: center;
    }
</style>
