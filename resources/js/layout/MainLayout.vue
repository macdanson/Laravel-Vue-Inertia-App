<script setup>
import {Link, usePage} from "@inertiajs/vue3";
import {computed, ref, watch} from "vue";
import {ElMessage} from "element-plus";

const props = defineProps({
    errors: Object,
    appName: String,
    auth: Object,
    flash: Object
})

const page = usePage()
const successMessage = computed(() => page.props.flash.message)

watch(successMessage, (newMessage) => {
    if (newMessage){
        ElMessage({
            message: newMessage,
            showClose: true,
            type: 'success',
            placement: "top-right",
            duration: 5000,
            customClass: 'bg-gray-800 text-white'
        })
    }else {
        console.log('No new message')
    }
})
</script>

<template>
    <div class="drawer lg:drawer-open">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
            <!-- Navbar -->
            <nav class="navbar w-full bg-base-300">
                <label for="my-drawer" aria-label="open sidebar" class="btn btn-square btn-ghost">
                    <!-- Sidebar toggle icon -->
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor" class="my-1.5 inline-block size-4"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>
                </label>
                <div class="flex-1">
                    <span class="text-xl font-bold"> {{ $page.props.appName }}</span>
                </div>
                <div class="flex gap-2">
                    <div class="dropdown dropdown-end">
                        <div role="button" class="flex items-center space-x-2 p-1" tabindex="0">
                            <!-- Avatar -->
                            <img v-if="$page.props.auth.user.image_path" class="w-10 h-10 rounded-full object-cover" :src="`/storage/${$page.props.auth.user.image_path}`" alt="User avatar"/>
                            <img v-else class="w-10 h-10 rounded-full object-cover" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="User avatar"/>

                            <!-- User Info -->
                            <div>
                                <p class="text-sm font-medium text-gray-900">{{ $page.props.auth.user.name }}</p>
                                <p class="text-xs text-gray-500">{{ $page.props.auth.user.email }}</p>
                            </div>
                        </div>
                        <ul tabindex="-1" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <Link href="/profile" class="justify-between">
                                    Profile
                                </Link>
                            </li>
                            <li><Link href="/profile">Settings</Link></li>
                            <li><Link href="/logout" method="post" as="button">Logout</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <!-- Page content here -->
            <main class="grow">
                <slot />
            </main>
        </div>

        <div class="drawer-side is-drawer-close:overflow-visible">
            <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
            <div class="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
                <!-- Sidebar content here -->
                <ul class="menu w-full grow">
                    <li>
                        <Link href="/" class="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Home Page">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
                            </svg>
                            <span class="is-drawer-close:hidden">Home Page</span>
                        </Link>
                    </li>

                    <li>
                        <Link href="/users" class="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Users">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                            </svg>
                            <span class="is-drawer-close:hidden">Users</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/posts" class="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Posts">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                            </svg>
                            <span class="is-drawer-close:hidden">Posts</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/products" class="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Products">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 13.5H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                            </svg>
                            <span class="is-drawer-close:hidden">Products</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/signatures" class="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Guestbook">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                            </svg>
                            <span class="is-drawer-close:hidden">Guestbook</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
