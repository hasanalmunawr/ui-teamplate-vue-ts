// stores/auth.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { User } from '@/types'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)

  function setUser(data: User) {
    user.value = data
  }

  return { user, setUser }
})
