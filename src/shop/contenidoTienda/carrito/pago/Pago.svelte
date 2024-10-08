<script>
    import { onMount } from "svelte";
    import { booleanPathName } from "../../../../components/tools/pathName/pathName";
    import { URL } from "../../../../components/tools/connections/url";
    booleanPathName.set(false);
    let id;
    const getCompra = async (dts) => {
        let response = await fetch(`${URL}/mercadoPago`,{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(dts)
        });
        let json = await response.json();
        console.log(json);
        id = json.id;
    };

    export let detalle;
    onMount(() => {
        console.log(detalle)
        const script = document.createElement("script");
        script.src = "https://sdk.mercadopago.com/js/v2";
        script.async = true;
        document.head.appendChild(script);

        script.onload = async () => {
            await getCompra(detalle);
            // Inicializa MercadoPago una vez que el script esté cargado
            const mp = new window.MercadoPago(
                "APP_USR-9b776e89-9e92-46f3-b0a2-d24b3cc83f73",
                {
                    locale: "es-AR", // Cambia el locale según sea necesario
                },
            );
            const bricksBuilder = mp.bricks();

            mp.bricks().create("wallet", "wallet_container", {
                initialization: {
                    preferenceId: id,
                },
                customization: {
                    texts: {
                        valueProp: "smart_option",
                    },
                },
            });
        };
    });
</script>

<div id="wallet_container"></div>


