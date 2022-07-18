<script setup>
import NavBar from '@/components/NavBar.vue'
import Preloader from '@/components/Preloader.vue'
import Footer from '@/components/Footer.vue'
import HomeAbout from '@/components/HomeAbout.vue'
// export default {
//   data() {
    
//   },methods: {
    
//   },
// }
</script>
<template>
  <Preloader/>
  <main>
    <NavBar />
    
    <HomeAbout/>
    <!-- home section ends -->
    <Footer />
  </main>
</template>
