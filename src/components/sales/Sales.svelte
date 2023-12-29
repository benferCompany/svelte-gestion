<script>
    import SaleInfo from "./saleInfo/SaleInfo.svelte";
    import SaleInfoEnd from "./saleInfo/SaleInfoEnd.svelte";
    import Card from "./card/Card.svelte";
    import PayBox from "./saleInfo/PayBox.svelte";
    import Pay from "./pay/Pay.svelte";
    import Tablet from "./tablet/Tablet.svelte";
    import { payStore } from "../stores/cart";
    import InputSearch from "../searchAndShowProducts/inputSearch/InputSearch.svelte";
    import { searchProduct } from "../stores/products";
    
    let debouncedSearch;
    
    //Este variable "desc" es solamente para que no me genere error
    //ya que estoy usando el mismo componente input desde searchAndShowProducts
    let desc;
</script>

<div>
    {#if $payStore}
        <Pay />
    {/if}
    <InputSearch  bind:desc {debouncedSearch}/>
		<hr />
    <div class="d-flex">
        <Card {searchProduct} bind:debouncedSearch={debouncedSearch} />
        <div style="width:50%; margin-left:auto">
            <SaleInfo />
            <Tablet />
            <SaleInfoEnd/>
            <div class="d-flex justify-content-end">
                <PayBox />
            </div>
        </div>
    </div>
</div>
