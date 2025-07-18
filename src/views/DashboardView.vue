<script setup lang="ts">
import AppLayout from '@/components/layouts/AppLayout.vue'
import PlaceholderPattern from '@/components/PlaceholderPattern.vue'
import { type BreadcrumbItem } from '@/types';
const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
  },
];
</script>

<template>
  <AppLayout :breadcrumbs="breadcrumbs">
    <div class="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
<!--      <PlaceholderPattern />-->
<!--      <DashboardCard />-->
      <div class="relative min-h-[100vh] flex-1 rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
<!--        <DashboardMontlyIncomeExpense />-->
        <PlaceholderPattern />
      </div>
      <div class="relative min-h-[100vh] flex-1 rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
<!--        <DashboardExpenseType />-->
        <PlaceholderPattern />
      </div>
    </div>
  </AppLayout>
</template>

<style scoped>

</style>
