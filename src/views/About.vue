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
            <h1>Hey Salut les gars, nous sommes sur la page de  about, donc a propos de nous</h1>
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
    h1{
        font-size: 2rem;
        font-weight: normal;
        margin-bottom: 1rem;
        text-align: center !important;
    }
</style>