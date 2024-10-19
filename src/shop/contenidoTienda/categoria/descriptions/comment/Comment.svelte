<script>
    import { createComment } from "./comment";
    let comment;
    export let props = {
        visible: false,
        returnComment: {},
    };

    const handleComment = async (comment) => {
        props.returnComment = await createComment(comment);
        props.visible = false;
    };
</script>

<div class="content">
    <div class="center-elements">
        <textarea maxlength="255" bind:value={comment} placeholder="Tienes un maximo de 255 caracter para redactar tu comentario."></textarea>
    </div>
    <div class="center-elements">
        <input
            on:click={() => {
                handleComment(comment);
            }}
            type="button"
            value="Comentar"
            class="background-primary"
        />
        <input
            on:click={() => {
                props.visible = false;
            }}
            type="button"
            value="Cancelar"
            class="background-quaternary"
        />
    </div>
</div>

<style>
    .center-elements{
        display: flex;
        justify-content: center;
    }
    .content {
        width: 100%;
    }
    .content textarea {
        width: 90%;
        height: 250px;
    }
    .content input[type="button"] {
        margin: 0.5em;
        font-size: 1em;
        font-weight: bold;
        color: rgb(236, 232, 232);
        border: none;
        box-shadow: 0 0 0 rgba(0, 0, 0, 0.2);
    }
</style>
