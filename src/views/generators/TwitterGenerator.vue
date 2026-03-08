<template>
    <div class="space-y-4">
        <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">{{ $t('forms.twitterUsername') }}</label>
            <div class="relative flex items-center">
                <span class="absolute left-4 text-gray-400">@</span>
                <input type="text" v-model="username" :placeholder="$t('forms.optional')"
                    class="w-full rounded-lg border-gray-300 shadow-sm pl-9 pr-4 py-3 border focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all text-gray-900" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { qrState } from '@/composables/useQrState'

const username = ref('')

onMounted(() => {
    qrState.data = `https://twitter.com/${username.value}`
})

watch(username, (val) => {
    qrState.data = val ? `https://twitter.com/${val}` : 'https://twitter.com/'
})
</script>
