<script>
    import { Link } from "svelte-routing";
    import User from "./User.svelte";
   
    let classLink = "btn btn-primary text-decoration-none text-white";
</script>
<User/>
<nav>
    <ul
        class="d-flex ul justify-content-around list-unstyled bg-primary p-2 shadow rounded"
    >
        <li><Link to="/ventas" class={classLink}>Vender</Link></li>
        <li><Link to="/products" class={classLink}>Productos</Link></li>
        <li><Link to="/buys" class={classLink}>Compras</Link></li>
        <li><Link to="/customers" class={classLink}>Clientes</Link></li>
        <li><Link to="/suppliers" class={classLink}>Proveedores</Link></li>
        <li><Link to="/inventary" class={classLink}>Inventario</Link></li>
        <li><Link to="/saleOff" class={classLink}>Gastos/Egresos</Link></li>
        <li><Link to="/salesActivity" class={classLink}>Ventas</Link></li>
    </ul>
</nav>

<style>
</style>
