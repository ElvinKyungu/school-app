<script setup>
import Preloader from '@/components/Preloader.vue'
import NavBar from '@/components/NavBar.vue';
import listArchives from '../components/listArchives.vue';
import Footer from '@/components/Footer.vue';

</script>
<template>
<Preloader />
  <main>
    <NavBar />
    <!-- categories section starts  -->
    <section class="heading">
        <h3>Liste de cours</h3>
        <p> <router-link to="/">home >></router-link> Liste de cours </p>
    </section>
    <section class="category">
      <listArchives/>
    </section>

    <!-- categories section ends -->
    <Footer />
  </main>
</template>

