<script setup>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import HomeAbout from '@/components/HomeAbout.vue'
import CategorY from '@/components/Category.vue'
import Category from '../components/Category.vue';

</script>
<template>
  <main>
    <NavBar />
    <section class="heading">
        <h3>contactez-nous</h3>
        <p> <router-link to="/">home >></router-link> contact </p>
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
                <input type="text" placeholder="Votre nom" class="box">
                <input type="number" placeholder="Votre numéro de téléphone number" class="box">
                <input type="email" placeholder="Votre e-mail" class="box">
                <textarea name="" placeholder="Votre message" id="" cols="30" rows="10"></textarea>
                <input type="submit" value="Envoyez" class="btn">
            </form>

            <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15076.89592087332!2d72.8319697277345!3d19.14167056419224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef0c69%3A0x2aa80cf2287dfa3b!2sJogeshwari%20West%2C%20Mumbai%2C%20Maharashtra%20400047!5e0!3m2!1sen!2sin!4v1635757298406!5m2!1sen!2sin" allowfullscreen="" loading="lazy"></iframe>

        </div>

    </section>
    <Footer />
  </main>
</template>
<style scoped>

</style>