<script setup>
import {Link, usePage} from "@inertiajs/vue3";

const page = usePage();
const user = page.props.user

const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    });
};
</script>

<template>
    <Head :title="`${user.name} Profile - `"/>
    <div class="bg-white p-6">
        <div class="flex justify-between items-center mb-6 border-b border-gray-200">
            <div>
                <h1 class="text-3xl font-bold mb-4">Welcome to {{ user.name }} profile Page</h1>
                <p class="text-gray-700">This is <b>{{ user.name }}</b> profile page on the Inertia Challenge application.</p>
            </div>
            <div>
                <Link href="/users" class="btn btn-secondary mt-4">Go Back</Link>
            </div>
        </div>

        <div class="bg-base-200">
            <div class="hero-content flex-col lg:flex-row">
                <img v-if="user.image_path" :src="`/storage/${user.image_path}`" alt="DP" class="max-w-sm rounded-lg shadow-2xl"/>
                <img v-else src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp" alt="DP" class="max-w-sm rounded-lg shadow-2xl"/>
                <div>
                    <h1 class="text-5xl font-bold">{{ user.name }}</h1>
                    <p class="py-6 text-3xl">Email: {{ user.email }}</p>
                    <p class="py-6 text-3xl">Registered On: {{ formatDate(user.created_at) }}</p>
                    <p class="py-6 text-3xl">Last Updated On: {{ formatDate(user.updated_at) }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
