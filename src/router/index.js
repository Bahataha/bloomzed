import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Login.vue'
import guest from './middleware/guest'
import auth from './middleware/auth'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Home,
    meta: {
      middleware: [
        guest
      ]
    }
  },
  {
    path: '/otp',
    name: 'Otp',
    component: Home,
    meta: {
      middleware: [
        guest
      ]
    }
  },
  {
    path: '/passw',
    name: 'Passw',
    component: Home,
    meta: {
      middleware: [
        guest
      ]
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    middleware: [
      auth
    ],
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Profile.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
