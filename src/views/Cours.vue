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

        
        <section class="heading">
            <h3>cours</h3>
            <p> <router-link to="../">Accueil >> </router-link> cours </p>
        </section>

        <!-- course-2 section starts  -->

        <section class="course-2">

            <div class="box">
                <div class="image">
                    <img src="../assets/img/main-course-1.png" alt="">
                </div>
                <div class="content">
                    <span>business</span>
                    <h3>L'apprentissage est ce qui vous rend parfait</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quam.</p>
                    <router-link to="" class="btn">lire plus</router-link>
                    <div class="icons">
                        <a href="#"> <i class="fas fa-book"></i> 12 modules </a>
                        <a href="#"> <i class="fas fa-clock"></i> 6 heures </a>
                    </div>
                </div>
            </div>

            <div class="box">
                <div class="image">
                    <img src="../assets/img/main-course-2.png" alt="">
                </div>
                <div class="content">
                    <span>langues</span>
                    <h3>L'apprentissage est ce qui vous rend parfait</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quam.</p>
                    <a href="#" class="btn">Lire plus</a>
                    <div class="icons">
                        <a href="#"> <i class="fas fa-book"></i> 12 modules </a>
                        <a href="#"> <i class="fas fa-clock"></i> 6 heures </a>
                    </div>
                </div>
            </div>

            <div class="box">
                <div class="image">
                    <img src="../assets/img/main-course-3.png" alt="">
                </div>
                <div class="content">
                    <span>Développement</span>
                    <h3>L'apprentissage est ce qui vous rend parfait</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quam.</p>
                    <a href="#" class="btn">Lire plus</a>
                    <div class="icons">
                        <a href="#"> <i class="fas fa-book"></i> 12 modules </a>
                        <a href="#"> <i class="fas fa-clock"></i> 6 heures </a>
                    </div>
                </div>
            </div>

            <div class="box">
                <div class="image">
                    <img src="../assets/img/main-course-4.png" alt="">
                </div>
                <div class="content">
                    <span>Enseignement</span>
                    <h3>L'apprentissage est ce qui vous rend parfait</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quam.</p>
                    <a href="#" class="btn">Lire plus</a>
                    <div class="icons">
                        <a href="#"> <i class="fas fa-book"></i> 12 modules </a>
                        <a href="#"> <i class="fas fa-clock"></i> 6 heures </a>
                    </div>
                </div>
            </div>

            <div class="box">
                <div class="image">
                    <img src="../assets/img/main-course-5.png" alt="">
                </div>
                <div class="content">
                    <span>design</span>
                    <h3>L'apprentissage est ce qui vous rend parfait</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quam.</p>
                    <a href="#" class="btn">Lire plus</a>
                    <div class="icons">
                        <a href="#"> <i class="fas fa-book"></i> 12 modules </a>
                        <a href="#"> <i class="fas fa-clock"></i> 6 heures </a>
                    </div>
                </div>
            </div>

            <div class="box">
                <div class="image">
                    <img src="../assets/img/main-course-6.png" alt="">
                </div>
                <div class="content">
                    <span>Parler en public</span>
                    <h3>L'apprentissage est ce qui vous rend parfait</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quam.</p>
                    <a href="#" class="btn">Lire plus</a>
                    <div class="icons">
                        <a href="#"> <i class="fas fa-book"></i> 12 modules </a>
                        <a href="#"> <i class="fas fa-clock"></i> 6 heures </a>
                    </div>
                </div>
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
    h1,h3{
        font-size: 2rem;
        font-weight: normal;
        margin-bottom: 1rem;
        text-align: center !important;
    }
</style>