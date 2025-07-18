<script setup lang="ts">
import { computed, ref } from 'vue'
import UserInfo from '@/components/ui/UserInfo.vue'
import UserMenuContent from '@/components/ui/UserMenuContent.vue'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from '@/components/ui/sidebar'
// import { type User } from '@/types'
import { ChevronsUpDown } from 'lucide-vue-next'

// Ganti ini: ambil user dari store (Pinia atau global state)
import { useAuthStore } from '@/stores/auth' // contoh store

// const authStore = useAuthStore()
// const user = computed(() => authStore.user)
const user = ref({
  id: 1,
  name: 'Hasan Almunawar',
  email: 'hasan@example.com',
  avatar: 'https://i.pravatar.cc/150?u=hasan',
  email_verified_at: null,
  created_at: '2025-01-01T00:00:00Z',
  updated_at: '2025-07-17T12:00:00Z',
})
const { isMobile, state } = useSidebar()
</script>

<template>
  <SidebarMenu>
    <SidebarMenuItem>
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <SidebarMenuButton
            size="lg"
            class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
          >
            <UserInfo :user="user" />
            <ChevronsUpDown class="ml-auto size-4" />
          </SidebarMenuButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          class="w-(--reka-dropdown-menu-trigger-width) min-w-56 rounded-lg"
          :side="isMobile ? 'bottom' : state === 'collapsed' ? 'left' : 'bottom'"
          align="end"
          :side-offset="4"
        >
          <UserMenuContent :user="user" />
        </DropdownMenuContent>
      </DropdownMenu>
    </SidebarMenuItem>
  </SidebarMenu>
</template>

<style scoped>

</style>
