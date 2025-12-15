<script setup>
import {router, useForm} from "@inertiajs/vue3";
import {ref, watch} from "vue";
import debounce from 'lodash/debounce';
import Pagination from "@/layout/Pagination.vue";

  const props = defineProps({
      searchTerm: String,
      signatures: Object
  })

  const search = ref(props.searchTerm || '');
  watch(search, debounce((query) => {
      router.get('/signatures', {search: query}, {preserveState: true});
  }, 1000));

const form = useForm({
    name: null,
    email: null,
    message: null
});
</script>

<template>
    <Head title="Signatures - "/>
    <div class="bg-white p-6">
        <div class="flex justify-between items-center border-b border-gray-200">
            <div>
                <h1 class="text-3xl font-bold mb-4">Welcome to the Guestbook Page</h1>
                <p class="text-gray-700">This is the Guestbook page on the Inertia Challenge application.</p>
            </div>
        </div>

        <!-- Form Section -->
        <div class="bg-white rounded-xl shadow-md p-6 mb-8">
            <!-- Horizontal Form -->
            <form @submit.prevent="form.post('/signatures', {
                onSuccess: () => {
                    form.reset();
                }
            })" class="space-y-6">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 items-end">
                    <!-- Name Field -->
                    <div class="lg:col-span-3">
                        <label for="name">Full Name</label>
                        <div class="relative">
                            <input type="text" id="name" v-model="form.name" class="input transition" placeholder="John Doe" required>
                        </div>
                        <div v-if="form.errors.name" class="text-sm text-red-700">{{ form.errors.name }}</div>
                    </div>

                    <!-- Email Field -->
                    <div class="lg:col-span-3">
                        <label for="email">Email Address</label>
                        <div class="relative">
                            <input type="email" id="email" v-model="form.email" class="input transition" placeholder="john@example.com" required>
                        </div>
                        <div v-if="form.errors.name" class="text-sm text-red-700">{{ form.errors.email }}</div>
                    </div>

                    <!-- Message Field -->
                    <div class="lg:col-span-4">
                        <label for="message">Message</label>
                        <div class="relative">
                            <input type="text" id="message" v-model="form.message" class="input w-full transition" placeholder="Enter your message here..." required>
                        </div>
                        <div v-if="form.errors.name" class="text-sm text-red-700">{{ form.errors.message }}</div>
                    </div>

                    <!-- Submit Button -->
                    <div class="lg:col-span-2">
                        <button type="submit" class="btn btn-primary w-full">
                            Send Message
                        </button>
                    </div>
                </div>
            </form>
        </div>

        <!-- Messages Table Section -->
        <div class="bg-white rounded-xl shadow-md overflow-hidden">
            <div class="px-6 py-4 border-b border-gray-200">
                <div class="flex justify-between items-center">
                    <h2 class="text-xl font-bold text-gray-800">Submitted Signatures</h2>
                    <input type="text" class="input w-1/3" v-model="search" placeholder="Search by name or email or message...">
                </div>
            </div>

            <!-- Table Container -->
            <div class="overflow-x-auto">
                <table class="w-full">
                    <thead class="bg-gray-50">
                    <tr>
                        <th class="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            <div class="flex items-center">
                                <span>Name</span>
                                <button class="ml-1 text-gray-400 hover:text-gray-600">
                                    <i class="fas fa-sort"></i>
                                </button>
                            </div>
                        </th>
                        <th class="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            <div class="flex items-center">
                                <span>Email</span>
                                <button class="ml-1 text-gray-400 hover:text-gray-600">
                                    <i class="fas fa-sort"></i>
                                </button>
                            </div>
                        </th>
                        <th class="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            <div class="flex items-center">
                                <span>Message</span>
                                <button class="ml-1 text-gray-400 hover:text-gray-600">
                                    <i class="fas fa-sort"></i>
                                </button>
                            </div>
                        </th>
                        <th class="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            <div class="flex items-center">
                                <span>Date</span>
                                <button class="ml-1 text-gray-400 hover:text-gray-600">
                                    <i class="fas fa-sort"></i>
                                </button>
                            </div>
                        </th>
                        <th class="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            <div class="flex items-center">
                                <span>Status</span>
                            </div>
                        </th>
                        <th class="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                        </th>
                    </tr>
                    </thead>
                    <tbody id="messagesTable" class="bg-white divide-y divide-gray-200">
                    <tr v-for="(signature, index) in signatures.data" :key="index">
                        <td class="py-4 px-6 whitespace-nowrap">
                            <div class="text-sm font-medium text-gray-900">{{ signature.name }}</div>
                        </td>
                        <td class="py-4 px-6 whitespace-nowrap">
                            <div class="text-sm text-gray-500">{{ signature.email }}</div>
                        </td>
                        <td class="py-4 px-6 whitespace-nowrap">
                            <div class="text-sm text-gray-500">{{ signature.message }}</div>
                        </td>
                        <td class="py-4 px-6 whitespace-nowrap">
                            <div class="text-sm text-gray-500">{{ new Date(signature.created_at).toLocaleDateString() }}</div>
                        </td>
                        <td class="py-4 px-6 whitespace-nowrap">
                            <span
                                :class="signature.approved ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'"
                                class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
                            >
                                {{ signature.approved ? 'Approved' : 'Pending' }}
                            </span>
                        </td>
                        <td class="py-4 px-6 whitespace-nowrap text-sm font-medium">
                            <button class="text-blue-600 hover:text-blue-900 me-2">Edit</button>
                            <button class="text-red-600 hover:text-red-900">Delete</button>
                        </td>
                    </tr>
                    </tbody>
                </table>

                <!-- Empty State -->
                <div id="emptyState" class="hidden py-12 text-center">
                    <div class="mb-4">
                        <i class="fas fa-inbox text-4xl text-gray-300"></i>
                    </div>
                    <h3 class="text-lg font-medium text-gray-700 mb-1">No messages yet</h3>
                    <p class="text-gray-500 max-w-md mx-auto">Submit your first message using the form above to see it appear here.</p>
                </div>
            </div>

            <!-- Table Footer -->
            <div>
                <Pagination :metaData="signatures.meta" class="mt-6"/>
            </div>
        </div>
    </div>
</template>
