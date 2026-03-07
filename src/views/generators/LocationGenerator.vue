<template>
    <div class="space-y-4">
        <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Kenglik (Latitude)</label>
            <input type="number" step="any" v-model="lat" placeholder="Yozing... (masalan: 41.2995)"
                class="w-full rounded-lg border-gray-300 shadow-sm px-4 py-3 border focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all text-gray-900 mb-4" />

            <label class="block text-sm font-medium text-gray-700 mb-1">Uzunlik (Longitude)</label>
            <input type="number" step="any" v-model="lng" placeholder="Yozing... (masalan: 69.2401)"
                class="w-full rounded-lg border-gray-300 shadow-sm px-4 py-3 border focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all text-gray-900" />
        </div>
        <div class="text-xs text-brand-600 bg-brand-50 p-3 rounded-lg flex items-start">
            <svg class="w-4 h-4 mr-2 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <p>Google xaritalaridan lokatsiya kordinatalarini (Latitude, Longitude) ko'chirib formani to'ldiring.</p>
        </div>
    </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { qrState } from '@/composables/useQrState'

const lat = ref('')
const lng = ref('')

const updateQr = () => {
    const l1 = lat.value.toString().trim()
    const l2 = lng.value.toString().trim()
    if (l1 && l2) {
        qrState.data = `https://maps.google.com/?q=${l1},${l2}`
    } else {
        qrState.data = 'https://maps.google.com/'
    }
}

onMounted(updateQr)
watch([lat, lng], updateQr)
</script>
