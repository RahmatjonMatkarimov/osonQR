<template>
    <div class="space-y-4">
        <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Surat / Rasm fayli manzili</label>
            <input type="url" v-model="url" placeholder="https://example.com/rasm.jpg"
                class="w-full rounded-lg border-gray-300 shadow-sm px-4 py-3 border focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all text-gray-900" />
        </div>
        <div class="text-xs text-brand-600 bg-brand-50 p-3 rounded-lg flex items-start">
            <svg class="w-4 h-4 mr-2 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <p>OsonQR - bu xavfsiz ochiq xizmat. Rasm fayllaringizni ochiq bulutli xotiraga yuklab olish url manzilini
                tashlang.</p>
        </div>
    </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { qrState } from '@/composables/useQrState'

const url = ref('')

const updateQr = () => {
    let finalUrl = url.value.trim()
    if (finalUrl && !/^https?:\/\//i.test(finalUrl)) {
        finalUrl = 'https://' + finalUrl
    }
    qrState.data = finalUrl || 'https://'
}

onMounted(updateQr)
watch(url, updateQr)
</script>
