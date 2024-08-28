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

    let detalle = {
        id: 1,
        cae: "",
        caeFchVto: null,
        salesPerson: {
            shift: "",
            auth: "",
            comission: 0.0,
            id: 1,
            name: "Vendedor",
            last_name: "Apellido Vendedor",
            address: "Dirección de Vendedor",
            email: "email@vendedor.com",
            phone: "111111",
            mobile_phone: "1111111",
            idPersonal: "11-1111111111-1",
            img: "https://img.freepik.com/fotos-premium/retrato-hombre-negocios-expresion-cara-seria-fondo-estudio-espacio-copia-bengala-persona-corporativa-enfoque-pensamiento-duda-mirada-facial-dilema-o-concentracion_590464-84924.jpg",
        },
        customer: {
            id: 2,
            name: "Benjamín ",
            last_name: "Gomez",
            address: "Leopoldo Lugones 726",
            email: "benjidfer@outlook.com",
            phone: "12233000",
            mobile_phone: "03625635884",
            idPersonal: "35307058",
            fiscal_status: "Consumidor Final",
            current_account: 0.0,
            discount: 0.0,
        },
        company: {
            id: 1,
            name: "Empresa",
            business_name: "Nombre de Empreas",
            cuit: "11-111111111-1",
            address: "Dirección de Empresa",
            fiscal_status: "Monotributo",
            business_activity: "21/08/2024",
        },
        paymentType: "Efectivo",
        fiscalStatus: "Consumidor Final",
        detailProductList: [
            {
                id: 1,
                quality: 5.0,
                productId: 1,
                internalCode: "1pro",
                description: "descripción del producto",
                price: 130.0,
                costPrice: 125.0,
                totalCostPrice: 625.0,
                totalPrice: 650.0,
            },
        ],
        numberInvoice: "F-T 12",
        total: 650.0,
        totalCost: 625.0,
        discount: null,
        date: "27/08/2024 19:18",
    };
    onMount(() => {
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
            const bricksBuilder = mp.bricks();
            console.log(bricksBuilder);
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
