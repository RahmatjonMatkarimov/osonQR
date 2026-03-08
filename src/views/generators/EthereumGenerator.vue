<template>
    <div class="space-y-4">
        <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Ethereum Address</label>
            <input type="text" v-model="address" placeholder="0x71C7656EC7ab88b098defB751B7401B5f6d8976F"
                class="w-full rounded-lg border-gray-300 shadow-sm px-4 py-3 border focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all text-gray-900" />
        </div>
    </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { qrState } from '@/composables/useQrState'

const address = ref('')

onMounted(() => {
    qrState.data = `ethereum:${address.value}`
})

watch(address, (val) => {
    qrState.data = `ethereum:${val}`
})
</script>
