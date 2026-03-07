<template>
    <div class="space-y-4">
        <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">{{ $t('forms.whatsapp') }}</label>
            <div class="relative">
                <span class="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-500 font-medium">+</span>
                <input type="tel" v-model="phone" placeholder="998901234567"
                    class="w-full rounded-lg border-gray-300 shadow-sm pl-10 pr-4 py-3 border focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all text-gray-900" />
            </div>

        </div>
        <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">{{ $t('forms.message') }} ({{
                $t('forms.optional') }})</label>
            <textarea v-model="message" rows="3" placeholder="Salom! Menga xizmatingiz yoqdi..."
                class="w-full rounded-lg border-gray-300 shadow-sm px-4 py-3 border focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all text-gray-900"></textarea>
        </div>
    </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { qrState } from '@/composables/useQrState'

const phone = ref('')
const message = ref('')

const updateQr = () => {
    const num = phone.value.trim().replace(/^\+/, '')
    if (!num) {
        qrState.data = 'https://wa.me/'
        return
    }

    let url = `https://wa.me/${num}`
    if (message.value.trim()) {
        url += `?text=${encodeURIComponent(message.value.trim())}`
    }
    qrState.data = url
}

onMounted(updateQr)
watch([phone, message], updateQr)
</script>
