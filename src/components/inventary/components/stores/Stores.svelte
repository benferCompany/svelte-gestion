<script>
    import { URL } from "../../../tools/connections/url";
    import Edit from "../editar/Edit.svelte";
    import SearchAndShowItems from "../searchAndShowItems/SearchAndShowItems.svelte";
    import { searchByText, convertObject, handleSubmit } from "./stores";

    let handleClickClose;
    let thead = [
        "id",
        "Nombre",
        "Nombre de compañia",
        "Cuit",
        "Dirección",
        "Fecha",
        "Acción",
    ];

    let data = [];
    let page = 0;
    const handleChange = async (text) => {
        data = await searchByText(
            { name: text },
            `${URL}/company/name?page=${page}&size=5`,
        );

        for (var i = 0; i < data.content.length; i++) {
            data.content[i].accion = true;
        }
        data.content = data.content.map((objeto) => {
            const { stores, ...resto } = objeto;
            return resto;
        });
        data = data.content;
    };

    

    
</script>

<h1>Depositos</h1>
<hr />
<div>
    <input type="button" value="Crear deposito" class="btn btn-secondary" />
</div>
<hr />
<Edit {convertObject} {handleSubmit} bind:handleClickClose />
<SearchAndShowItems {thead} {data} {handleChange} {handleClickClose} />
