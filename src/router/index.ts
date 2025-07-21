import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/auth/LoginView.vue'
import RegisterView from '@/views/auth/RegisterView.vue'
import ResetPasswordView from '@/views/auth/ResetPasswordView.vue'
import ForgotPasswordView from '@/views/auth/ForgotPasswordView.vue'
import VerifyEmailView from '@/views/auth/VerifyEmailView.vue'

import DashboardView from '@/views/DashboardView.vue'
import TransactionView from '@/views/Transaction/Index.vue'

import AppearanceView from '@/views/settting/AppearanceView.vue'
import PasswordView from '@/views/settting/PasswordView.vue'
import ProfileView from '@/views/settting/ProfileView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/dashboard',
      name: 'home',
      component: DashboardView,
    },
    {
      path: '/transaction',
      name: 'transaction',
      component: TransactionView,
    },
    {
      path: '/transaction',
      name: 'transaction',
      component: TransactionView,
    },

    {
      path: '/settings/appearance',
      name: 'settings-appearance',
      component: AppearanceView,
    },
    {
      path: '/settings/password',
      name: 'settings-password',
      component: PasswordView,
    },
    {
      path: '/settings/profile',
      name: 'settings-profile',
      component: ProfileView,
    },



    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },
    {
      path: '/forgot-password',
      name: 'forgot-password',
      component: ForgotPasswordView,
    },
    {
      path: '/verify-email',
      name: 'verify-email',
      component: VerifyEmailView,
    },

    {
      path: '/reset-password',
      name: 'reset-password',
      component: ResetPasswordView,
    },


    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
