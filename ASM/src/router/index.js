import { createRouter, createWebHistory } from 'vue-router'


import Blog from '../components/Blog.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import PostDetail from '../components/PostDetail.vue'
import UserProfile from '../components/UserProfile.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'home',
      component: Blog
    },


    {
      path: '/login',
      name: 'login',
      component: Login
    },

    {
      path: '/register',
      name: 'register',
      component: Register
    },

    {
      path: '/blog/:id',
      name: 'post-detail',
      component: PostDetail

    },
    {
      path: '/user',
      name: 'user-profile',
      component: UserProfile
    }

  ]
})

export default router