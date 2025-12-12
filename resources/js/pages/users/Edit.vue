<script setup>
import {Link, useForm, usePage} from "@inertiajs/vue3";

const page = usePage();
const user = page.props.user

const form = useForm({
    name: user.name,
    email: user.email,
    avatar: user.image_path,
    image: null,
})


</script>

<template>
    <Head :title="`Edit ${user.name} details - `"/>
    <div class="bg-white p-6">
        <div class="flex justify-between items-center mb-6 border-b border-gray-200">
            <div>
                <h1 class="text-3xl font-bold mb-4">Welcome to {{ user.name }} profile editing Page</h1>
                <p class="text-gray-700">This is <b>{{ user.name }}</b> profile editing page on the Inertia Challenge application.</p>
            </div>
            <div>
                <Link href="/users" class="btn btn-secondary mt-4">Go Back</Link>
            </div>
        </div>
        <div class="bg-base-200">
            <div class="hero-content">
                <div class="card bg-base-100 shadow-2xl">
                    <div class="card-body w-2xl">
                        <div class="avatar text-center">
                            <div class="w-24 rounded">
                                <img v-if="user.image_path" alt="avatar" :src="`/storage/${user.image_path}`" />
                                <img v-else alt="avatar" src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
                            </div>
                        </div>

                        <form @submit.prevent="form.put(`/users/${user.id}`)">
                            <div class="fieldset mb-2">
                                <label class="label">Full Name</label>
                                <input type="text" v-model="form.name" class="input w-full" placeholder="Type full name" />
                            </div>

                            <div class="fieldset mb-2">
                                <label class="label">Email Address</label>
                                <input type="text" v-model="form.email" class="input w-full" placeholder="Type email address" />
                            </div>

                            <div class="fieldset mb-2">
                                <label class="label">Change Photo</label>
                                <input type="file" class="file-input w-full" @input="form.image = $event.target.files[0]" />
                                <progress class="w-full" v-if="form.progress" :value="form.progress.percentage" max="100">
                                    {{ form.progress.percentage }}%
                                </progress>
                            </div>

                            <button type="submit" class="btn btn-neutral w-full mt-4">Update User</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
