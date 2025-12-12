<script setup>
import {Link, useForm} from "@inertiajs/vue3";

  defineProps({})
  const form = useForm({
      email: null,
      password: null,
      remember: false,
  })
</script>

<template>
    <form @submit.prevent="form.post('/login')" class="fieldset bg-base-200 border-base-300 rounded-box w-md border p-4">
        <legend class="fieldset-legend text-2xl">Login</legend>

        <label>Email</label>
        <input type="text" class="input w-full" v-model="form.email" placeholder="Enter your email">
        <div class="text-xs text-red-900 font-bold" v-if="form.errors.email">{{ form.errors.email }}</div>

        <label>Password</label>
        <input type="password" class="input w-full" v-model="form.password" placeholder="Enter your password">
        <div class="text-xs text-red-900 font-bold" v-if="form.errors.password">{{ form.errors.password }}</div>

        <label class="mt-2">
            <input type="checkbox" v-model="form.remember" checked="checked" class="checkbox checkbox-sm" />
            Remember me
        </label>

        <button class="btn btn-neutral mt-4" :disabled="form.processing">Login</button>

        <div>
            <p class="mt-4 text-center">
                Don't have an account?
                <Link href="/register" class="link link-primary">Register here</Link>
            </p>
        </div>
    </form>

</template>
