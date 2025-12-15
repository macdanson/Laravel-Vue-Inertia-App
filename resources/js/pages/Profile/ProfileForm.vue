<script setup>
import {useForm} from "@inertiajs/vue3";

const props = defineProps({
    user: Object
})

const form = useForm({
    name: props.user.name,
    email: props.user.email,
    image: null,
});
</script>

<template>
    <form @submit.prevent="form.patch('/profile',{ preserveScroll: true, onSuccess: () => {
                    form.reset('image');
                } })" class="space-y-4 lg:space-y-6">
        <!-- Name -->
        <div>
            <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
                Full Name <span class="text-red-500">*</span>
            </label>
            <input id="name" v-model="form.name" type="text" required class="w-full file-input px-3 lg:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm lg:text-base" :class="{ 'border-red-500': form.errors.name }" placeholder="Enter your full name"/>
            <p v-if="form.errors.name" class="mt-1 text-xs lg:text-sm text-red-600">
                {{ form.errors.name }}
            </p>
        </div>

        <!-- Email -->
        <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                Email Address <span class="text-red-500">*</span>
            </label>
            <input id="email" v-model="form.email" type="email" required class="w-full px-3 lg:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm lg:text-base" :class="{ 'border-red-500': form.errors.email }" placeholder="Enter your email address"/>
            <p v-if="form.errors.email" class="mt-1 text-xs lg:text-sm text-red-600">
                {{ form.errors.email }}
            </p>
        </div>

        <!-- Profile picture -->
        <div>
            <label for="image" class="block text-sm font-medium text-gray-700 mb-2">
                Profile picture
            </label>
            <input id="image" @input="form.image = $event.target.files[0]" type="file" class="w-full px-3 lg:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm lg:text-base" :class="{ 'border-red-500': form.errors.image }"/>
            <p v-if="form.errors.image" class="mt-1 text-xs lg:text-sm text-red-600">
                {{ form.errors.image }}
            </p>
        </div>

        <!-- Submit Button -->
        <div class="flex justify-end">
            <button type="submit" :disabled="form.processing || !form.isDirty" class="px-4 lg:px-6 py-2 lg:py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed text-sm lg:text-base">
                <span v-if="form.processing">Saving...</span>
                <span v-else>Save Changes</span>
            </button>
        </div>
    </form>
</template>

<style scoped>

</style>
