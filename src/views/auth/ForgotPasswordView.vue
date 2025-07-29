<script setup lang="ts">
import { reactive } from 'vue';
import axios from 'axios';
import AuthBase from '@/components/layouts/AuthLayout.vue';
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import InputError from '@/components/ui/input/InputError.vue'
import TextLink from '@/components/ui/link/TextLink.vue'

defineProps<{
  status?: string;
}>();

const form = reactive({
  email: '',
  errors: {} as Record<string, string>,
  processing: false,
});
const submit = async () => {

  try {
    const response = await axios.post('/register', {
      email: form.email,
    });

    // Redirect or handle success
    window.location.href = response.data.redirect || '/dashboard';
  } catch (error: any) {
    if (error.response?.status === 422) {
      // form.errors = error.response.data.errors || {};
    }
  } finally {
    // form.processing = false;
  }
};
</script>

<template>
  <AuthBase title="Forgot password" description="Enter your email which registered to receive a password reset link">
    <Head title="Forgot password" />

    <div v-if="status" class="mb-4 text-center text-sm font-medium text-green-600">
      {{ status }}
    </div>

    <div class="space-y-6">
      <form @submit.prevent="submit">
        <div class="grid gap-2">
          <Label for="email">Email address</Label>
          <Input id="email" type="email" name="email" autocomplete="off" v-model="form.email" autofocus placeholder="email@example.com" />
          <InputError :message="form.errors.email" />
        </div>

        <div class="my-6 flex items-center justify-start">
          <Button class="w-full">
            Email password reset link
          </Button>
        </div>
      </form>

      <div class="space-x-1 text-center text-sm text-muted-foreground">
        <span>Or, return to</span>
        <TextLink route="login">log in</TextLink>
      </div>
    </div>
  </AuthBase>
</template>

<style scoped>

</style>
