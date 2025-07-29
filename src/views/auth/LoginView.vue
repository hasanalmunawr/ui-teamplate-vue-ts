<script setup lang="ts">
import { storeToRefs } from "pinia";
import { onMounted, reactive } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import AuthBase from '@/components/layouts/AuthLayout.vue'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import InputError from '@/components/ui/input/InputError.vue'
import TextLink from '@/components/ui/link/TextLink.vue'
import { Button } from '@/components/ui/button'

const { errors } = storeToRefs(useAuthStore());
const { authenticate } = useAuthStore();

const router = useRouter();
const authStore = useAuthStore();

interface LoginRequest {
  email: string
  password: string
  remember: boolean
}

// Form state
const form = reactive<LoginRequest>({
  email: '',
  password: '',
  remember: false,
})

// Submit function
const submit = async () => {
  await authStore.authenticate("login", form, router);
}

onMounted(() => (errors.value = {}));
</script>

<template>
  <AuthBase
    title="Log in to your account"
    description="Enter your email and password below to log in"
  >
    <form @submit.prevent="submit" class="flex flex-col gap-6">
      <div class="grid gap-6">
        <div class="grid gap-2">
          <Label for="email">Email address</Label>
          <Input
            id="email"
            type="email"
            required
            autofocus
            :tabindex="1"
            autocomplete="email"
            v-model="form.email"
            placeholder="email@example.com"
          />
          <InputError :message="errors.email[0]" />
        </div>

        <div class="grid gap-2">
          <div class="flex items-center justify-between">
            <Label for="password">Password</Label>
            <TextLink route="/forgot-password" class="text-sm" :tabindex="5">
              Forgot password?
            </TextLink>
          </div>
          <Input
            id="password"
            type="password"
            required
            :tabindex="2"
            autocomplete="current-password"
            v-model="form.password"
            placeholder="Password"
          />
          <InputError :message="errors.password[0]" />
        </div>

        <div class="flex items-center justify-between">
          <Label for="remember" class="flex items-center space-x-3">
            <Checkbox id="remember" v-model="form.remember" :tabindex="3" />
            <span>Remember me</span>
          </Label>
        </div>

        <Button type="submit" class="mt-4 w-full" :tabindex="4">
          Log in
        </Button>
      </div>
    </form>
  </AuthBase>
</template>

<style scoped></style>
