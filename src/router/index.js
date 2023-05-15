import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/MapaPage.vue'

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
  },
  {
    path: '/reservas',
    name: 'reservas',
    component: function () {
      return import(/* webpackChunkName: "reservas" */ '../views/ReservasPage.vue')
    }
  },
  {
    path: '/pedidos',
    name: 'pedidos',
    component: function () {
      return import(/* webpackChunkName: "pedidos" */ '../views/PedidosPage.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
