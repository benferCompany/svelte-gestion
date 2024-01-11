<script>
   export let handleChange;
</script>

<div>
    <div class="parentInput d-flex">
        <p>&#128269;</p>
        <input
            on:input={(e) => {
                handleChange(e.target.value)
               
            }}
            
            class="rounded form-control ms-2"
            placeholder="Buscar articulos"
            type="text"
        />
    </div>
</div>

<style>
    .parentInput {
        width: 50%;
        margin: 0 auto;
    }
    .parentInput p {
        font-size: 30px;
        margin: 0;
        padding: 0;
    }
</style>
