<template>
    <div class="space-y-4">
        <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">{{ $t('forms.phone') }}</label>
            <input type="tel" v-model="phone" placeholder="+1234567890"
                class="w-full rounded-lg border-gray-300 shadow-sm px-4 py-3 border focus:ring-2 focus:ring-brand-500 outline-none transition-all text-gray-900" />
        </div>

        <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">{{ $t('forms.message') }}</label>
            <textarea v-model="message" rows="4" placeholder="Your text message here..."
                class="w-full rounded-lg border-gray-300 shadow-sm px-4 py-3 border focus:ring-2 focus:ring-brand-500 outline-none transition-all text-gray-900 resize-none"></textarea>
        </div>
    </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { qrState } from '@/composables/useQrState'

const phone = ref('')
const message = ref('')

const updateQr = () => {
    if (!phone.value) {
        qrState.data = 'sms:'
        return
    }

    let str = `sms:${phone.value}`

    if (message.value) {
        str += `?body=${encodeURIComponent(message.value)}`
    }

    qrState.data = str
}

onMounted(updateQr)
watch([phone, message], updateQr)
</script>
