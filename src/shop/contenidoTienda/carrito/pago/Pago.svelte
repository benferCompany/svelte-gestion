<script>
    import { onMount } from "svelte";
    import { booleanPathName } from "../../../../components/tools/pathName/pathName";
    import { URL } from "../../../../components/tools/connections/url";
    booleanPathName.set(false);
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
    };

    export let detalle;
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
                    preferenceId:id,
                },
            });
        };
    });
</script>

<div id="wallet_container"></div>
