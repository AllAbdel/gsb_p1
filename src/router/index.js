import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AccueilView from '../views/AccueilView.vue'
import MedecinsView from '../views/MedecinsView.vue'
import RapportsView from '../views/RapportsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/Accueil',
    name: 'Accueil',
    component: AccueilView
  },
  {
    path: '/Medecins',
    name: 'Medecins',
    component: MedecinsView
  },{
    path: '/Rapports',
    name: 'Rapports',
    component: RapportsView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
