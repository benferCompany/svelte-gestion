<script>
    import { onMount } from "svelte";
    import { getCategories, deleteCategory,categories } from "./categories";
    import CreateCategory from "./CreateCategory.svelte";
    import MessageCategory from "./MessageCategory.svelte";
    import Message from "../../message/Message.svelte";
    import EditCategory from "./EditCategory.svelte";
    let visible;
    
    let props;
    let propsMessage;

    //Props de Message
    let alertMessage = {
        alertStyle: "alert-warning",
        message: "La cateogía se elimino con éxito",
    };

    //Props EditCategory
    let editVisible;
    
    let showAndHideAlert;
    
    
    onMount(async () => {
        categories.set( await getCategories());
        console.log($categories);
        props.action = (category) => {
            categories.set([...$categories, category]);
        };

        propsMessage.action = handleDelete; 
    });


    const handleDelete = async (cat) => {
            let response = await deleteCategory(cat);
            if (response) {
                if (JSON.parse(response.status)) {
                    alertMessage = {
                        alertStyle: "alert-success",
                        message: response.message,
                    };
                    categories.set($categories.filter(p=>p.id!=cat.id));
                } else {
                    alertMessage = {
                        alertStyle: "alert-danger",
                        message: response.message,
                    };
                }
            } else {
                alertMessage = {
                    alertStyle: "alert-warning",
                    message: "Ocurrio un problema inesperado.",
                };
            }
            propsMessage.visible= !propsMessage.visible;
            showAndHideAlert();
        };
</script>

<hr />
<EditCategory bind:editVisible />
<Message bind:alertMessage bind:showAndHideAlert />
<CreateCategory bind:visible bind:props />
<MessageCategory bind:props={propsMessage} />
<div>
    <input
        on:click={() => {
            visible = true;
        }}
        type="button"
        value="Crear Categoría"
        class="btn btn-info"
    />
</div>
<hr />
<div class="d-flex justify-content-center">
    <input
        style="width:50%;"
        type="search"
        placeholder="Buscar categoria"
        class="form-control"
    />
</div>
<div class="d-flex justify-content-center">
    <table style="max-width:80%;" class="table text-center bg-secondary">
        <thead>
            <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Categoría padre</th>
                <th>Acción</th>
            </tr>
        </thead>

        <tbody>
            {#if $categories}
                {#each $categories as cat}
                    <tr>
                        <td>{cat.id}</td>
                        <td>{cat.name}</td>
                        <td>{cat.parentCategory?cat.parentCategory.name:"Sin categoría"}</td>
                        <td>
                            <input
                                on:click={() => {
                                    editVisible(cat);
                                }}
                                type="button"
                                value="Editar"
                                class="btn btn-warning btn-sm"
                            />
                            <input
                                on:click={() => {
                                    propsMessage.visible = true;
                                    propsMessage.category = cat;
                                }}
                                type="button"
                                value="Eliminar"
                                class="btn btn-danger btn-sm"
                            />
                        </td>
                    </tr>
                {/each}
            {/if}
        </tbody>
    </table>
</div>
