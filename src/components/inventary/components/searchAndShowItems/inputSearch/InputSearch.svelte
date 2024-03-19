<script>
   export let handleChange;
   export let data =[];
   export let handleClickClose
</script>

<div>
    <div class="parentInput d-flex">
        <p>&#128269;</p>
        <input
            on:input={async(e) => {
                
              data= await handleChange(e.target.value,{handleClickClose})
               
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
