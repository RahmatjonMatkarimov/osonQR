<template>
  <div class="max-w-7xl mx-auto px-4 py-12">
    <div class="grid lg:grid-cols-[1fr_400px] gap-8 items-start">
      <!-- Left: Generator Form -->
      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 order-2 lg:order-1">
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-gray-900">{{ currentToolName }} {{ $t('generator.titleSuffix') }}</h2>
          <p class="text-sm text-gray-500 mt-1">{{ $t('generator.subtitle') }}</p>
        </div>
        <router-view />

        <!-- Customization Options -->
        <hr class="my-8 border-gray-100">
        <h3 class="text-lg font-bold mb-4">{{ $t('generator.designTitle') }}</h3>
        <div class="grid sm:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">{{ $t('generator.colorFore') }}</label>
            <div class="flex items-center gap-2">
              <input type="color" v-model="qrState.colors.dark"
                class="w-10 h-10 p-1 rounded-md border border-gray-200 cursor-pointer">
              <input type="text" v-model="qrState.colors.dark"
                class="flex-1 rounded-lg border-gray-300 shadow-sm px-3 py-2 text-sm border focus:ring-brand-500 focus:border-brand-500">
            </div>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">{{ $t('generator.colorBack') }}</label>
            <div class="flex items-center gap-2">
              <input type="color" v-model="qrState.colors.light"
                class="w-10 h-10 p-1 rounded-md border border-gray-200 cursor-pointer">
              <input type="text" v-model="qrState.colors.light"
                class="flex-1 rounded-lg border-gray-300 shadow-sm px-3 py-2 text-sm border focus:ring-brand-500 focus:border-brand-500">
            </div>
          </div>
        </div>

        <div class="mt-4">
          <label class="block text-sm font-medium text-gray-700 mb-2">{{ $t('generator.logoUrl') }}</label>
          <div class="flex flex-col gap-3">
            <input type="url" v-model="qrState.logoUrl" placeholder="https://example.com/logo.png"
              class="w-full rounded-lg border-gray-300 shadow-sm px-3 py-2 border focus:ring-brand-500 focus:border-brand-500">
            <div class="relative">
              <input type="file" accept="image/*" @change="handleLogoUpload"
                class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-gray-50 file:text-brand-700 hover:file:bg-gray-100 cursor-pointer border border-gray-200 rounded-lg p-1 transition-colors" />
            </div>
          </div>
        </div>
      </div>

      <!-- Right: Preview and Download -->
      <div
        class="bg-gray-100 rounded-3xl p-6 lg:sticky lg:top-24 order-1 lg:order-2 flex flex-col items-center shadow-inner">
        <QRCodePreview />
      </div>
    </div>

    <!-- SEO Content Section (article content, FAQ, JSON-LD) -->
    <SeoContent v-if="seoData" :seo="seoData" />
  </div>
</template>

<script setup>
import { computed, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useHead } from '@vueuse/head'
import QRCodePreview from '@/components/QRCodePreview.vue'
import SeoContent from '@/components/SeoContent.vue'
import { qrState } from '@/composables/useQrState'

const route = useRoute()
const { t, tm, locale } = useI18n()

const currentToolName = computed(() => {
  const map = {
    'URL': t('tools.url.name'),
    'Text': t('tools.text.name'),
    'WiFi': t('tools.wifi.name'),
    'Instagram': t('tools.instagram.name'),
    'Telegram': t('tools.telegram.name'),
    'Email': t('tools.email.name'),
    'vCard': t('tools.vcard.name'),
    'SMS': t('tools.sms.name'),
  }
  return map[route.name] || route.name
})

// Map route names to the SEO data key in i18n
const routeSeoKeyMap = {
  WiFi: 'wifi',
  URL: 'url',
  Text: 'text',
  Instagram: 'instagram',
  Telegram: 'telegram',
  Email: 'email',
  vCard: 'vcard',
  SMS: 'sms'
}

const seoData = computed(() => {
  const key = routeSeoKeyMap[route.name]
  if (!key) return null
  // tm() returns the raw object from i18n messages
  const allSeo = tm('seo')
  return allSeo?.[key] ?? null
})

useHead({
  title: computed(() => seoData.value?.title || `${currentToolName.value} Generator`),
  meta: [
    { name: 'description', content: computed(() => seoData.value?.description || '') },
    { property: 'og:title', content: computed(() => seoData.value?.title || '') },
    { property: 'og:description', content: computed(() => seoData.value?.description || '') }
  ]
})

const handleLogoUpload = (event) => {
  const file = event.target.files[0]
  if (!file) return

  const reader = new FileReader()
  reader.onload = (e) => {
    qrState.logoUrl = e.target.result // Base64 setup directly mapped to logo image
  }
  reader.readAsDataURL(file)
}
</script>
