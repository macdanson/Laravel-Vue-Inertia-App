<script setup xmlns="http://www.w3.org/1999/html">
import {Link, useForm} from "@inertiajs/vue3";

  defineProps({
      categories: Array
  })
  const form = useForm({
      name: null,
      stock: null,
      price: null,
      description: null,
      category: null,
  })
</script>

<template>
    <Head title="Create new product - "/>
    <div class="bg-white p-6">
        <div class="flex justify-between items-center mb-6 border-b border-gray-200">
            <div>
                <h1 class="text-3xl font-bold mb-4">Welcome to product creation Page</h1>
                <p class="text-gray-700">This is product creation page on the Inertia Challenge application.</p>
            </div>
            <div>
                <Link href="/products" class="btn btn-secondary mt-4">Go Back</Link>
            </div>
        </div>
        <div class="bg-base-200">
            <div class="hero-content">
                <div class="card bg-base-100 shadow-2xl">
                    <div class="card-body w-2xl">
                        <form @submit.prevent="form.post('/products', {
                            preserveScroll: true,
                            onSuccess: () => {
                                form.reset();
                            }
                        })">
                            <div class="mb-3">
                                <label>Product Name</label>
                                <input type="text" v-model="form.name" class="input w-full" :class="{'validator':form.errors.name}" placeholder="Type product name"/>
                                <div v-if="form.errors.name" class="text-sm text-red-700">{{ form.errors.name }}</div>
                            </div>

                            <div class="mb-3">
                                <label>Product Category</label>
                                <el-select v-model="form.category" size="large" class="w-full" filterable placeholder="Select Product Category" :class="{'validator':form.errors.category}">
                                    <el-option v-for="item in categories" :key="item.id" :label="item.name" :value="item.id"/>
                                </el-select>
                                <div v-if="form.errors.category" class="text-sm text-red-700">{{ form.errors.category }}</div>
                            </div>

                            <div class="mb-3">
                                <label>Product Price</label>
                                <input type="number" v-model="form.price" class="input w-full" :class="{'validator':form.errors.price}" placeholder="Type product price"/>
                                <div v-if="form.errors.price" class="text-sm text-red-700">{{ form.errors.price }}</div>
                            </div>

                            <div class="mb-3">
                                <label>Product Stock</label>
                                <input type="number" v-model="form.stock" class="input w-full" :class="{'validator':form.errors.stock}" placeholder="Type product stock"/>
                                <div v-if="form.errors.stock" class="text-sm text-red-700">{{ form.errors.stock }}</div>
                            </div>

                            <div class="mb-3">
                                <label>Product Description</label>
                                <textarea v-model="form.description" class="textarea w-full" :class="{'validator':form.errors.description}" placeholder="Type product description" rows="4">
                                </textarea>
                                <div v-if="form.errors.description" class="text-sm text-red-700">{{ form.errors.description }}</div>
                            </div>

                            <button type="submit" class="btn btn-neutral w-full mt-4">Create New Product</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
