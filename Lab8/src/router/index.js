import { createRouter, createWebHistory } from 'vue-router'



import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import PostDetail from '../components/PostDetail.vue'
import UserProfile from '../components/UserProfile.vue'
import BlogPage from '../components/BlogPage.vue'
import AdminDashboard from '../components/AdminDashboard.vue'
import UserInfo from '../components/UserInfo.vue'
import UserSettings from '../components/UserSettings.vue'

const routes = [

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
    path: '/profile',
    name: 'user-profile',
    component: UserProfile,
    alias: '/me',
    children: [
      { path: 'info', name: 'userInfo', component: UserInfo },
      { path: 'settings', name: 'userSettings', component: UserSettings }
    ]
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminDashboard,

    meta: { requiresAuth: true }
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});


router.beforeEach((to, from, next) => {

  const isLoggedIn = localStorage.getItem('currentUser');


  if (to.matched.some(record => record.meta.requiresAuth) && !isLoggedIn) {
    next({ name: 'login' });
  } else {

    next();
  }
})

export default router