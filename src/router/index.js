import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/exam1',
    name: 'Exam1',
    component: () => import(/* webpackChunkName: "about" */ '../views/Exam1.vue')
  },
  {
    path: '/exam2',
    name: 'Exam2',
    component: () => import(/* webpackChunkName: "about" */ '../views/Exam2.vue')
  },
  {
    path: '/exam3',
    name: 'Exam3',
    component: () => import(/* webpackChunkName: "about" */ '../views/Exam3.vue')
  },
  {
    path: '/exam4',
    name: 'Exam4',
    component: () => import(/* webpackChunkName: "about" */ '../views/Exam4.vue')
  },
  {
    path: '/exam5',
    name: 'Exam5',
    component: () => import(/* webpackChunkName: "about" */ '../views/Exam5.vue')
  },
  {
    path: '/exam6',
    name: 'Exam6',
    component: () => import(/* webpackChunkName: "about" */ '../views/Exam6.vue')
  },
  {
    path: '/exam7',
    name: 'Exam7',
    component: () => import(/* webpackChunkName: "about" */ '../views/Exam7.vue')
  },
  {
    path: '/exam8',
    name: 'Exam8',
    component: () => import(/* webpackChunkName: "about" */ '../views/Exam8.vue')
  },
  {
    path: '/exam9',
    name: 'Exam9',
    component: () => import(/* webpackChunkName: "about" */ '../views/Exam9.vue')
  },
  {
    path: '/exam10',
    name: 'Exam10',
    component: () => import(/* webpackChunkName: "about" */ '../views/Exam10.vue')
  },
  {
    path: '/exam11',
    name: 'Exam11',
    component: () => import(/* webpackChunkName: "about" */ '../views/Exam11.vue')
  },
  {
    path: '/exam12',
    name: 'Exam12',
    component: () => import(/* webpackChunkName: "about" */ '../views/Exam12.vue')
  },
  {
    path: '/exam13',
    name: 'Exam13',
    component: () => import(/* webpackChunkName: "about" */ '../views/Exam13.vue')
  },
  {
    path: '/exam14',
    name: 'Exam14',
    component: () => import(/* webpackChunkName: "about" */ '../views/Exam14.vue')
  },
  {
    path: '/lookPoint',
    name: 'LookPoint',
    component: () => import(/* webpackChunkName: "about" */ '../views/LookPoint.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
