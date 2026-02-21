import { createRouter, createWebHistory } from 'vue-router'



import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import PostDetail from '../components/PostDetail.vue'
import UserProfile from '../components/UserProfile.vue'
import BlogPage from '../components/BlogPage.vue'
import AdminDashboard from '../components/AdminDashboard.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'home',
      component: BlogPage
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
      name: 'PostDetail', 
      component: PostDetail
    },
    {
      path: '/user',
      name: 'user-profile',
      component: UserProfile
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminDashboard
    },
    
  ]
})

export default router