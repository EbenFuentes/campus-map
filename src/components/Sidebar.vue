<script setup>
defineProps({
    isOpen: {
        type: Boolean,
        default: true
    }
})
</script>

<template>
    <aside
        :class="isOpen ? 'w-72' : 'w-0'"
        class="h-full bg-gray-100 overflow-hidden transition-all duration-300 flex-shrink-0"
    >
        <div class="p-4 w-72">
            <h2 class="text-lg font-bold mb-4">Campus Buildings</h2>

            <input
                type="text"
                placeholder="Search for a building..."
                class="w-full px-3 py-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <div class="space-y-2">
                <p class="text-gray-500 text-sm"></p>
            </div>
        </div>
    </aside>
</template>

<style scoped></style>
