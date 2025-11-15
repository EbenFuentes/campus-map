import { createRouter, createWebHistory } from 'vue-router'
import CampusMap from '../components/CampusMap.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'map',
      component: CampusMap
    }
  ],
})

export default router
