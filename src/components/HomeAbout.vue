<template>
    <section class="home">
        <div class="image">
            <img src="../assets/home-img.png" alt="">
        </div>

        <div class="content">
            <h3>votre parcours vers le succès.</h3>
            <p>Apprenez à apprendre, découvrez les compétences de demain. Et prenez votre carrière en main.</p>
            <router-link to="../Satrted" class="btn">Commencer</router-link>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
           
        }
    },
    methods: {
       
    },
    mounted() {
        console.log('Home mounted')
    }
}
</script>