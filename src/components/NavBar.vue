<script >
    export default {
  data() {
    
  },methods: {
    toggleFunction() {
        let menu = document.getElementById("menu-btn");
        let navbar = document.querySelector('.header .navbar');
        menu.classList.toggle('fa-times');
        navbar.classList.toggle('active');

    }
  },
}
</script>

<template>
    <header class="header">

        <a href="home.html" class="logo"> DevElève.tech </a>

        <div id="menu-btn" @click="toggleFunction" class="fas fa-bars"></div>

        <nav class="navbar">
            <ul>
                <li><router-link to="../">Accueil</router-link></li>
                <li><router-link to="../categoriesArchives">Archives</router-link></li>
                <li><router-link to="../Cours">Cours +</router-link></li>
                
                <li><router-link to="../Connexion">Connexion</router-link></li>
                <li><router-link to="../Contact">Contact</router-link></li>
                <!-- <li><router-link to="../Dashboard">Dashboard</router-link></li> -->
            </ul>
        </nav>
    </header>  
</template>
<style>

</style>