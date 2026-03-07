<template>
    <div class="space-y-4">
        <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">{{ $t('forms.tgUsername') }}</label>
            <div class="relative">
                <span class="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-500 font-medium">@</span>
                <input type="text" v-model="username" placeholder="username"
                    class="w-full rounded-lg border-gray-300 shadow-sm pl-10 pr-4 py-3 border focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all text-gray-900" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { qrState } from '@/composables/useQrState'

const username = ref('')

const updateQr = () => {
    const user = username.value.trim().replace(/^@/, '')
    qrState.data = user ? `https://t.me/${user}` : 'https://t.me/'
}

onMounted(updateQr)
watch(username, updateQr)
</script>
