<script setup>
  import {useForm} from "@inertiajs/vue3";

  defineProps({})
  const form = useForm({
      name: null,
      email: null,
      password: null,
      password_confirmation: null,
  })
</script>

<template>
    <form @submit.prevent="form.post('/register')" class="fieldset bg-base-200 border-base-300 rounded-box w-md border p-4">
        <legend class="fieldset-legend text-2xl">Register</legend>

        <label>Full Name</label>
        <input type="text" class="input w-full" v-model="form.name" placeholder="Enter your name">
        <div class="text-xs text-red-900 font-bold" v-if="form.errors.name">{{ form.errors.email }}</div>

        <label>Email</label>
        <input type="email" class="input w-full" v-model="form.email" placeholder="Enter your email">
        <div class="text-xs text-red-900 font-bold" v-if="form.errors.email">{{ form.errors.email }}</div>

        <label>Password</label>
        <input type="password" class="input w-full" v-model="form.password" placeholder="••••••••">
        <div class="text-xs text-red-900 font-bold" v-if="form.errors.password">{{ form.errors.password }}</div>

        <label>Confirm Password</label>
        <input type="password" class="input w-full" v-model="form.password_confirmation" placeholder="••••••••">

        <button class="btn btn-neutral mt-4" :disabled="form.processing">Login</button>


        <p class="mt-4 text-center">
            Already have an account?
            <Link href="/login" class="link link-primary">Login here</Link>
        </p>
    </form>
</template>
