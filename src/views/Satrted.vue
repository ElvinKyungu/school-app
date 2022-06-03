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
      <Category/>
    </section>

    <!-- categories section ends -->
    <Footer />
  </main>
</template>

