<script setup>
  import {Head} from "@inertiajs/vue3";
  import ProfileForm from "@/pages/Profile/ProfileForm.vue";
  import PasswordForm from "@/pages/Profile/PasswordForm.vue";

  defineProps({
    user: Object
  })
</script>

<template>
    <Head title="My Profile - "/>
    <div class="max-w-4xl mx-auto py-6 lg:py-8">
        <!-- Header -->
        <div class="mb-6 lg:mb-8">
            <h1 class="text-2xl lg:text-3xl font-bold text-gray-800">My Profile</h1>
            <p class="text-sm lg:text-base text-gray-600 mt-1">Manage your account settings and preferences</p>
        </div>

        <div class="space-y-6">
            <!-- Profile Information Card -->
            <div class="bg-white rounded-xl shadow-md p-4 lg:p-6">
                <div class="flex items-center justify-between mb-4 lg:mb-6">
                    <div>
                        <h2 class="text-lg lg:text-xl font-bold text-gray-800">Profile Information</h2>
                        <p class="text-xs lg:text-sm text-gray-600 mt-1">Update your account's profile information and email address.</p>
                    </div>
                    <div class="shrink-0 w-16 h-16 lg:w-20 lg:h-20 bg-emerald-100 rounded-full flex items-center justify-center">
                      <span class="text-2xl lg:text-3xl font-bold text-emerald-600">
<!--                        {{ user.name.charAt(0).toUpperCase() }}-->
                          <img v-if="user.image_path" :src="`/storage/${user.image_path}`" alt="Avatar"/>
                          <img v-else src="https://img.daisyui.com/images/profile/demo/2@94.webp" alt="Avatar"/>
                      </span>
                    </div>
                </div>

                <ProfileForm :user="user" />
            </div>

            <!-- Change Password Card -->
            <div class="bg-white rounded-xl shadow-md p-4 lg:p-6">
                <div class="mb-4 lg:mb-6">
                    <h2 class="text-lg lg:text-xl font-bold text-gray-800">Change Password</h2>
                    <p class="text-xs lg:text-sm text-gray-600 mt-1">Ensure your account is using a long, random password to stay secure.</p>
                </div>

                <PasswordForm />
            </div>
        </div>
    </div>
</template>
