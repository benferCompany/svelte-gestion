<script>
	import { Router, Link, Route } from "svelte-routing";
	import Nav from "./routes/Nav.svelte";
	import Sales from "./components/sales/Sales.svelte";
	import Buys from "./components/buys/Buys.svelte";
	import Customers from "./components/customers/Customers.svelte";
	import Suppliers from "./components/suppliers/Suppliers.svelte";
	import Products from "./components/products/Products.svelte";
	import Inventary from "./components/inventary/Inventary.svelte";
	import PaymentReceipt from "./components/sales/pay/paymentReceipt/PaymentReceipt.svelte";
	import {booleanPathName} from "./components/tools/pathName/pathName";
    import SalesActivity from "./components/salesActivity/SalesActivity.svelte";
    import Firebase from "./routes/image/Firebase/Firebase.svelte";
    import ImportExcel from "./components/products/importExcel/ImportExcel.svelte";
    import Input from "./components/acces/inputs/Input.svelte";
    import SaleOff from "./components/saleOff/SaleOff.svelte";

	let booleanNav;
	$: booleanNav= $booleanPathName;
</script>

<Router>
	{#if booleanNav}
		<Nav />
	{/if}
	<Route path="/ventas">
		<Sales />
	</Route>
	<Route path="/products">
		<Products />
	</Route>
	<Route path="/buys">
		<Buys />
	</Route>
	<Route path="/customers">
		<Customers />
	</Route>
	<Route path="/suppliers">
		<Suppliers />
	</Route>
	<Route path="/inventary">
		<Inventary />
	</Route>
	<Route path="/factura">
		<PaymentReceipt />
	</Route>
	<Route path="/salesActivity">
		<SalesActivity/>
	</Route>
	
	<Route path ="/firebase">
		<Firebase/>
	</Route>
	<Route path = "/importExcel">
		<ImportExcel/>
	</Route>
	<Route path = "/saleOff">
		<SaleOff/>
	</Route>
		
	
</Router>
