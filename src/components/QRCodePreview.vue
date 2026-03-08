<template>
  <div class="flex flex-col items-center justify-center w-full">
    <div
      class="bg-white sm:p-6 rounded-2xl shadow-md w-full max-w-[350px] aspect-square flex items-center justify-center relative shadow-brand-100"
      ref="qrContainer">
      <!-- QR code will be appended here -->
    </div>

    <!-- Download Buttons -->
    <div class="mt-8 p-4 sm:p-6 flex gap-4 w-full">
      <button @click="download('png')"
        class="flex-1 bg-brand-600 text-white font-medium py-3 px-4 rounded-xl hover:bg-brand-700 transition-colors shadow-sm focus:ring-4 focus:ring-brand-100 flex items-center justify-center gap-2">
        <ArrowDownTrayIcon class="w-5 h-5" /> {{ $t('generator.download.png') }}
      </button>
      <button @click="download('svg')"
        class="flex-1 bg-white text-gray-700 font-medium py-3 px-4 rounded-xl hover:bg-gray-50 transition-colors shadow-sm border border-gray-200 focus:ring-4 focus:ring-gray-100 flex items-center justify-center gap-2">
        <ArrowDownTrayIcon class="w-5 h-5" /> {{ $t('generator.download.svg') }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import QRCodeStyling from 'qr-code-styling'
import { qrState } from '@/composables/useQrState'
import { ArrowDownTrayIcon } from '@heroicons/vue/24/outline'

const qrContainer = ref(null)

const createQrCode = () => {
  return new QRCodeStyling({
    width: 300,
    height: 300,
    data: qrState.data || 'https://example.com',
    margin: 10,
    image: qrState.logoUrl || null,
    dotsOptions: {
      color: qrState.colors.dark,
      type: qrState.shapes?.body || "rounded"
    },
    cornersSquareOptions: {
      color: qrState.colors.dark,
      type: qrState.shapes?.eyeFrame || "extra-rounded"
    },
    cornersDotOptions: {
      color: qrState.colors.dark,
      type: qrState.shapes?.eyeBall || "dot"
    },
    backgroundOptions: {
      color: qrState.colors.light,
    },
    imageOptions: {
      crossOrigin: "anonymous",
      margin: 10
    }
  })
}

let qrCode = null
let debounceTimeout = null

onMounted(() => {
  qrCode = createQrCode()
  qrCode.append(qrContainer.value)
})

watch(() => qrState, () => {
  if (qrCode) {
    clearTimeout(debounceTimeout)
    debounceTimeout = setTimeout(() => {
      qrCode.update({
        data: qrState.data || 'https://example.com',
        image: qrState.logoUrl || null,
        dotsOptions: {
          color: qrState.colors.dark,
          type: qrState.shapes?.body || "rounded"
        },
        cornersSquareOptions: {
          color: qrState.colors.dark,
          type: qrState.shapes?.eyeFrame || "extra-rounded"
        },
        cornersDotOptions: {
          color: qrState.colors.dark,
          type: qrState.shapes?.eyeBall || "dot"
        },
        backgroundOptions: {
          color: qrState.colors.light
        }
      })
    }, 250) // Debounce rendering by 250ms to prevent lag
  }
}, { deep: true })

const download = (extension) => {
  if (!qrCode) return
  qrCode.download({ name: 'qr-code', extension })
}
</script>
