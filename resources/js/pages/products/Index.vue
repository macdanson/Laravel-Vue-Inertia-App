<script setup>
import {Link, router, useForm} from "@inertiajs/vue3";
import {ref, watch} from "vue";
import debounce from 'lodash/debounce';
import Pagination from "@/layout/Pagination.vue";
const form = useForm({});

const props = defineProps({
    products: Object,
    searchTerm: String
});
const deletingProductId = ref(null);

const search = ref(props.searchTerm || '');
watch(search, debounce((query) => {
    router.get('/products', {search: query}, {preserveState: true});
}, 1000));

const deleteProduct = (product) => {
    if (confirm(`Are you sure you want to delete "${product.name}"?`)) {
        deletingProductId.value = product.id;
        router.delete('/products/'+product.id, {
            preserveScroll: true,
            onFinish: () => deletingProductId.value = null
        });
    }
};

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
    <Head title="Products - "/>
    <div class="bg-white p-6">
        <div class="flex justify-between items-center mb-6 border-b border-gray-200">
            <div>
                <h1 class="text-3xl font-bold mb-4">Welcome to the products Page ({{ products.meta.total }})</h1>
                <p class="text-gray-700">This is the products page of the Inertia Challenge application.</p>
            </div>
            <div class="relative w-full max-w-xs lg:max-w-sm mr-4">
                <input
                    v-model="search"
                    type="text"
                    placeholder="Search by name or description..."
                    class="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm lg:text-base"
                />
                <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>
            <div>
                <Link href="/products/create" class="btn btn-primary mt-4">Create New Product</Link>
            </div>
        </div>

        <div class="overflow-x-auto">
            <table class="table">
                <!-- head -->
                <thead>
                <tr>
                    <th>S/N</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th class="text-center">Action</th>
                </tr>
                </thead>
                <tbody>
                <!-- row -->
                <tr v-for="(product, i) in products.data" :key="i">
                    <th>{{ i + 1 }}.</th>
                    <td>
                        <div class="font-bold">{{ product.name }}</div>
                    </td>
                    <td>{{ product.price }}</td>
                    <td>
                        {{ product.category.name }}
                    </td>
                    <td>
                        {{ product.description }}
                    </td>
                    <td class="text-right">
                        <Link :href="`/products/${ product.id }`" class="btn btn-sm btn-primary me-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                                 class="size-4">
                                <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"/>
                                <path fill-rule="evenodd"
                                      d="M1.38 8.28a.87.87 0 0 1 0-.566 7.003 7.003 0 0 1 13.238.006.87.87 0 0 1 0 .566A7.003 7.003 0 0 1 1.379 8.28ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                      clip-rule="evenodd"/>
                            </svg>
                            Details
                        </Link>
                        <Link :href="`/products/${ product.id }/edit`" class="btn btn-sm btn-info me-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                                 class="size-4">
                                <path
                                    d="M13.488 2.513a1.75 1.75 0 0 0-2.475 0L6.75 6.774a2.75 2.75 0 0 0-.596.892l-.848 2.047a.75.75 0 0 0 .98.98l2.047-.848a2.75 2.75 0 0 0 .892-.596l4.261-4.262a1.75 1.75 0 0 0 0-2.474Z"/>
                                <path
                                    d="M4.75 3.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25V9A.75.75 0 0 1 14 9v2.25A2.75 2.75 0 0 1 11.25 14h-6.5A2.75 2.75 0 0 1 2 11.25v-6.5A2.75 2.75 0 0 1 4.75 2H7a.75.75 0 0 1 0 1.5H4.75Z"/>
                            </svg>
                            Edit
                        </Link>
                        <button class="btn btn-sm btn-error" @click="deleteProduct(product)" :disabled="form.processing && deletingProductId === product.id">
                            <span v-if="form.processing && deletingProductId === product.id">
                                <span class="loading loading-spinner"></span> Deleting...
                            </span>
                            <span v-else class="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
                                <path fill-rule="evenodd" d="M5 3.25V4H2.75a.75.75 0 0 0 0 1.5h.3l.815 8.15A1.5 1.5 0 0 0 5.357 15h5.285a1.5 1.5 0 0 0 1.493-1.35l.815-8.15h.3a.75.75 0 0 0 0-1.5H11v-.75A2.25 2.25 0 0 0 8.75 1h-1.5A2.25 2.25 0 0 0 5 3.25Zm2.25-.75a.75.75 0 0 0-.75.75V4h3v-.75a.75.75 0 0 0-.75-.75h-1.5ZM6.05 6a.75.75 0 0 1 .787.713l.275 5.5a.75.75 0 0 1-1.498.075l-.275-5.5A.75.75 0 0 1 6.05 6Zm3.9 0a.75.75 0 0 1 .712.787l-.275 5.5a.75.75 0 0 1-1.498-.075l.275-5.5a.75.75 0 0 1 .786-.711Z" clip-rule="evenodd"/>
                            </svg>
                                Delete
                            </span>
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>
            <div>
                <Pagination :links="products.meta.links" :from="products.meta.from" :to="products.meta.to" :total="products.meta.total" class="mt-6"/>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
