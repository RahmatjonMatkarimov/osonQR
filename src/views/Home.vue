<template>
  <div class="max-w-6xl mx-auto px-4 py-16">
    <div class="text-center mb-16 space-y-4">
      <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
        {{ $t('home.titleText') }} <span
          class="text-transparent bg-clip-text bg-linear-to-r from-brand-600 to-indigo-600">{{
            $t('home.titleGradient') }}</span> {{ $t('home.titleGenerator') }}
      </h1>
      <p class="text-xl text-gray-600 max-w-2xl mx-auto">
        {{ $t('home.subtitle') }}
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
      <router-link v-for="tool in translatedTools" :key="tool.id" :to="tool.path"
        class="group flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-brand-200 hover:-translate-y-1 transition-all duration-300">
        <div
          :class="['w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-inner shrink-0', tool.color]">
          <component :is="tool.icon" class="w-6 h-6" />
        </div>
        <div>
          <h3 class="text-lg font-bold text-gray-900 group-hover:text-brand-600 transition-colors">{{ tool.name }}</h3>
          <p class="text-gray-500 text-sm mt-1 line-clamp-2">{{ tool.description }}</p>
        </div>
      </router-link>
    </div>

    <div class="mt-32 max-w-3xl mx-auto text-center space-y-6">
      <h2 class="text-3xl font-bold">{{ $t('home.whyTitle') }}</h2>
      <div class="grid sm:grid-cols-3 gap-8 mt-10">
        <div class="space-y-3">
          <div class="text-brand-600 font-bold text-lg">{{ $t('home.whyCustomTitle') }}</div>
          <p class="text-gray-600 text-sm">{{ $t('home.whyCustomDesc') }}</p>
        </div>
        <div class="space-y-3">
          <div class="text-brand-600 font-bold text-lg">{{ $t('home.whyDurationTitle') }}</div>
          <p class="text-gray-600 text-sm">{{ $t('home.whyDurationDesc') }}</p>
        </div>
        <div class="space-y-3">
          <div class="text-brand-600 font-bold text-lg">{{ $t('home.whyQualityTitle') }}</div>
          <p class="text-gray-600 text-sm">{{ $t('home.whyQualityDesc') }}</p>
        </div>
      </div>
    </div>

    <!-- SEO Content Section -->
    <section class="mt-24 border-t border-gray-100 pt-16 max-w-4xl mx-auto space-y-16">
      <!-- About OsonQR -->
      <div class="space-y-4">
        <h2 class="text-2xl font-bold text-gray-900">{{ $t('home.seoAboutTitle') }}</h2>
        <p class="text-gray-600 leading-relaxed">{{ $t('home.seoAboutText') }}</p>
      </div>

      <!-- How to use -->
      <div class="space-y-6">
        <h2 class="text-2xl font-bold text-gray-900">{{ $t('home.seoHowTitle') }}</h2>
        <ol class="space-y-4">
          <li v-for="(step, i) in howSteps" :key="i" class="flex gap-4 items-start">
            <span class="shrink-0 w-8 h-8 rounded-full bg-brand-600 text-white text-sm font-bold flex items-center justify-center">{{ i + 1 }}</span>
            <p class="text-gray-600 pt-1 leading-relaxed">{{ step }}</p>
          </li>
        </ol>
      </div>

      <!-- Types of QR codes -->
      <div class="space-y-4">
        <h2 class="text-2xl font-bold text-gray-900">{{ $t('home.seoTypesTitle') }}</h2>
        <p class="text-gray-600 leading-relaxed">{{ $t('home.seoTypesText') }}</p>
      </div>

      <!-- Privacy note -->
      <div class="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 space-y-2">
        <h2 class="text-lg font-bold text-emerald-800">{{ $t('home.seoPrivacyTitle') }}</h2>
        <p class="text-emerald-700 text-sm leading-relaxed">{{ $t('home.seoPrivacyText') }}</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '@vueuse/head'
import { LinkIcon, DocumentTextIcon, WifiIcon, SignalIcon, PhoneIcon, EnvelopeIcon, IdentificationIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/vue/24/outline'

const { t } = useI18n()

useHead({
  title: computed(() => `${t('home.titleText')} ${t('home.titleGradient')} ${t('home.titleGenerator')} - OsonQR`),
  meta: [
    { name: 'description', content: computed(() => t('home.subtitle')) },
    { name: 'keywords', content: computed(() => t('home.metaKeywords')) },
    { property: 'og:title', content: computed(() => `OsonQR - ${t('home.titleText')} ${t('home.titleGradient')}`) },
    { property: 'og:description', content: computed(() => t('home.subtitle')) }
  ]
})

const howSteps = computed(() => [
  t('home.seoStep1'),
  t('home.seoStep2'),
  t('home.seoStep3'),
  t('home.seoStep4'),
])

const translatedTools = computed(() => [
  { id: 'url', name: t('tools.url.name'), path: '/qr-code-generator', description: t('tools.url.desc'), icon: LinkIcon, color: 'bg-blue-500' },
  { id: 'text', name: t('tools.text.name'), path: '/text-qr-code-generator', description: t('tools.text.desc'), icon: DocumentTextIcon, color: 'bg-slate-500' },
  { id: 'wifi', name: t('tools.wifi.name'), path: '/wifi-qr-code-generator', description: t('tools.wifi.desc'), icon: WifiIcon, color: 'bg-emerald-500' },
  { id: 'instagram', name: t('tools.instagram.name'), path: '/instagram-qr-code-generator', description: t('tools.instagram.desc'), icon: SignalIcon, color: 'bg-pink-500' },
  { id: 'telegram', name: t('tools.telegram.name'), path: '/telegram-qr-code-generator', description: t('tools.telegram.desc'), icon: PhoneIcon, color: 'bg-cyan-500' },
  { id: 'email', name: t('tools.email.name'), path: '/email-qr-code-generator', description: t('tools.email.desc'), icon: EnvelopeIcon, color: 'bg-amber-500' },
  { id: 'vcard', name: t('tools.vcard.name'), path: '/vcard-qr-code-generator', description: t('tools.vcard.desc'), icon: IdentificationIcon, color: 'bg-indigo-500' },
  { id: 'sms', name: t('tools.sms.name'), path: '/sms-qr-code-generator', description: t('tools.sms.desc'), icon: ChatBubbleBottomCenterTextIcon, color: 'bg-green-500' },
])
</script>
