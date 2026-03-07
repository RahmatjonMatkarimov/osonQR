<template>
    <div class="space-y-4">
        <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">{{ $t('forms.emailTo') }}</label>
            <input type="email" v-model="email" placeholder="hello@example.com"
                class="w-full rounded-lg border-gray-300 shadow-sm px-4 py-3 border focus:ring-2 focus:ring-brand-500 outline-none transition-all text-gray-900" />
        </div>

        <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">{{ $t('forms.subject') }}</label>
            <input type="text" v-model="subject" placeholder="Your Subject"
                class="w-full rounded-lg border-gray-300 shadow-sm px-4 py-3 border focus:ring-2 focus:ring-brand-500 outline-none transition-all text-gray-900" />
        </div>

        <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">{{ $t('forms.message') }}</label>
            <textarea v-model="body" rows="4" placeholder="Type your message here..."
                class="w-full rounded-lg border-gray-300 shadow-sm px-4 py-3 border focus:ring-2 focus:ring-brand-500 outline-none transition-all text-gray-900 resize-none"></textarea>
        </div>
    </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { qrState } from '@/composables/useQrState'

const email = ref('')
const subject = ref('')
const body = ref('')

const updateQr = () => {
    if (!email.value) {
        qrState.data = 'mailto:'
        return
    }

    let str = `mailto:${email.value}`
    const params = []

    if (subject.value) params.push(`subject=${encodeURIComponent(subject.value)}`)
    if (body.value) params.push(`body=${encodeURIComponent(body.value)}`)

    if (params.length > 0) {
        str += '?' + params.join('&')
    }

    qrState.data = str
}

onMounted(updateQr)
watch([email, subject, body], updateQr)
</script>
