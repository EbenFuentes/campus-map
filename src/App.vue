<script setup>
import { ref } from 'vue'
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'

const sidebarOpen = ref(true)

const toggleSidebar = () => {
    sidebarOpen.value = !sidebarOpen.value
}
</script>

<template>
    <div class="h-screen w-full flex flex-col">
        <Header :sidebar-open="sidebarOpen" @toggle-sidebar="toggleSidebar" />

        <div class="flex flex-1 overflow-hidden">
            <Sidebar :is-open="sidebarOpen" />

            <main class="flex-1">
                <RouterView class="h-full w-full" />
            </main>
        </div>
    </div>
</template>

<style>
/* Global styles for full viewport coverage */
</style>
