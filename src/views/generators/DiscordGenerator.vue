<template>
    <div class="space-y-4">
        <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Discord Server Invite URL / Username</label>
            <input type="url" v-model="url" placeholder="https://discord.gg/invitecode"
                class="w-full rounded-lg border-gray-300 shadow-sm px-4 py-3 border focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all text-gray-900" />
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
    qrState.data = finalUrl || 'https://discord.com/'
}

onMounted(updateQr)
watch(url, updateQr)
</script>
