<template>
    <div class="space-y-4">
        <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Google Play URL</label>
            <input type="url" v-model="url" placeholder="https://play.google.com/store/apps/details?id=..."
                class="w-full rounded-lg border-gray-300 shadow-sm px-4 py-3 border focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all text-gray-900" />
        </div>
    </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { qrState } from '@/composables/useQrState'

const url = ref('https://play.google.com/store/')

onMounted(() => {
    qrState.data = url.value
})

watch(url, (val) => {
    qrState.data = val || 'https://play.google.com/store/'
})
</script>
