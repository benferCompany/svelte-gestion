<script>
    import {locationProducts} from "../../nav/search";
    let page = 0;
    let size = $locationProducts.size;
    
    export let filterProductsByCategory;
    
    try {
        $locationProducts.products.totalElements;
    } catch (error) {
        $locationProducts.products = { totalElements: 0 };
    }
    const handleCount = async (e) => {
        if (e.target.innerHTML == "Atras" && page > 0 && $locationProducts.desc) {
            page -= 1;
            await filterProductsByCategory($locationProducts.category,$locationProducts.desc, page,size);
            window.scrollTo({
            top: 0,
            behavior: "smooth", // Hace que el desplazamiento sea suave
        });
        } else if (
            e.target.innerHTML == "Adelante" &&
            $locationProducts.desc &&
            page < ($locationProducts.products.totalPages - 1).toFixed(0)
            
        ) {
            page += 1;
            await filterProductsByCategory($locationProducts.category,$locationProducts.desc, page,size);
            window.scrollTo({
            top: 0,
            behavior: "smooth", // Hace que el desplazamiento sea suave
        });
        }
       
    };
</script>

<div class="d-flex">
    <button on:click={handleCount} class="me-1 rounded">Atras</button>
    <button disabled class="me-1 rounded">{page + 1}</button>

    {#if $locationProducts.products.totalPages}
        <button disabled on:click={handleCount} class="rounded me-1">De</button>
        <button disabled class="me-1 rounded"
            >{$locationProducts.products.totalPages.toFixed(0)}</button
        >
    {/if}
    <button on:click={handleCount} class="rounded">Adelante</button>
</div>

<style>
</style>
