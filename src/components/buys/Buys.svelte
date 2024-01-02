<script>
    import Pay from "../sales/pay/Pay.svelte";
    import PayBox from "../sales/saleInfo/PayBox.svelte";
    import SaleInfo from "../sales/saleInfo/SaleInfo.svelte";
    import SaleInfoEnd from "../sales/saleInfo/SaleInfoEnd.svelte";
    import Tablet from "../sales/tablet/Tablet.svelte";
    import InputSearch from "../searchAndShowProducts/inputSearch/InputSearch.svelte";
    import { payStore } from "../stores/cart";
    import { searchProduct } from "../stores/products";
    import Card from "./components/card/Card.svelte";
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
