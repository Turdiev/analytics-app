import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../pages/AuthPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: HomePage
  },
  {
    path: '/analytics',
    name: 'analytics',
    component: () => import(/* webpackChunkName: "analytics" */ '../pages/AnalyticsPage.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
