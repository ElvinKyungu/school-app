 <script>
 import tynmce from "https://cdn.tiny.cloud/1/fved5qu3i1inqzg2t3fs1052lwo7h8iogs1dkbtyrfbkc9lx/tinymce/6/tinymce.min.js" 
    tinymce.init({
      selector: 'textarea',
      plugins: 'a11ychecker advcode casechange export formatpainter image editimage linkchecker autolink lists checklist media mediaembed pageembed permanentpen powerpaste table advtable tableofcontents tinycomments tinymcespellchecker',
      toolbar: 'a11ycheck addcomment showcomments casechange checklist code export formatpainter image editimage pageembed permanentpen table tableofcontents',
      toolbar_mode: 'floating',
      tinycomments_mode: 'embedded',
      tinycomments_author: 'Author name',
    });
  </script>
<template>
    <textarea>
     Welcome to TinyMCE!
  </textarea>
</template>