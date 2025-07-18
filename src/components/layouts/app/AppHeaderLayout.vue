<script setup lang="ts">
import AppShell from '@/components/layouts/app/AppShell.vue'
import AppHe
import type { BreadcrumbItemType } from '@/types';
interface Props {
  breadcrumbs?: BreadcrumbItemType[];
}

withDefaults(defineProps<Props>(), {
  breadcrumbs: () => [],
});
</script>

<template>
  <AppShell class="flex-col">
    <AppHeader :breadcrumbs="breadcrumbs" />
    <AppContent>
      <slot />
    </AppContent>
  </AppShell>
</template>

<style scoped>

</style>
