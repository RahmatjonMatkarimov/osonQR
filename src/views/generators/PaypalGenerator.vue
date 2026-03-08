<template>
    <div class="space-y-4">
        <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">{{ $t('forms.paypalUsername') }}</label>
            <input type="text" v-model="username" placeholder="username"
                class="w-full rounded-lg border-gray-300 shadow-sm px-4 py-3 border focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all text-gray-900" />
            <p class="text-xs text-gray-500 mt-1">PayPal.me/username</p>
        </div>
    </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { qrState } from '@/composables/useQrState'

const username = ref('')

onMounted(() => {
    qrState.data = username.value ? `https://paypal.me/${username.value}` : 'https://paypal.me/'
})

watch(username, (val) => {
    qrState.data = val ? `https://paypal.me/${val}` : 'https://paypal.me/'
})
</script>
