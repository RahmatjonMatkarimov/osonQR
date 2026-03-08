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

        <h3 class="text-lg font-bold mb-4 mt-8">{{ $t('generator.shapesTitle') }}</h3>
        <div class="space-y-6">
          <!-- Body Shape -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">{{ $t('generator.bodyShape') }}</label>
            <div class="flex flex-wrap gap-2">
              <button v-for="shape in ['square', 'dots', 'rounded', 'extra-rounded', 'classy', 'classy-rounded']"
                :key="shape" @click="qrState.shapes.body = shape"
                class="w-12 h-12 rounded-lg border-2 flex items-center justify-center bg-white transition-all hover:bg-gray-50 hover:border-brand-300"
                :class="qrState.shapes.body === shape ? 'border-brand-500 shadow-sm ring-1 ring-brand-500' : 'border-gray-200'"
                :title="$t('generator.shapes.' + shape.replace('-', ''))">
                <svg viewBox="0 0 24 24" width="24" height="24" class="fill-current text-gray-800">
                  <path v-if="shape === 'square'"
                    d="M2.5 2.5h5v5h-5zM10 2.5h5v5h-5zM17.5 2.5h5v5h-5zM2.5 10h5v5h-5zM10 10h5v5h-5zM17.5 10h5v5h-5zM2.5 17.5h5v5h-5zM10 17.5h5v5h-5zM17.5 17.5h5v5h-5z" />
                  <template v-else-if="shape === 'dots'">
                    <circle cx="5" cy="5" r="2.5" />
                    <circle cx="12.5" cy="5" r="2.5" />
                    <circle cx="20" cy="5" r="2.5" />
                    <circle cx="5" cy="12.5" r="2.5" />
                    <circle cx="12.5" cy="12.5" r="2.5" />
                    <circle cx="20" cy="12.5" r="2.5" />
                    <circle cx="5" cy="20" r="2.5" />
                    <circle cx="12.5" cy="20" r="2.5" />
                    <circle cx="20" cy="20" r="2.5" />
                  </template>
                  <template v-else-if="shape === 'rounded'">
                    <rect x="2.5" y="2.5" width="5" height="5" rx="1.5" />
                    <rect x="10" y="2.5" width="5" height="5" rx="1.5" />
                    <rect x="17.5" y="2.5" width="5" height="5" rx="1.5" />
                    <rect x="2.5" y="10" width="5" height="5" rx="1.5" />
                    <rect x="10" y="10" width="5" height="5" rx="1.5" />
                    <rect x="17.5" y="10" width="5" height="5" rx="1.5" />
                    <rect x="2.5" y="17.5" width="5" height="5" rx="1.5" />
                    <rect x="10" y="17.5" width="5" height="5" rx="1.5" />
                    <rect x="17.5" y="17.5" width="5" height="5" rx="1.5" />
                  </template>
                  <template v-else-if="shape === 'extra-rounded'">
                    <rect x="2.5" y="2.5" width="5" height="5" rx="2.5" />
                    <rect x="10" y="2.5" width="5" height="5" rx="2.5" />
                    <rect x="17.5" y="2.5" width="5" height="5" rx="2.5" />
                    <rect x="2.5" y="10" width="5" height="5" rx="2.5" />
                    <rect x="10" y="10" width="5" height="5" rx="2.5" />
                    <rect x="17.5" y="10" width="5" height="5" rx="2.5" />
                    <rect x="2.5" y="17.5" width="5" height="5" rx="2.5" />
                    <rect x="10" y="17.5" width="5" height="5" rx="2.5" />
                    <rect x="17.5" y="17.5" width="5" height="5" rx="2.5" />
                  </template>
                  <template v-else-if="shape === 'classy'">
                    <path d="M2.5 2.5h5v5h-5zM17.5 2.5h5v5h-5zM2.5 17.5h5v5h-5z" />
                    <rect x="10" y="2.5" width="5" height="5" rx="2.5" />
                    <rect x="10" y="10" width="5" height="5" rx="2.5" />
                    <rect x="17.5" y="10" width="5" height="5" rx="2.5" />
                    <rect x="10" y="17.5" width="5" height="5" rx="2.5" />
                    <rect x="17.5" y="17.5" width="5" height="5" rx="2.5" />
                    <rect x="2.5" y="10" width="5" height="5" rx="2.5" />
                  </template>
                  <template v-else-if="shape === 'classy-rounded'">
                    <rect x="2.5" y="2.5" width="5" height="5" rx="1.5" />
                    <rect x="17.5" y="2.5" width="5" height="5" rx="1.5" />
                    <rect x="2.5" y="17.5" width="5" height="5" rx="1.5" />
                    <rect x="10" y="2.5" width="5" height="5" rx="2.5" />
                    <rect x="10" y="10" width="5" height="5" rx="2.5" />
                    <rect x="17.5" y="10" width="5" height="5" rx="2.5" />
                    <rect x="10" y="17.5" width="5" height="5" rx="2.5" />
                    <rect x="17.5" y="17.5" width="5" height="5" rx="2.5" />
                    <rect x="2.5" y="10" width="5" height="5" rx="2.5" />
                  </template>
                </svg>
              </button>
            </div>
          </div>

          <!-- Eye Frame Shape -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">{{ $t('generator.eyeFrameShape') }}</label>
            <div class="flex flex-wrap gap-2">
              <button v-for="shape in ['square', 'dot', 'rounded', 'extra-rounded', 'classy', 'classy-rounded']"
                :key="shape" @click="qrState.shapes.eyeFrame = shape"
                class="w-12 h-12 rounded-lg border-2 flex items-center justify-center bg-white transition-all hover:bg-gray-50 hover:border-brand-300"
                :class="qrState.shapes.eyeFrame === shape ? 'border-brand-500 shadow-sm ring-1 ring-brand-500' : 'border-gray-200'"
                :title="$t('generator.shapes.' + shape.replace('-', ''))">
                <svg viewBox="0 0 24 24" width="28" height="28" class="fill-none stroke-current text-gray-800"
                  stroke-width="3">
                  <rect v-if="shape === 'square'" x="3" y="3" width="18" height="18" />
                  <circle v-else-if="shape === 'dot'" cx="12" cy="12" r="9" />
                  <rect v-else-if="shape === 'rounded'" x="3" y="3" width="18" height="18" rx="3" />
                  <rect v-else-if="shape === 'extra-rounded'" x="3" y="3" width="18" height="18" rx="6" />
                  <path v-else-if="shape === 'classy'"
                    d="M3 9V6a3 3 0 0 1 3-3h3M15 3h3a3 3 0 0 1 3 3v3M21 15v3a3 3 0 0 1-3 3h-3M9 21H6a3 3 0 0 1-3-3v-3" />
                  <path v-else-if="shape === 'classy-rounded'"
                    d="M3 12v-4a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H3z" />
                </svg>
              </button>
            </div>
          </div>

          <!-- Eye Ball Shape -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">{{ $t('generator.eyeBallShape') }}</label>
            <div class="flex flex-wrap gap-2">
              <button v-for="shape in ['square', 'dot', 'rounded', 'extra-rounded', 'classy', 'classy-rounded']"
                :key="shape" @click="qrState.shapes.eyeBall = shape"
                class="w-12 h-12 rounded-lg border-2 flex items-center justify-center bg-white transition-all hover:bg-gray-50 hover:border-brand-300"
                :class="qrState.shapes.eyeBall === shape ? 'border-brand-500 shadow-sm ring-1 ring-brand-500' : 'border-gray-200'"
                :title="$t('generator.shapes.' + shape.replace('-', ''))">
                <svg viewBox="0 0 24 24" width="28" height="28" class="fill-current text-gray-800">
                  <rect v-if="shape === 'square'" x="6" y="6" width="12" height="12" />
                  <circle v-else-if="shape === 'dot'" cx="12" cy="12" r="6" />
                  <rect v-else-if="shape === 'rounded'" x="6" y="6" width="12" height="12" rx="2" />
                  <rect v-else-if="shape === 'extra-rounded'" x="6" y="6" width="12" height="12" rx="4" />
                  <path v-else-if="shape === 'classy'" d="M6 9a3 3 0 0 1 3-3h9v12H6z" />
                  <path v-else-if="shape === 'classy-rounded'" d="M6 10a4 4 0 0 1 4-4h8v8a4 4 0 0 1-4 4H6z" />
                </svg>
              </button>
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
        class="bg-gray-100 rounded-3xl py-6 sm:px-6 lg:sticky lg:top-24 order-1 lg:order-2 flex flex-col items-center shadow-inner">
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
    'WhatsApp': t('tools.whatsapp.name'),
    'Facebook': t('tools.facebook.name'),
    'YouTube': t('tools.youtube.name'),
    'TikTok': t('tools.tiktok.name'),
    'LinkedIn': t('tools.linkedin.name'),
    'Discord': t('tools.discord.name'),
    'Phone': t('tools.phone.name'),
    'Location': t('tools.location.name'),
    'PDF': t('tools.pdf.name'),
    'Image': t('tools.image.name'),
    'Video': t('tools.video.name'),
    'File': t('tools.file-download.name'),
    'Twitter': t('tools.twitter.name'),
    'Pinterest': t('tools.pinterest.name'),
    'Snapchat': t('tools.snapchat.name'),
    'AppStore': t('tools.app-store.name'),
    'GooglePlay': t('tools.google-play.name'),
    'Bitcoin': t('tools.bitcoin.name'),
    'Ethereum': t('tools.ethereum.name'),
    'Event': t('tools.event.name'),
    'Mp3': t('tools.mp3.name'),
    'GoogleReviews': t('tools.google-reviews.name'),
    'Twitch': t('tools.twitch.name'),
    'Reddit': t('tools.reddit.name'),
    'Viber': t('tools.viber.name'),
    'Paypal': t('tools.paypal.name'),
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
  SMS: 'sms',
  WhatsApp: 'whatsapp',
  Facebook: 'facebook',
  YouTube: 'youtube',
  TikTok: 'tiktok',
  LinkedIn: 'linkedin',
  Discord: 'discord',
  Phone: 'phone',
  Location: 'location',
  PDF: 'pdf',
  Image: 'image',
  Video: 'video',
  File: 'file-download',
  Twitter: 'twitter',
  Pinterest: 'pinterest',
  Snapchat: 'snapchat',
  AppStore: 'app-store',
  GooglePlay: 'google-play',
  Bitcoin: 'bitcoin',
  Ethereum: 'ethereum',
  Event: 'event',
  Mp3: 'mp3',
  GoogleReviews: 'google-reviews',
  Twitch: 'twitch',
  Reddit: 'reddit',
  Viber: 'viber',
  Paypal: 'paypal'
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
  ],
  link: [
    { rel: 'canonical', href: computed(() => `https://osonqr.rahmatjonmatkarimov.uz${route.path}`) }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: computed(() => JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": t('home.titleText'),
            "item": "https://osonqr.rahmatjonmatkarimov.uz/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": currentToolName.value,
            "item": `https://osonqr.rahmatjonmatkarimov.uz${route.path}`
          }
        ]
      }))
    }
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
