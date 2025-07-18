<script setup lang="ts">
import { ref, reactive } from 'vue';
import axios from 'axios';
import { LoaderCircle } from 'lucide-vue-next';
import AuthBase from '@/components/layouts/AuthLayout.vue';
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import InputError from '@/components/ui/input/InputError.vue'
import TextLink from '@/components/ui/link/TextLink.vue'


// Props
defineProps<{
  status?: string;
  canResetPassword: boolean;
}>();

// Form state
const form = reactive({
  email: '',
  password: '',
  remember: false,
  errors: {} as Record<string, string>,
  processing: false,
});

// Submit function
const submit = async () => {
  form.processing = true;
  form.errors = {};

  try {
    const response = await axios.post('/login', {
      email: form.email,
      password: form.password,
      remember: form.remember,
    });

    // Redirect or handle success
    window.location.href = response.data.redirect || '/dashboard';
  } catch (error: any) {
    if (error.response?.status === 422) {
      form.errors = error.response.data.errors || {};
    }
  } finally {
    form.password = '';
    form.processing = false;
  }
};
</script>

<template>
  <AuthBase title="Log in to your account" description="Enter your email and password below to log in">
<!--    <Head title="Log in" />-->

    <div v-if="status" class="mb-4 text-center text-sm font-medium text-green-600">
      {{ status }}
    </div>

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
          <InputError :message="form.errors.email" />
        </div>

        <div class="grid gap-2">
          <div class="flex items-center justify-between">
            <Label for="password">Password</Label>
            <TextLink v-if="canResetPassword" route="/reset-password" class="text-sm" :tabindex="5">
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
          <InputError :message="form.errors.password" />
        </div>

        <div class="flex items-center justify-between">
          <Label for="remember" class="flex items-center space-x-3">
            <Checkbox id="remember" v-model="form.remember" :tabindex="3" />
            <span>Remember me</span>
          </Label>
        </div>

        <Button type="submit" class="mt-4 w-full" :tabindex="4" :disabled="form.processing">
          <LoaderCircle v-if="form.processing" class="h-4 w-4 animate-spin" />
          Log in
        </Button>
      </div>

      <div class="text-center text-sm text-muted-foreground">
        Don't have an account?
        <TextLink route="register" :tabindex="5">Sign up</TextLink>
      </div>
    </form>
  </AuthBase>
</template>

<style scoped>

</style>
