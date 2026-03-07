<template>
    <div class="space-y-4">
        <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">{{ $t('forms.text') }}</label>
            <textarea v-model="text" rows="5" placeholder="Hello World!"
                class="w-full rounded-lg border-gray-300 shadow-sm px-4 py-3 border focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all text-gray-900 resize-none"></textarea>
        </div>
    </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { qrState } from '@/composables/useQrState'

const text = ref('')

onMounted(() => {
    qrState.data = text.value || ' '
})

watch(text, (val) => {
    qrState.data = val || ' '
})
</script>
