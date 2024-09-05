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
	import { booleanPathName } from "./components/tools/pathName/pathName";
	import SalesActivity from "./components/salesActivity/SalesActivity.svelte";
	import Firebase from "./routes/image/Firebase/Firebase.svelte";
	import ImportExcel from "./components/products/importExcel/ImportExcel.svelte";
	import SaleOff from "./components/saleOff/SaleOff.svelte";
	import Shop from "./shop/Shop.svelte";
	import Form from "./shop/contenidoTienda/form/Form.svelte";
	import SalesPerson from "./components/salesPerson/SalesPerson.svelte";
	import Carrito from "./shop/contenidoTienda/carrito/Carrito.svelte";
	import Categoria from "./shop/contenidoTienda/categoria/Categoria.svelte";
	import Registro from "./shop/contenidoTienda/registro/Registro.svelte";
	import Pago from "./shop/contenidoTienda/carrito/pago/Pago.svelte";
    import EstadoPago from "./shop/contenidoTienda/carrito/pago/EstadoPago.svelte";
    import Descripcion from "./shop/contenidoTienda/categoria/descriptions/Descripcion.svelte";
    import ModDescription from "./components/products/sidelbar/components/create/description/ModDescription.svelte";
    import Prueba from "./shop/prueba/Prueba.svelte";
	let booleanNav;
	$: booleanNav = $booleanPathName;
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
		<SalesActivity />
	</Route>

	<Route path="/firebase">
		<Firebase />
	</Route>

	<Route path="/importExcel">
		<ImportExcel />
	</Route>

	<Route path="/saleOff">
		<SaleOff />
	</Route>

	<Route path="/">
		<Shop />
	</Route>

	

	<Route path="/login">
		<Form />
	</Route>

	<Route path="/user">
		<Registro />
	</Route>

	<Route path="/categoria">
		<Categoria />
	</Route>

	<Route path="/salesPerson">
		<SalesPerson />
	</Route>
	<Route path="/carrito">
		<Carrito />
	</Route>
	<Route path="/pago">
		<Pago/>
	</Route>
	<Route path="/statePage">
		<EstadoPago/>
	</Route>

	<Route path="/description">
		<Descripcion/>
	</Route>

	<Route path="/modDescription">
		<ModDescription/>
	</Route>

	<Route path="/prueba">
		<Prueba/>
	</Route>
	
</Router>
