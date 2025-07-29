<script setup lang="ts">
import AppLayout from '@/components/layouts/AppLayout.vue'
import { type BreadcrumbItem } from '@/types'
// import InputError from '@/components/ui/input/InputError.vue'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import HeadingSmall from '@/components/setting/HeadingSmall.vue'
import SettingsLayout from '@/components/layouts/setting/SettingLayout.vue'
import { Button } from '@/components/ui/button'
import { reactive } from 'vue'

// const breadcrumbItems: BreadcrumbItem[] = [
//   {
//     title: 'Profile settings',
//     href: '/settings/profile',
//   },
// ];

const form = reactive({
  name: 'Hasan Almunawar',
  email: 'hasanalmunawar9@gmail.com',
})

</script>

<template>
  <AppLayout>
    <!--    <Head title="Profile settings" />-->
    <SettingsLayout>
      <div class="flex flex-col space-y-6">
        <HeadingSmall
          title="Profile information"
          description="Update your name and email address"
        />

        <form class="space-y-6">
          <div class="grid gap-2">
            <Label for="name">Name</Label>
            <Input
              id="name"
              class="mt-1 block w-full"
              v-model="form.name"
              required
              autocomplete="name"
              placeholder="Full name"
            />
            <!--            <InputError class="mt-2" :message="form.errors.name" />-->
          </div>

          <div class="grid gap-2">
            <Label for="email">Email address</Label>
            <Input
              id="email"
              type="email"
              class="mt-1 block w-full"
              v-model="form.email"
              required
              autocomplete="username"
              placeholder="Email address"
            />
            <!--            <InputError class="mt-2" :message="form.errors.email" />-->
          </div>
          <div class="flex items-center gap-4">
            <Button>Save</Button>
          </div>
        </form>
      </div>
    </SettingsLayout>
  </AppLayout>
</template>

<style scoped></style>
