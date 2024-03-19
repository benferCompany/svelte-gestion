<script>
	import { Router, Link, Route } from "svelte-routing";
	import Nav from "./routes/Nav.svelte";
	import Sales from "./components/sales/Sales.svelte";
	import ImportExcel from "./components/Products/importExcel/ImportExcel.svelte";
	import Buys from "./components/buys/Buys.svelte";
	import Customers from "./components/customers/Customers.svelte";
	import Suppliers from "./components/suppliers/Suppliers.svelte";
	import Products from "./components/products/Products.svelte";
	import Inventary from "./components/inventary/Inventary.svelte";
	import PaymentReceipt from "./components/sales/pay/paymentReceipt/PaymentReceipt.svelte";
	import {booleanPathName} from "./components/tools/pathName/pathName";

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
	<Route path="/excel">
		<ImportExcel />
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
</Router>
