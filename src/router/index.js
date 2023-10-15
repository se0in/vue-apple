import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'

const routes = [
  {
    path: '/app', //렌더링 중첩 이슈 해결 / -> /app
    name: 'App',
    component: App
  },
  { 
    path: '/',
    component: () => import(
      '../components/home/HomePage.vue')
  },
  {
    path: '/Sub',
    component: () => import(
      '../components/sub/SubPage.vue'
    )
  },
  {
    path: '/Sub2',
    component: () => import(
      '../components/sub/SubPage.vue'
    )
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
