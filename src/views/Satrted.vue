<script setup>
import Preloader from '@/components/Preloader.vue'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import Category from '../components/Category.vue';


</script>
<template>
  <Preloader />
  <main>
    <NavBar />
    <!-- categories section starts  -->

    <section class="category">
      <Category/>
    </section>

    <!-- categories section ends -->
    <Footer />
  </main>
</template>

