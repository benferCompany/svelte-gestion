<script>
    import Overlay from "../../tools/overlay/Overlay.svelte";
    import { categories } from "./categories";
    let visible;
    let category;
    let parentCategory;
    export const editVisible = (cat) => {
        visible = !visible;
        category = cat;
        if (!parentCategory) {
            parentCategory = cat.parentCategory;
        }
    };
</script>

<Overlay bind:visible>
    <div class="content">
        {#if category}
            <form action="">
                <div>
                    <input
                        style="display:none"
                        type="text"
                        name="id"
                        id=""
                        value={category.id}
                    />
                    <label for="">Id</label>
                    <input
                        type="text"
                        name=""
                        id=""
                        class="form-control"
                        value={category.id}
                        disabled
                    />
                </div>
                <div>
                    <label for="">Nombre</label>
                    <input
                        type="text"
                        name=""
                        id=""
                        class="form-control"
                        value={category.name}
                    />
                </div>
                <div>
                    <select
                        bind:value={parentCategory}
                        name="parentCategory"
                        id=""
                        class="form-control"
                    >
                        {#each $categories as cat}
                            {#if cat.name != parentCategory.name}
                                <option value={cat}>{cat.name}</option>
                            {/if}
                        {/each}
                        <option value={parentCategory}>
                            {parentCategory.name}
                        </option>
                    </select>
                </div>

                <div class="buttons">
                    <input type="submit" value="Editar" class="btn btn-info btn-sm me-1">
                    <input type="button" value="Cancelar" class="btn btn-danger btn-sm ms-1">
                </div>
            </form>
        {/if}
    </div>
</Overlay>

<style>
    .content {
        width: 20em;
        background: white;
        padding: 1em;
        box-shadow: 1em 1em 1em rgba(0, 0, 0, 0.2);
        border-radius: 1em;
    }
    .buttons{
        display:flex;
        justify-content:end;
    }
</style>
