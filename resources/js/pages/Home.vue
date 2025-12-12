<script setup>

</script>

<template>
<Head title="Home - "/>
    <div class="bg-white p-6">
        <h1 class="text-3xl font-bold mb-4">Welcome to the {{ $page.component}} Page</h1>
        <p class="text-gray-700">This is the {{ $page.component}} page of the Inertia Challenge application.</p>
        {{ $page.props }}
    </div>
</template>

<style scoped>

</style>
