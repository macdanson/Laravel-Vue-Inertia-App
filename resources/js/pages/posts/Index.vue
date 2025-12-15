<script setup>
import {Link, router, useForm} from "@inertiajs/vue3";
import {ref, watch} from "vue";
import debounce from 'lodash/debounce';
import Pagination from "@/layout/Pagination.vue";
const form = useForm({});

const props = defineProps({
    posts: Object,
    searchTerm: String
});

const search = ref(props.searchTerm || '');
watch(search, debounce((query) => {
    router.get('/posts', {search: query}, {preserveState: true});
}, 1000));

const deletingCommentId = ref(null);
const deleteComment = (comment) => {
    if (confirm(`Are you sure you want to delete this comment?`)) {
        deletingCommentId.value = comment.id;
        router.delete('/comments/'+comment.id, {
            preserveScroll: true,
            onFinish: () => deletingCommentId.value = null
        });
    }
};

</script>

<template>
    <Head title="Posts - "/>
    <div class="bg-white p-6">
        <div class="flex justify-between items-center mb-6 border-b border-gray-200">
            <div>
                <h1 class="text-3xl font-bold mb-4">Welcome to the posts Page ({{ posts.meta.total }})</h1>
                <p class="text-gray-700">This is the posts page of the Inertia Challenge application.</p>
            </div>
            <div class="relative w-full max-w-xs lg:max-w-sm mr-4">
                <input v-model="search" type="text" placeholder="Search by title or body..." class="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm lg:text-base"/>
                <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>
            <div>
                <Link href="/posts/create" class="btn btn-primary mt-4">Create New Post</Link>
            </div>
        </div>

        <!-- Blog Posts Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article v-for="(post, i) in posts.data" :key="i" class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div class="p-6">
                    <!-- Post Meta -->
                    <div class="flex justify-between items-center mb-4">
                        <span class="text-sm font-medium text-primary-600">{{ i+1 }} - {{ post.category }}</span>
                        <span class="text-sm text-gray-500">{{ post.time }}</span>
                    </div>

                    <!-- Post Title & Excerpt -->
                    <h3 class="text-xl font-bold text-gray-800 truncate mb-3">{{ post.title }}</h3>
                    <p class="text-gray-600 mb-6">{{ post.excerpt }}</p>

                    <!-- Author Info -->
                    <div class="flex items-center mb-6">
                        <img v-if="post.author.image_path" :src="`/storage/${post.author.image_path}`" alt="Author" class="w-10 h-10 rounded-full mr-3">
                        <img v-else src="https://i.pravatar.cc/40?img=1" alt="Author" class="w-10 h-10 rounded-full mr-3">
                        <div>
                            <p class="font-medium text-gray-800">{{ post.author.name }}</p>
                            <p class="text-sm text-gray-500">{{ post.author.email }}</p>
                        </div>
                    </div>

                    <!-- Comments Section -->
                    <div class="border-t pt-5">
                        <div class="flex justify-between items-center mb-4">
                            <h4 class="font-medium text-gray-800">Latest Comments</h4>
                            <span class="text-xs bg-primary-50 text-primary-700 px-2 py-1 rounded-full">{{ post.comments.length }} comments</span>
                        </div>

                        <div class="space-y-4">
                            <!-- Comment 1 -->
                            <div v-for="(comment, c) in post.comments" :key="c" class="flex">
                                <img v-if="comment.author.image_path" :src="`/storage/${comment.author.image_path}`" alt="Commenter" class="w-8 h-8 rounded-full mr-3 shrink-0">
                                <img v-else src="https://i.pravatar.cc/32?img=5" alt="Commenter" class="w-8 h-8 rounded-full mr-3 shrink-0">
                                <div>
                                    <p class="font-medium text-sm text-gray-800">{{ comment.author.name }}</p>
                                    <p class="text-sm text-gray-600">{{ comment.comment }}</p>
                                    <p class="text-xs text-gray-400 mt-1">{{ comment.date }}</p>
                                </div>
                                <button class="btn btn-sm btn-circle btn-error" @click="deleteComment(comment)" :disabled="form.processing && deletingCommentId === comment.id">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div class="mt-5 pt-4 border-t">
                            <button class="w-full text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center justify-center">
                                <i class="fas fa-comment mr-2"></i> Add a comment
                            </button>
                        </div>
                    </div>
                </div>
            </article>
        </div>
        <div>
            <Pagination :metaData="posts.meta" class="mt-6"/>
        </div>
    </div>
</template>

<style scoped>

</style>
