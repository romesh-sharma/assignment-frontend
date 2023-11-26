import { createRouter, createWebHistory } from 'vue-router'
import TvShowLanding from '../views/TvShowHomeView.vue'
import ShowDetailView from '../views/ShowDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: TvShowLanding
    },
    {
      path: '/show-overview/:id',
      name: 'overview',
      component: ShowDetailView
    }
  ]
})

export default router
