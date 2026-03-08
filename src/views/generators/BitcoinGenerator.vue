<template>
    <div class="space-y-4">
        <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Bitcoin Address</label>
            <input type="text" v-model="address" placeholder="1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"
                class="w-full rounded-lg border-gray-300 shadow-sm px-4 py-3 border focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all text-gray-900" />
        </div>
    </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { qrState } from '@/composables/useQrState'

const address = ref('')

onMounted(() => {
    qrState.data = `bitcoin:${address.value}`
})

watch(address, (val) => {
    qrState.data = `bitcoin:${val}`
})
</script>
