<script>
    import SelectByText from "./SelectByText.svelte";
    import Overlay from "../overlay/Overlay.svelte";
    import { searchProduct } from "../../stores/products";
    import { URL } from "../connections/url";
    import {clickOutside} from "../clickOutSide/clickOutSide";
    export let options = {
        headAndKey: [
            { head: "Id", key: "id" },
            { head: "Descripción", key: "description" },
        ],
        url: `${URL}/products/name?page=0&size=5`,
        keyObject: (select) => {
            return select.description;
        },
        keySearch: "description",
        styleInput: "",
    };

    let data;
    let visible = false;
    export let select = "";
    let input;

    const handleKeyPress = async (e) => {
        let sendObject = {};
        sendObject[options.keySearch] = e.target.value;
        await new Promise((resolve) => setTimeout(resolve, 300));
        data = await searchProduct(options.url, sendObject);
    };
    let indiceSeleccionado;
    const selectInput = () => {
        visible = true;
    };
</script>

<div>
    <select
        style={options.styleInput}
        on:keydown={selectInput}
        on:click={selectInput}
        type="text"
        class="form-control"
    >
        {#if select}
            <option disabled value={select} selected
                >{options.keyObject(select)}</option
            >
        {/if}
    </select>
</div>
<Overlay {visible}>
    <div
        use:clickOutside
        on:click_outside={()=>{
            visible = false;
        }}
        on:keydown={(e) => {
            if (
                e.key != "ArrowDown" &&
                e.key != "ArrowUp" &&
                e.key != "Enter" &&
                e.key != "Escape"
            ) {
                e.currentTarget.children[0].focus();
                indiceSeleccionado = 0;
                
            }else if(e.key=="Escape"){
                visible = false;
            }
            else {
                input.focus();
            }
        }}
        class="bg-info p-2"
        style="width:50%;"
    >
        <!-- svelte-ignore a11y-autofocus -->
        <input
            autofocus
            on:keyup={handleKeyPress}
            type="text"
            class="form-control"
        />
        <SelectByText
            bind:indiceSeleccionado
            bind:input
            bind:visible
            bind:select
            bind:headAndKey={options.headAndKey}
            dts={data}
        />
    </div>
</Overlay>
