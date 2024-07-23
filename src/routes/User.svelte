<script>
    import { onMount } from "svelte";
    import { readCompanies, selectCompany } from "../components/stores/company";
    import {salesPerson,globalSalePerson} from "./user";
    let companies;
    let compSelect;
    let salePerson
    onMount(async () => {
        salePerson = await salesPerson();
        $globalSalePerson = salePerson;
        companies = await $readCompanies();
    });
    $: {$selectCompany = compSelect
       
    };
</script>

<div class="d-flex justify-content-center bg-secondary text-primary">
    <div style="width:25em;">
        <div class="d-flex">
            {#if salePerson}
            <img class="rounded-circle" style="width:10em;" src={salePerson.img} alt="" />
            <div class="text-center">
               
                    <h5>Bienvenido {salePerson.name}</h5>
                

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
            {/if}
        </div>
    </div>
</div>
