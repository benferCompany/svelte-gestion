<script>
    import {URL} from "../tools/connections/url";
    import { onMount } from "svelte";
    let salesPerson = {
        id: 1,
        name: "Vendedor",
        last_name: "Apellido Vendedor",
        address: "Dirección de Vendedor",
        email: "email@vendedor.com",
        phone: "111111",
        mobile_phone: "1111111",
        shift: "",
        auth: "",
        commission: 0.0,
        img: "https://img.freepik.com/fotos-premium/retrato-hombre-negocios-expresion-cara-seria-fondo-estudio-espacio-copia-bengala-persona-corporativa-enfoque-pensamiento-duda-mirada-facial-dilema-o-concentracion_590464-84924.jpg",
        idPersonal: "11-1111111111-1",
    };

    onMount(async()=>{
        let response =await fetch(`${URL}/salePerson`,{
            method:"POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(salesPerson)
            
        })
        let json = await response.json();
    })
</script>
