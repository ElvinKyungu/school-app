<script setup>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

</script>
<template>
  <main>
    <NavBar />
    <section class="heading">
        <h3>Categories d'archives</h3>
        <p> <router-link to="/">home >></router-link> Categories d'archives </p>
    </section>
    
    <section class="contact">
    
        <div class="icons-container">
            <router-link to="/archive">
                <div class="icons">
                    <i class="fas fa-file-pdf"></i>
                    <h3>Cours</h3>
                    <p>+56 Cours</p>
                </div>
            </router-link>
            <router-link to="/archive">
                <div class="icons">
                    <i class="fas fa-file-pdf"></i>
                    <h3>Examens</h3>
                    <p>+56 Cours</p>
                </div>
            </router-link>
            <router-link to="/Archive">
                <div class="icons">
                    <i class="fas fa-file-pdf"></i>
                    <h3>TD, TP, Intérrogations</h3>
                    <p>+56 Cours</p>
                </div>
            </router-link>
        </div>
    </section>
    <Footer />
  </main>
</template>
<style scoped>

</style>