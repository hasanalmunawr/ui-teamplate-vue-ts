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

import { useAuthStore } from '@/stores/auth.ts'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      redirect: '/dashboard',
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
      meta: { requiresAuth: true }
    },
    {
      path: '/transaction',
      name: 'transaction',
      component: TransactionView,
      meta: { requiresAuth: true }
    },

    {
      path: '/settings/appearance',
      name: 'settings-appearance',
      component: AppearanceView,
      meta: { requiresAuth: true }
    },
    {
      path: '/settings/password',
      name: 'settings-password',
      component: PasswordView,
      meta: { requiresAuth: true }
    },
    {
      path: '/settings/profile',
      name: 'settings-profile',
      component: ProfileView,
      meta: { requiresAuth: true }
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


  ],
}).beforeEach(async (to, from) => {
  const authStore = useAuthStore();
  await authStore.getUser();
  if (authStore.user && to.meta.guest) {
    return { name: "dashboard" };
  }

  if (!authStore.user && to.meta.auth) {
    return { name: "login" };
  }
});

export default router
