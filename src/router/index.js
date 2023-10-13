import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'

const routes = [
  {
    path: '/',
    name: 'App',
    component: App
  },
  {
    path: '/main',
    name: 'main',
    component: () => import(
      '../components/MainPage.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(
      '../components/SubPage.vue'
    )
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
