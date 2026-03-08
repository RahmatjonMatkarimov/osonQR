<template>
    <div class="space-y-4">
        <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Snapchat Username</label>
            <input type="text" v-model="username" placeholder="username"
                class="w-full rounded-lg border-gray-300 shadow-sm px-4 py-3 border focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all text-gray-900" />
        </div>
    </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { qrState } from '@/composables/useQrState'

const username = ref('')

onMounted(() => {
    qrState.data = `https://www.snapchat.com/add/${username.value}`
})

watch(username, (val) => {
    qrState.data = val ? `https://www.snapchat.com/add/${val}` : 'https://www.snapchat.com/add/'
})
</script>
