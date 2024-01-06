<script>
    import Pay from "./components/pay/Pay.svelte"
    import InputSearch from "../searchAndShowProducts/inputSearch/InputSearch.svelte";
    import { searchProduct } from "../stores/products";
    import BuyInfo from "./components/buyInfo/BuyInfo.svelte";
    import BuyInfoEnd from "./components/buyInfo/BuyInfoEnd.svelte";
    import PayBox from "./components/buyInfo/PayBox.svelte";
    import Card from "./components/card/Card.svelte";
    import { payStore } from "./components/cart";
    import Tablet from "./components/tablet/Tablet.svelte";
    import Suppliers from "./components/suppliers/Suppliers.svelte";
    let debouncedSearch;
    //Este variable "desc" es solamente para que no me genere error
    //ya que estoy usando el mismo componente input desde searchAndShowProducts
    let desc;
</script>

<div>
    {#if $payStore}
        <Pay />
    {/if}
    <Suppliers/>
    <hr />
    <InputSearch  bind:desc {debouncedSearch}/>
		<hr />
    <div class="d-flex">
        <Card {searchProduct} bind:debouncedSearch={debouncedSearch} />
        <div style="width:50%; margin-left:auto">
            <BuyInfo/>
            <Tablet />
            <BuyInfoEnd/>
            <div class="d-flex justify-content-end">
                <PayBox />
            </div>
        </div>
    </div>
</div>
