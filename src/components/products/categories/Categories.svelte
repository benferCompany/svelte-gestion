<script>
    import { onMount } from "svelte";
    import { getCategories } from "./categories";
    
    let categories;
    onMount(async () => {
        categories = await getCategories();
        console.log(categories);
       
    });
    const handleEdit =async (category)=>{
        console.log(category);
    }
   
</script>

<hr />
<div>
    <input type="button" value="Crear Categoria" class="btn btn-info" />
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
                <th>Acción</th>
            </tr>
        </thead>

        <tbody>
            {#if categories}
                {#each categories as cat}
                    <tr>
                        <td>{cat.id}</td>
                        <td>{cat.name}</td>
                        <td>
                        <input on:click={()=>{handleEdit(cat)}} type="button" value="Editar" class="btn btn-warning btn-sm">
                        </td>
                    </tr>
                {/each}
            {/if}
        </tbody>
    </table>
</div>
