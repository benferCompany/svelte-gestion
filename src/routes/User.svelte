<script>
    import { onMount } from "svelte";
    import { readCompanies, selectCompany } from "../components/stores/company";
    let companies;
    let compSelect;
    onMount(async () => {
        companies = await $readCompanies();
    });
    $: $selectCompany = compSelect;
</script>

<div class="d-flex justify-content-center bg-secondary text-primary">
    <div style="width:25em;">
        <div class="d-flex">
            <img style="width:10em;" src="/imgs/usuario.webp" alt="" />
            <div class="text-center">
                <h5>Usuario: Benjamín</h5>
                <label for="">Seleccionar almacen:</label>
                {#if companies}
                    <select
                        bind:value={compSelect}
                        class="form-control"
                        name=""
                        id=""
                    >
                        {#each companies as company}
                            <option value={company}>{company.name}</option>
                        {/each}
                    </select>
                {/if}
            </div>
        </div>
    </div>
</div>
