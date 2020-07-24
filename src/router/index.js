import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import {loadLanguageAsync} from '../i18n-setup'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  const lang = to.params.lang || 'en'
  loadLanguageAsync(lang).then(() => next())
})

export default router
