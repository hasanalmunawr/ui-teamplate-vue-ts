<script setup lang="ts">
import { reactive } from 'vue';
import axios from 'axios';
import { LoaderCircle } from 'lucide-vue-next';
import AuthBase from '@/components/layouts/AuthLayout.vue';
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import InputError from '@/components/ui/input/InputError.vue'

interface Props {
  token: string;
  email: string;
}

const props = defineProps<Props>();

const form = reactive({
  token: props.token,
  email: props.email,
  password: '',
  password_confirmation: '',
  errors: {} as Record<string, string>,
  processing: false,
});

const submit = async () => {

  try {
    const response = await axios.post('/register', {
      email: form.email,
      password: form.password,
      password_confirmation: form.password_confirmation,
    });

    // Redirect or handle success
    window.location.href = response.data.redirect || '/dashboard';
  } catch (error: any) {
    if (error.response?.status === 422) {
      // form.errors = error.response.data.errors || {};
    }
  } finally {
    form.password = '';
    // form.processing = false;
  }
};
</script>

<template>
  <AuthBase title="Reset password" description="Please enter your new password below">
<!--    <Head title="Reset password" />-->

    <form @submit.prevent="submit">
      <div class="grid gap-6">
        <div class="grid gap-2">
          <Label for="email">Email</Label>
          <Input id="email" type="email" name="email" autocomplete="email" v-model="form.email" class="mt-1 block w-full" readonly />
          <InputError :message="form.errors.email" class="mt-2" />
        </div>

        <div class="grid gap-2">
          <Label for="password">Password</Label>
          <Input
            id="password"
            type="password"
            name="password"
            autocomplete="new-password"
            v-model="form.password"
            class="mt-1 block w-full"
            autofocus
            placeholder="Password"
          />
          <InputError :message="form.errors.password" />
        </div>

        <div class="grid gap-2">
          <Label for="password_confirmation"> Confirm Password </Label>
          <Input
            id="password_confirmation"
            type="password"
            name="password_confirmation"
            autocomplete="new-password"
            v-model="form.password_confirmation"
            class="mt-1 block w-full"
            placeholder="Confirm password"
          />
          <InputError :message="form.errors.password_confirmation" />
        </div>

        <Button type="submit" class="mt-4 w-full" :disabled="form.processing">
          <LoaderCircle v-if="form.processing" class="h-4 w-4 animate-spin" />
          Reset password
        </Button>
      </div>
    </form>
  </AuthBase>
</template>

<style scoped>

</style>
