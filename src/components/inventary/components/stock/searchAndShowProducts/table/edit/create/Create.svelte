<script>
    import { onMount } from "svelte";
    import {
        handleCreate,
        validaData,
        changeCompany,
        readCompanies,
    } from "./create";
    import Loading from "../../../../../../../tools/loading/Loading.svelte";
    import { productsTable } from "../../table";
    import Message from "../../../../../../../message/Message.svelte";
    export let product;
    export let classInputs;
    let companies;
    let loading;
    let alertMessage = {
        alertStyle: "alert-success",
        message: "La tienda se creo con éxito",
    };;
    let showAndHideAlert;
    //Obenter compañias//
    onMount(async () => {
        $changeCompany = await $readCompanies(product);
    });
    /////////////////
    $: companies = $changeCompany;
</script>

<Loading bind:loading />
<Message bind:alertMessage bind:showAndHideAlert/>
<form
    on:submit|preventDefault={async (e) => {
        loading = true;
        await new Promise((resolve) => setTimeout(resolve, 300));

        if (validaData(e, product)) {
            let response = await handleCreate(e);
            if (response) {
                $productsTable.content = $productsTable.content.map((prd) => {
                    if (prd.id == product.id) {
                        prd.stores.push(response);
                    }
                    return prd;
                });

                //Obtener los focos
                let prdGet = await $productsTable.content.filter(
                    (prd) => prd.id == product.id,
                )[0];

                $changeCompany = await $readCompanies(prdGet);
                showAndHideAlert();
            }
        }
        loading = false;
    }}
    class="row container mt-2 text-center"
    action=""
>
    <h5>Crear Stock</h5>
    <div class="col-12">
        <select name="company" id="" class={classInputs}>
            {#if companies}
                {#each companies as company}
                    <option value={JSON.stringify(company)}
                        >{company.name}</option
                    >
                {/each}
            {/if}
        </select>
    </div>
    <input
        type="text"
        value={JSON.stringify(product)}
        name="product"
        class="d-none"
    />
    <div class="col-4">
        <label for="stock">Stock</label>
        <input type="number" name="stock" id="" class={classInputs} required />
    </div>
    <div class="col-4">
        <label for="stock">Stock Min</label>
        <input type="number" name="stock_min" id="" class={classInputs} required />
    </div>
    <div class="col-4">
        <label for="stock">Stock Max</label>
        <input type="number" name="stock_max" id="" class={classInputs} required />
    </div>
    <div class="d-flex justify-content-end">
        <input
            type="submit"
            value="Crear"
            disabled={loading}
            class="btn btn-info btn sm"
        />
    </div>
</form>
