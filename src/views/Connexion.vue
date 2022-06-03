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
    <!-- categories section starts  -->

    <section class="category">
        <div>
            <h1>Bienvenue sur la page de connexion !</h1>
            <h3>I'm Elvin Kyungu front-end web developer</h3>
        </div>
    </section>

    <!-- categories section ends -->
    <Footer />
  </main>
</template>
<style scoped>
    .category {
        padding-bottom: 10rem;
        margin-top: 10rem;
    }
    h1, h3{
        font-size: 2rem;
        font-weight: normal;
        margin-bottom: 1rem;
        text-align: center !important;
    }
</style>