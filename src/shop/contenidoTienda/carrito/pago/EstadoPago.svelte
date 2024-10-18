<script>
    import { onMount } from 'svelte';
    import { booleanPathName } from '../../../../components/tools/pathName/pathName';
    import {getPago} from "./estadoPago";
    import { Link } from 'svelte-routing';
    booleanPathName.set(false);
  
    let paymentData = {};
  
    onMount(() => {
      // Obtener la URL actual (asumiendo que la URL es la del navegador)
      const url = new URL(window.location.href);
  
      // Extraer parámetros de la URL
      const params = new URLSearchParams(url.search);
  
      // Convertir parámetros en un objeto
      paymentData = {
        collection_id: params.get('collection_id'),
        collection_status: params.get('collection_status'),
        payment_id: params.get('payment_id'),
        status: params.get('status'),
        external_reference: params.get('external_reference'),
        payment_type: params.get('payment_type'),
        merchant_order_id: params.get('merchant_order_id'),
        preference_id: params.get('preference_id'),
        site_id: params.get('site_id'),
        processing_mode: params.get('processing_mode'),
        merchant_account_id: params.get('merchant_account_id')
      };
      getPago(paymentData.payment_id);


    });
  </script>
  {#if paymentData}
    {#if paymentData.status ==="approved"}
        <h1 class="text-success">Pago realizado satisfactoriamente</h1>
    {/if}
  {/if}
  <div>
    <Link to="/pago">Volver</Link>
  </div>
  