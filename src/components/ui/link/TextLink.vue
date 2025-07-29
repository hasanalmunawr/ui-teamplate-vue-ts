<script setup lang="ts">
import { RouterLink } from 'vue-router'

interface Props {
  route: string;
  tabindex?: number;
  as?: string;
}

</script>

<template>
  <RouterLink
    :to="route"
    :tabindex="tabindex"
    :as="as"
    class="text-foreground underline decoration-neutral-300 underline-offset-4 transition-colors duration-300 ease-out hover:decoration-current! dark:decoration-neutral-500"
  >
    <slot />
  </RouterLink>
</template>
