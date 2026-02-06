<script setup>
defineProps({
    sidebarOpen: {
        type: Boolean,
        default: true
    }
})

const emit = defineEmits(['toggle-sidebar'])
</script>

<template>
    <header class="h-14 bg-black text-white flex items-center px-4 flex-shrink-0">
        <button
            @click="emit('toggle-sidebar')"
            class="p-2 hover:bg-gray-800 rounded-lg transition-colors mr-4"
        >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </button>

        <h1 class="text-xl font-bold">CSULA Campus Map</h1>

        <div class="flex-grow"></div>

        <nav class="flex gap-2">
            <button class="px-3 py-1 hover:bg-gray-800 rounded-lg transition-colors">
                About
            </button>
            <button class="px-3 py-1 hover:bg-gray-800 rounded-lg transition-colors">
                Help
            </button>
        </nav>
    </header>
</template>

<style scoped></style>
