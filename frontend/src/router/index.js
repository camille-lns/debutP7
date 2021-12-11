import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Profile from '../views/UserProfile.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  }, 
  {
    path: '/profile', 
    name: 'Profile', 
    component: Profile
  },
  {
    path: '/home', 
    name: 'Home', 
    component: Home
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
