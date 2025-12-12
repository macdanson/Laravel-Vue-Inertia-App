<script setup>
import {useForm} from "@inertiajs/vue3";

const form = useForm({
    current_password: '',
    password: '',
    password_confirmation: '',
});

const submit = () => {
    form.put('/profile/password', {
        preserveScroll: true,
        onSuccess: () => {
            form.reset();
        },
    });
};
</script>

<template>
    <form @submit.prevent="submit" class="space-y-4 lg:space-y-6">
        <!-- Current Password -->
        <div>
            <label for="current_password" class="block text-sm font-medium text-gray-700 mb-2">
                Current Password <span class="text-red-500">*</span>
            </label>
            <input
                id="current_password"
                v-model="form.current_password"
                type="password"
                required
                class="w-full px-3 lg:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm lg:text-base"
                :class="{ 'border-red-500': form.errors.current_password }"
                placeholder="Enter your current password"
            />
            <p v-if="form.errors.current_password" class="mt-1 text-xs lg:text-sm text-red-600">
                {{ form.errors.current_password }}
            </p>
        </div>

        <!-- New Password -->
        <div>
            <label for="password" class="block text-sm font-medium text-gray-700 mb-2">
                New Password <span class="text-red-500">*</span>
            </label>
            <input
                id="password"
                v-model="form.password"
                type="password"
                required
                class="w-full px-3 lg:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm lg:text-base"
                :class="{ 'border-red-500': form.errors.password }"
                placeholder="Enter new password (min. 8 characters)"
            />
            <p v-if="form.errors.password" class="mt-1 text-xs lg:text-sm text-red-600">
                {{ form.errors.password }}
            </p>
        </div>

        <!-- Confirm Password -->
        <div>
            <label for="password_confirmation" class="block text-sm font-medium text-gray-700 mb-2">
                Confirm New Password <span class="text-red-500">*</span>
            </label>
            <input
                id="password_confirmation"
                v-model="form.password_confirmation"
                type="password"
                required
                class="w-full px-3 lg:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm lg:text-base"
                placeholder="Confirm new password"
            />
        </div>

        <!-- Submit Button -->
        <div class="flex justify-end">
            <button
                type="submit"
                :disabled="form.processing"
                class="px-4 lg:px-6 py-2 lg:py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed text-sm lg:text-base"
            >
                <span v-if="form.processing">Updating Password...</span>
                <span v-else>Update Password</span>
            </button>
        </div>
    </form>
</template>

<style scoped>

</style>
