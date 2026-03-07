<template>
  <div class="min-h-screen flex flex-col font-sans bg-gray-50 text-gray-900">
    <header class="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16  relative flex items-center justify-between">
        <router-link to="/" class="flex items-center gap-2 group">
          <div class="w-8 h-8 flex items-center justify-center transition-transform scale-200">
            <img src="/logo.png" alt="OsonQR (Oson QR) Logo" class="h-full w-auto" />
          </div>
          <span
            class="text-xl font-bold bg-clip-text z-10 text-transparent bg-linear-to-r from-brand-600 to-brand-900">OsonQR</span>
        </router-link>
        <div class="flex items-center gap-6">
          <nav class="hidden sm:flex gap-6 text-sm font-medium text-gray-600">
            <router-link to="/" class="hover:text-brand-600 transition-colors">{{ $t('nav.home') }}</router-link>
            <router-link to="/qr-code-generator" class="hover:text-brand-600 transition-colors">{{ $t('nav.url')
            }}</router-link>
            <router-link to="/text-qr-code-generator" class="hover:text-brand-600 transition-colors">{{ $t('nav.text')
            }}</router-link>
            <router-link to="/wifi-qr-code-generator" class="hover:text-brand-600 transition-colors">{{ $t('nav.wifi')
            }}</router-link>
            <router-link to="/vcard-qr-code-generator" class="hover:text-brand-600 transition-colors">{{ $t('nav.vcard')
            }}</router-link>
          </nav>

          <select v-model="currentLocale" @change="changeLanguage"
            class="bg-gray-100 text-sm font-medium border-0 rounded-lg py-1 px-2 text-gray-700 focus:ring-2 focus:ring-brand-500 outline-none">
            <option value="uz">UZ</option>
            <option value="ru">RU</option>
            <option value="en">EN</option>
          </select>
        </div>
      </div>
    </header>

    <main class="grow">
      <router-view />
    </main>

    <footer class="bg-gray-900 justify-self-end mt-auto text-gray-400 py-8 text-center text-sm">
      <div class="max-w-6xl mx-auto px-4">
        <p>&copy; {{ new Date().getFullYear() }} OsonQR (Oson QR). Bepul va ochiq kodli QR kod generatori.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '@vueuse/head'
import { useRoute } from 'vue-router'

const { locale, t } = useI18n()
const route = useRoute()

const currentLocale = computed({
  get: () => locale.value,
  set: (val) => { locale.value = val }
})

useHead({
  htmlAttrs: { lang: locale },
  meta: [
    { name: 'author', content: 'OsonQR' },
    { property: 'og:locale', content: computed(() => locale.value === 'uz' ? 'uz_UZ' : locale.value === 'ru' ? 'ru_RU' : 'en_US') }
  ]
})

const changeLanguage = () => {
  localStorage.setItem('qr-lang', locale.value)
}
</script>
