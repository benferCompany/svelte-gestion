<script>
	import { Router, Link, Route } from "svelte-routing";
	import Nav from "./routes/Nav.svelte";
	import Sales from "./components/sales/Sales.svelte";
    import Inventary from "./components/inventary/Inventary.svelte";
    import ImportExcel from "./components/inventary/importExcel/ImportExcel.svelte";
	import * as XLSX from "xlsx";
	import Afip from "./components/afip/Afip.svelte"
</script>

<Router>
	<Nav />
	<Route path="/ventas">
			<Sales />
	</Route>
	<Route path="inventary">
		<Inventary/>
	</Route>
	<Route path="/excel">
		<ImportExcel/>
	</Route>
	<Route path="/afip">
		<Afip/>
	</Route>
</Router>
