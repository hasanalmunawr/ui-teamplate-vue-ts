<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useInitials } from '@/composable/useInitials.ts'
import type { User } from '@/types'
import { computed } from 'vue'

// props biasa (tidak pakai Inertia)
interface Props {
  user: User
  showEmail?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  showEmail: false,
})

const { getInitials } = useInitials()

// const showAvatar = computed(() => props.user.avatar && props.user.avatar !== '')
</script>

<template>
  <Avatar class="h-8 w-8 overflow-hidden rounded-lg">
<!--    <AvatarImage v-if="showAvatar" :src="props.user.avatar" :alt="props.user.name" />-->
    <AvatarFallback class="rounded-lg text-black dark:text-white">
      {{ getInitials("Hasan Almunawar") }}
    </AvatarFallback>
  </Avatar>

  <div class="grid flex-1 text-left text-sm leading-tight">
<!--    <span class="truncate font-medium">{{ props.user.name }}</span>-->
    <span class="truncate font-medium">Hasan Almunawar</span>
    <span v-if="props.showEmail" class="truncate text-xs text-muted-foreground">
      {{ props.user.email }}
    </span>
    <span  class="truncate text-xs text-muted-foreground">
      hasanalmunawar0@gmail.com
    </span>
  </div>
</template>

<style scoped>

</style>
