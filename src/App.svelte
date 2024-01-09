<script>
	import { Router, Link, Route } from "svelte-routing";
	import Nav from "./routes/Nav.svelte";
	import Sales from "./components/sales/Sales.svelte";
    import Inventary from "./components/inventary/Inventary.svelte";
    import ImportExcel from "./components/inventary/importExcel/ImportExcel.svelte";
	import Buys from "./components/buys/Buys.svelte";	
    import Customers from "./components/customers/Customers.svelte";
    import Suppliers from "./components/suppliers/Suppliers.svelte";
    
</script>

<Router>
	<Nav />
	<Route path="/ventas">
			<Sales />
	</Route>
	<Route path="inventary">
		<Inventary/>
	</Route>
	<Route path="buys">
		<Buys/>
	</Route>
	<Route path="/excel">
		<ImportExcel/>
	</Route>
	<Route path="/customers">
		<Customers/>
	</Route>
	<Route path="/suppliers">
		<Suppliers/>
	</Route>

</Router>
