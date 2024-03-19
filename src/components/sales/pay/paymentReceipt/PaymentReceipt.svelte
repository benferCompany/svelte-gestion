<script>
  import { salePdf } from "../pay";
  import { booleanPathName } from "../../../tools/pathName/pathName";
  import { onMount } from "svelte";
  $booleanPathName = false;
  console.log($salePdf);
  window.addEventListener("popstate", () => {
    $booleanPathName = true;
  });
  let tipoFiscal =""
  onMount(async() => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    window.print();
  });

  import numeros from "numeros_a_palabras";

  numeros.numero2word().Config._setSingular("PESO");
  numeros.numero2word().Config._setPlural("PESOS");
  numeros.numero2word().Config._setCentsSingular("CENTAVO");
  numeros.numero2word().Config._setCentsPlural("CENTAVOS");
$:{
  if($salePdf.TipoFiscal == "Responsable Inscripto"){
    tipoFiscal = "A";
  }else{
    tipoFiscal = "B";
  }
}
</script>

<div class="d-flex">
  <div class="type card border-black">
    <h1>{tipoFiscal}</h1>
  </div>
  <div style="width:50%;" class="card border-black">
    <div class="d-flex justify-content-center">
      <img
        style="width:8em;"
        src="https://www.zarla.com/images/zarla-construye-fcil-1x1-2400x2400-20220117-9jfq66hqmqfxrmgw9h6w.png?crop=1:1,smart&width=250&dpr=2"
        alt=""
      />
    </div>
    <h5 class="text-center">Electro Benfer</h5>
  </div>
  <div style="width:50%;" class="card border-black">
    <div class="d-flex">
      <div style="margin-left:2em;">
        <h3>Factura</h3>
        <h6>Nro. Comprobante: 0001</h6>
        <h6>Fecha de emisicón: 29-01-2024</h6>
        <div style="display:flex;">
          <p>Responsable Monotributo</p>
          <p style="margin-left:1em;">Cuit: 20-35307058-5</p>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="card border-black">
  <div class="d-flex justify-content-around">
    <p>Dirección: Leopoldo Lugones 726</p>
    <p>Telefono: 362-4230777</p>
    <p>Inivio de actividad: 30/06/2015</p>
  </div>
</div>

<!----Datos del cliente---->
<div class="row">
  <div class="col-8 d-flex justify-content-between">
    <div class="">
      <p>Cliente: {$salePdf.Nombre}</p>
      <p>Dirección: {$salePdf.Direccion}</p>
    </div>
    <div class="">
      <p>Condición Fiscal: Responsable Inscripto</p>
      <p>Cuit: 20-3003083-5</p>
    </div>
  </div>
  <div class="col-4 text-end">
    <p>Condición de pago: Efectivo</p>
  </div>
</div>
<table class="table">
  <thead>
    <tr>
      <th>Codigo</th>
      <th>Descripción</th>
      <th>Cantidad</th>
      <th>Precio Unit.</th>
      <th>Total</th>
    </tr>
  </thead>
  <tbody>
    {#each $salePdf.Productos as producto }
      
    <tr>
      <td>{producto.id}</td>
      <td>{producto.product}</td>
      <td>{producto.count}</td>
      <td>{producto.pvp}</td>
      <td>{producto.subTotal}</td>
    </tr>
    {/each}
  </tbody>
</table>

<div class="footer">
  <hr class="bg-black" />
  <div class="d-flex justify-content-end">
    <div class="w-25">
      <table class="table table-borderless">
        <tbody class="text-end">
          <tr>
            <td>Subtotal:</td>
            <td>{$salePdf.total}</td>
          </tr>
          <tr>
            <td>Total:</td>
            <td>{$salePdf.total}</td>
          </tr>
        </tbody>
      </table>
      <hr />
    </div>
  </div>
  <hr />
  <div class="d-flex">
    <p>Son:</p>
    <p class="ms-2">
      {numeros
        .numero2word($salePdf.total)
        .toString()
        .toLowerCase()
        .charAt(0)
        .toUpperCase() +
        numeros.numero2word($salePdf.total).toString().toLowerCase().slice(1)}
    </p>
  </div>
  <hr />
  <div class="row">
    <div class="col-5">
      <img style="width:25%;" src="/imgs/logoafip.webp" alt="" />
      <strong>Comprobante autorizado</strong>
    </div>
    <div class="col-2">
      <strong>Pag 1/1</strong>
    </div>
    <div class="col-5">
      <div>
        <strong>CAE N°</strong>
      </div>
      <div>
        <strong>Fecha de Vto. de CAE:</strong>
      </div>
    </div>
  </div>
</div>

<style>
  p {
    margin: 0;
    padding: 0;
  }
  /* Puedes agregar estilos adicionales para el contenido del PDF aquí */
  .type {
    text-align: center;
    position: absolute;
    top: 2.2em;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 30;
    width: 3em;
  }
  @page {
    margin: 0;
  }

  th {
    background: rgb(121, 117, 117);
    color: white;
  }
  .footer{
    position:fixed;
    bottom: 10px;
  }
</style>
