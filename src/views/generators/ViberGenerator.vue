<template>
    <div class="space-y-4">
        <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">{{ $t('forms.viberPhone') }}</label>
            <input type="tel" v-model="phone" placeholder="+998901234567"
                class="w-full rounded-lg border-gray-300 shadow-sm px-4 py-3 border focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all text-gray-900" />
        </div>
    </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { qrState } from '@/composables/useQrState'

const phone = ref('')

onMounted(() => {
    qrState.data = phone.value ? `viber://add?number=${phone.value.replace(/\+/g, '')}` : 'viber://add?number='
})

watch(phone, (val) => {
    const cleanPhone = val.replace(/\+/g, '')
    qrState.data = cleanPhone ? `viber://add?number=${cleanPhone}` : 'viber://add?number='
})
</script>
