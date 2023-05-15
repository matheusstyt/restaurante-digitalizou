import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/PainelPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/entrar',
    name: 'entrar',
    component: function () {
      return import(/* webpackChunkName: "entrar" */ '../views/EntrarPage.vue')
    }
  },
  {
    path: '/refeicao',
    name: 'refeicao',
    component: function () {
      return import(/* webpackChunkName: "refeicao" */ '../views/RefeicaoPage.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
