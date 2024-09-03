<script>
  import Editor from '@tinymce/tinymce-svelte';
  export let content;
  let conf = {
    height: 500,
    menubar: false,
    plugins: [
      'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
      'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
      'insertdatetime', 'media', 'table', 'preview', 'help', 'wordcount'
    ],
    toolbar: 'undo redo | blocks | ' +
      'bold italic forecolor | alignleft aligncenter ' +
      'alignright alignjustify | bullist numlist outdent indent | ' +
      'removeformat | help|image',
  }
  </script>
  <main>
    <h1>Hello Tiny</h1>
    <Editor
      licenseKey='hllg64v9ft8lyovjxlgfuw4rra4ut02m4bxg9ndite1uparp'
      scriptSrc='/tinymce/tinymce.min.js'
      bind:value={content}
      {conf}
    />
  </main>