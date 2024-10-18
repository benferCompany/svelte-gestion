<script>
    import { onMount } from "svelte";
    import {
        updateCategoriesInProduct,
        getProduct,
    } from "../../../../stores/products";
    import MessageProductCategory from "./MessageProductCategory.svelte";
    import AddCategory from "./AddCategory.svelte";
    let product;
    let props;
    let propsCateg;
    let categories;
    onMount(async () => {
        const params = new URLSearchParams(window.location.search);
        const id = params.get("id");
        product = await getProduct(id);
        if (product) {
            categories = product.categories;
            props.product = product;
        }
        props.action = async (product) => {
            const response = await updateCategoriesInProduct(product);
            if (response) {
                categories = categories.filter((p) => p.id != response.id);
                props.visible = !props.visible;
                return response;
            }
            props.visible = !props.visible;

            return false;
        };
        propsCateg.action = async (category) => {
            let isCategory = false;
            if (categories && categories.length > 0) {
                
                categories.forEach((c) => {
                    if (c.id === category.id) {
                        isCategory = true;
                    }
                });
                if (!isCategory) {
                    categories = [...categories, category];
                }
            } else {
                categories = [...[], category];
            }
            product.categories = categories;
            const response = await updateCategoriesInProduct(product);
            if (response) {
                return response;
            }
            return false;
        };
    });
</script>

<hr />

<div>
    <button
        on:click={() => {
            propsCateg.visible = true;
        }}
        class="btn btn-info">Agregar categoría</button
    >
</div>
<hr />
<MessageProductCategory bind:props />

<AddCategory bind:propsCateg />
{#if categories}
    <table class="table">
        <thead>
            <tr>
                <th>Id</th>
                <th>Categoría</th>
                <th>Categoría padre</th>
                <th>Acción</th>
            </tr>
        </thead>
        <tbody>
            {#each categories as category}
                <tr>
                    <td>{category.id}</td>
                    <td>{category.name}</td>
                    {#if category.parentCategory}
                        <td>{category.parentCategory.name}</td>
                    {:else}
                        <td>Sin categoría padre</td>
                    {/if}
                    <td>
                        <button
                            on:click={() => {
                                props.product.categories = categories.filter(
                                    (c) => c.id !== category.id,
                                );
                                props.visible = !props.visible;
                            }}
                            class="btn btn-danger btn-sm">Eliminar</button
                        >
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
{/if}
