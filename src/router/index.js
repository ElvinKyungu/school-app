import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Satrted',
      name: 'Satrted',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Satrted.vue')
    },
    {
      path: '/categoriesArchives',
      name: 'categoriesArchives',
      component: () => import('../views/categoriesArchives.vue')
    },
    {
      path: '/Connexion',
      name: 'Connexion',
      component: () => import('../views/Connexion.vue')
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: () => import('../views/Contact.vue')
    },
    {
      path: '/Inscription',
      name: 'Inscription',
      component: () => import('../views/Inscription.vue')
    },
    {
      path: '/Cours',
      name: 'Cours',
      component: () => import('../views/Cours.vue')
    },
    {
      path: '/Archive',
      name: 'Archive',
      component: () => import('../views/Archive.vue')
    },
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: () => import('../views/Dashboard.vue')
    },
    {
      path: '/addCourse',
      name: 'addCourse',
      component: () => import('../views/addCourse.vue')
    }
  ]
})

export default router
