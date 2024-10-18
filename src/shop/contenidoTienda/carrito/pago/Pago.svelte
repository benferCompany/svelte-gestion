<script>
    import { onMount } from "svelte";
    import { booleanPathName } from "../../../../components/tools/pathName/pathName";
    import { URL } from "../../../../components/tools/connections/url";
    import {createPaymentOder} from "./estadoPago";
    booleanPathName.set(false);
    let id;
    let items;
    const getCompra = async (dts) => {
        let response = await fetch(`${URL}/mercadoPago`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dts),
        });
        let json = await response.json();
        id = json.id;
        items = json.items;       
    };

    export let detalle;
    export let booleanMercadoPago;
    onMount(() => {
        detalle.customer = {email:"benjidfer@gmail.com"};
        const script = document.createElement("script");
        script.src = "https://sdk.mercadopago.com/js/v2";
        script.async = true;
        document.head.appendChild(script);
        
        script.onload = async () => {
            await getCompra(detalle);
            // Inicializa MercadoPago una vez que el script esté cargado
            const mp = new window.MercadoPago(
                "APP_USR-6d8022ac-d6fb-4b26-8292-926d00a24b41",
                {
                    locale: "es-AR", // Cambia el locale según sea necesario
                },
            );
            mp.bricks().create("wallet", "wallet_container", {
                initialization: {
                    preferenceId: id,
                },
            });
        };
    });

    const getToastMessage=()=>{
        if(Android){
            Android.getToastMessage("Se guardo la orden de compra.");
        }
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
    on:click={async () => {
        booleanMercadoPago = false;
        const paymentOrder = await createPaymentOder({id,items})  
        if(paymentOrder){
            getToastMessage();
        }   
            }}
    id="wallet_container"
></div>
