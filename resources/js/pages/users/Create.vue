<script setup>
import {Link, useForm} from "@inertiajs/vue3";

const form = useForm({
    name: null,
    email: null,
    image: null,
})
</script>

<template>
    <Head title="Create new user - "/>
    <div class="bg-white p-6">
        <div class="flex justify-between items-center mb-6 border-b border-gray-200">
            <div>
                <h1 class="text-3xl font-bold mb-4">Welcome to user creation Page</h1>
                <p class="text-gray-700">This is user creation page on the Inertia Challenge application.</p>
            </div>
            <div>
                <Link href="/users" class="btn btn-secondary mt-4">Go Back</Link>
            </div>
        </div>
        <div class="bg-base-200">
            <div class="hero-content">
                <div class="card bg-base-100 shadow-2xl">
                    <div class="card-body w-2xl">
                        <form @submit.prevent="form.post('/users')">
                            <div class="mb-3">
                                <label>Full Name</label>
                                <input type="text" v-model="form.name" class="input w-full" :class="{'validator':form.errors.name}" placeholder="Type full name"/>
                                <div v-if="form.errors.name" class="text-sm text-red-700">{{ form.errors.name }}</div>
                            </div>

                            <div class="mb-3">
                                <label>Email Address</label>
                                <input type="text" v-model="form.email" class="input w-full" :class="{'validator':form.errors.email}" placeholder="Type email address"/>
                                <div v-if="form.errors.email" class="text-sm text-red-700">{{ form.errors.email }}</div>
                            </div>

                            <div class="mb-3">
                                <label>Change Photo</label>
                                <input type="file" class="file-input w-full" @input="form.image = $event.target.files[0]" />
                                <progress class="w-full" v-if="form.progress" :value="form.progress.percentage" max="100">
                                    {{ form.progress.percentage }}%
                                </progress>
                                <div v-if="form.errors.image" class="text-sm text-red-700">{{ form.errors.image }}</div>
                            </div>

                            <button type="submit" class="btn btn-neutral w-full mt-4">Create New User</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
