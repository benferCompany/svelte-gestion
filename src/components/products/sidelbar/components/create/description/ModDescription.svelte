<script>
  import {
    getDescriptionProduct,
    getProduct,
  } from "../../../../../stores/products";
  import { onMount } from "svelte";
  import TextEdit from "./TextEdit.svelte";
  import { URL } from "../../../../../tools/connections/url";
  import Message from "../../../../../message/Message.svelte";
  import { navigate } from "svelte-routing";
  let product;
  let description;
  let id;
  let volver = false;

  onMount(async () => {
    const params = new URLSearchParams(window.location.search);
    id = params.get("id");
    console.log(id);
    let response = await getDescriptionProduct(id);
    product = await getProduct(id);
    console.log(response);
    if (!response.error) {
      if (!description) {
        description = response;
      }
      if (!content) {
        content = description.content;
      }
    } else {
      if (!description) {
        description = { product, content };
      }
      if (!content) {
        content = "Ingrese algo por favor";
      }
    }
  });

  const handleClick = async (description, content) => {
    description.content = content;
    description.product = product;
    console.log(description);
    const response = await fetch(`${URL}/descriptionProduct`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(description),
    });
    const json = await response.json();
    console.log(json);
    if (json) {
      showAndHideAlert();
      volver = true;
    }
  };

  let content;

  let alertMessage = {
    alertStyle: "alert-success",
    message: "Se cargó la descripción con éxito.",
  };

  let showAndHideAlert;

  const back = () => {
    window.history.back();
  };
</script>

<Message bind:alertMessage bind:showAndHideAlert />
<div class="contenedor" style="">
  <div class="width:40%">
    {#if description}
      <TextEdit bind:content />
    {/if}

    <div style="display:flex;">
      {#if volver}
        <button
          on:click={() => {
            volver = false;
            back();
          }}
          class="btn btn-secondary m-2">Volver</button
        >
      {:else}
        <button
          on:click={async () => {
            await handleClick(description, content);
          }}
          class="btn btn-info m-2">Enviar</button
        >
      {/if}

      <button on:click={back} class="btn btn-danger m-2">Cancelar</button>
    </div>
  </div>

  <div class="vista-previa" style="">
    <h1>Vista previa</h1>
    <div>
      {@html content}
    </div>
  </div>
</div>

<style>
  .contenedor {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .vista-previa div {
    border: solid 1px rgba(0, 0, 0, 0.2);
    width: 375px;
    height: 560px;
    overflow: auto;
  }
</style>
