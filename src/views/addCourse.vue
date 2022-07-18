<script>

import Preloader from '@/components/Preloader.vue'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import Editor from 'quill'
export default {
  methods: {
    Editor () { 
        alert("coucou")
        var quill = new Editor('#editor', {
            theme: 'snow'
        });
        // var toolbarOptions = [
        // ['bold', 'italic', 'underline', 'strike'], // toggled buttons
        // ['blockquote', 'code-block'],

        // [{ 'header': 1 }, { 'header': 2 }], // custom button values
        // [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        // [{ 'script': 'sub'}, { 'script': 'super' }], // superscript/subscript
        // [{ 'indent': '-1'}, { 'indent': '+1' }], // outdent/indent
        // [{ 'direction': 'rtl' }], // text direction

        // [{ 'size': ['small', false, 'large', 'huge'] }], // custom dropdown
        // [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

        // [{ 'color': [] }, { 'background': [] }], // dropdown with defaults from theme
        // [{ 'font': [] }],
        // [{ 'align': [] }],

        // ['clean']// remove formatting button
        // ];

        // var options = {
        //     debug: 'info',
        //     modules: {
        //         toolbar: toolbarOptions
        //     },
        //     placeholder: 'Commenter l\'article',
        //     readOnly: false,
        //     theme: 'snow'
        // };
        // var quill = new Quill('#editor', options);
    },
  },
  created () {
    this.Editor()
  },
  components: {
    Preloader,
    NavBar,
    Footer,
  }
}

</script>
<template>
    <Preloader />
  <main>
    <NavBar />
    <section class="heading">
        <h3>Ajout un cours</h3>
        <p> <router-link to="/">home >></router-link> Ajout d'un cours </p>
    </section>

    <section class="contact">

        <div class="icons-container">

            <div class="icons">
                <i class="fas fa-phone"></i>
                <h3>Nos numéros</h3>
                <p>+243-995-555-480</p>
                <p>+243-822-485-087</p>
            </div>

            <div class="icons">
                <i class="fas fa-envelope"></i>
                <h3>Nos e-mails</h3>
                <p>elvinkyungu.75@gmail.com</p>
                <p>cerclescientifique.unilu@gmail.com</p>
            </div>

            <div class="icons">
                <i class="fas fa-map-marker-alt"></i>
                <h3>Siège social</h3>
                <p>Lubumbashi, Drc - Lubumbashi</p>
                <p>Gambela II, Kasangulu - Kakanda - </p>
            </div>

        </div>

        <div class="row">

            <form action="">
                <h3>Prenez contact avec nous</h3>
                <input type="text" placeholder="Titre du cours" class="box">
  
                <textarea name="" placeholder="Votre message" cols="30" rows="10"></textarea>
                <input type="submit" @click="quilijs" value="Poster le cours" class="btn">
            </form>
            <div id="editor"></div>
            <!-- <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d417.8806039471235!2d27.479107580011647!3d-11.633930427134187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x197239475843a955%3A0x3f8449d49c1f87f9!2sAv.%20Kakanda%2C%20Lubumbashi!5e1!3m2!1sfr!2scd!4v1654620478067!5m2!1sfr!2scd" allowfullscreen="" loading="lazy" ></iframe> -->
        </div>
    </section>
    <Footer />
  </main>
</template>
<style scoped>
  @import url("https://cdn.quilljs.com/1.3.6/quill.snow.css");
</style>