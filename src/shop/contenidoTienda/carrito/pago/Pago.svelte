<script>
    import { onMount } from "svelte";
    import { booleanPathName } from "../../../../components/tools/pathName/pathName";
    import { URL } from "../../../../components/tools/connections/url";
    import { createDetails } from "./estadoPago";
    import { carrito } from "../carrito";
    booleanPathName.set(false);
    let Android;
    let id;
    const getCompra = async (dts) => {
        let response = await fetch(`${URL}/mercadoPago`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dts),
        });
        let json = await response.json();
        console.log(json);
        id = json.id;

        dts.idStatePayment = id;
        const createdts = await createDetails(dts);
        console.log(dts);
        if (Android && createdts) {
            Android.getToastMessage("Se guardo la compra.");
        }
        $carrito = [];
        localStorage.setItem("carrito", []);
    };

    export let detalle;
    export let booleanMercadoPago;
    onMount(() => {
        console.log(detalle);
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
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
    on:click={async () => {
        booleanMercadoPago = false;
    }}
    id="wallet_container"
></div>
