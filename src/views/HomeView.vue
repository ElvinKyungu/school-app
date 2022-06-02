<script setup>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import Home from '@/components/HomeAbout.vue'
</script>

<template>
  <main>
    <NavBar />
    
    <Home/>
    <!-- home section ends -->
    <Footer />
  </main>
</template>
<style>
.text-center{
  text-align: center;
  font-size: 3rem;
  font-weight: normal;
  margin-bottom: 5rem;
}
</style>