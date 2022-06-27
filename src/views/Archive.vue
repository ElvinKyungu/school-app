<script setup>
import NavBar from '@/components/NavBar.vue';

// import Category from '../components/Category.vue';
import Category from '../components/Category.vue';
import Footer from '@/components/Footer.vue';

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

