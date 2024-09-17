import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/listproducts.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/products',
    name: 'products',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.../views/listproducts.vue
    component: () => import(/* webpackChunkName: "about" */ '../views/listproducts.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
