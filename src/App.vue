<template>
  <div class="min-h-screen flex flex-col font-sans bg-gray-50 text-gray-900">
    <header class="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16  relative flex items-center justify-between">
        <router-link to="/" class="flex items-center gap-2 group">
          <div class="w-8 h-8 flex items-center justify-center transition-transform scale-200">
            <img src="/logo.png" alt="OsonQR (Oson QR) Logo" class="h-full w-auto" loading="lazy" />
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

    <footer class="bg-gray-900 justify-self-end mt-auto text-gray-400 py-12 text-sm">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <!-- Column 1: Social & Communication -->
          <div>
            <h3 class="text-white text-lg font-bold mb-4">Ijtimoiy Tarmoqlar</h3>
            <ul class="space-y-2 text-xs">
              <li><router-link to="/telegram-qr-code-generator" class="hover:text-brand-500 transition-colors">Telegram
                  QR</router-link></li>
              <li><router-link to="/whatsapp-qr-code-generator" class="hover:text-brand-500 transition-colors">WhatsApp
                  QR</router-link></li>
              <li><router-link to="/instagram-qr-code-generator"
                  class="hover:text-brand-500 transition-colors">Instagram QR</router-link></li>
              <li><router-link to="/facebook-qr-code-generator" class="hover:text-brand-500 transition-colors">Facebook
                  QR</router-link></li>
              <li><router-link to="/youtube-qr-code-generator" class="hover:text-brand-500 transition-colors">YouTube
                  QR</router-link></li>
              <li><router-link to="/tiktok-qr-code-generator" class="hover:text-brand-500 transition-colors">TikTok
                  QR</router-link></li>
              <li><router-link to="/twitter-qr-code-generator" class="hover:text-brand-500 transition-colors">Twitter
                  (X) QR</router-link></li>
              <li><router-link to="/snapchat-qr-code-generator" class="hover:text-brand-500 transition-colors">Snapchat
                  QR</router-link></li>
              <li><router-link to="/pinterest-qr-code-generator"
                  class="hover:text-brand-500 transition-colors">Pinterest QR</router-link></li>
              <li><router-link to="/twitch-qr-code-generator" class="hover:text-brand-500 transition-colors">Twitch
                  QR</router-link></li>
              <li><router-link to="/reddit-qr-code-generator" class="hover:text-brand-500 transition-colors">Reddit
                  QR</router-link></li>
              <li><router-link to="/viber-qr-code-generator" class="hover:text-brand-500 transition-colors">Viber
                  QR</router-link></li>
              <li><router-link to="/discord-qr-code-generator" class="hover:text-brand-500 transition-colors">Discord
                  QR</router-link></li>
            </ul>
          </div>

          <!-- Column 2: Apps & Business -->
          <div>
            <h3 class="text-white text-lg font-bold mb-4">Ilovalar & Biznes</h3>
            <ul class="space-y-2 text-xs">
              <li><router-link to="/qr-code-generator" class="hover:text-brand-500 transition-colors">URL
                  QR</router-link></li>
              <li><router-link to="/wifi-qr-code-generator" class="hover:text-brand-500 transition-colors">WiFi
                  QR</router-link></li>
              <li><router-link to="/vcard-qr-code-generator" class="hover:text-brand-500 transition-colors">vCard
                  QR</router-link></li>
              <li><router-link to="/pdf-qr-code-generator" class="hover:text-brand-500 transition-colors">PDF
                  QR</router-link></li>
              <li><router-link to="/image-qr-code-generator" class="hover:text-brand-500 transition-colors">Rasm
                  QR</router-link></li>
              <li><router-link to="/video-qr-code-generator" class="hover:text-brand-500 transition-colors">Video
                  QR</router-link></li>
              <li><router-link to="/phone-qr-code-generator" class="hover:text-brand-500 transition-colors">Telefon
                  QR</router-link></li>
              <li><router-link to="/linkedin-qr-code-generator" class="hover:text-brand-500 transition-colors">LinkedIn
                  QR</router-link></li>
              <li><router-link to="/file-download-qr-code-generator" class="hover:text-brand-500 transition-colors">Fayl
                  QR</router-link></li>
              <li><router-link to="/app-store-qr-code-generator" class="hover:text-brand-500 transition-colors">App
                  Store QR</router-link></li>
              <li><router-link to="/google-play-qr-code-generator" class="hover:text-brand-500 transition-colors">Google
                  Play QR</router-link></li>
            </ul>
          </div>

          <!-- Column 3: Payments & Tools -->
          <div>
            <h3 class="text-white text-lg font-bold mb-4">To'lovlar & Asboblar</h3>
            <ul class="space-y-2 text-xs">
              <li><router-link to="/bitcoin-qr-code-generator" class="hover:text-brand-500 transition-colors">Bitcoin
                  QR</router-link></li>
              <li><router-link to="/ethereum-qr-code-generator" class="hover:text-brand-500 transition-colors">Ethereum
                  QR</router-link></li>
              <li><router-link to="/paypal-qr-code-generator" class="hover:text-brand-500 transition-colors">PayPal
                  QR</router-link></li>
              <li><router-link to="/event-qr-code-generator" class="hover:text-brand-500 transition-colors">Tadbir
                  QR</router-link></li>
              <li><router-link to="/google-reviews-qr-code-generator"
                  class="hover:text-brand-500 transition-colors">Google Reviews QR</router-link></li>
              <li><router-link to="/mp3-qr-code-generator" class="hover:text-brand-500 transition-colors">MP3 Audio
                  QR</router-link></li>
              <li><router-link to="/sms-qr-code-generator" class="hover:text-brand-500 transition-colors">SMS
                  QR</router-link></li>
              <li><router-link to="/email-qr-code-generator" class="hover:text-brand-500 transition-colors">Email
                  QR</router-link></li>
              <li><router-link to="/location-qr-code-generator" class="hover:text-brand-500 transition-colors">Manzil
                  QR</router-link></li>
            </ul>
          </div>

          <!-- Column 4: Information & SEO -->
          <div>
            <h3 class="text-white text-lg font-bold mb-4">Ma'lumotlar</h3>
            <ul class="space-y-2 text-xs">
              <li><router-link to="/qr-kod-nima" class="hover:text-brand-500 transition-colors">QR Kod
                  Nima?</router-link></li>
              <li><router-link to="/qr-kod-qanday-yaratiladi" class="hover:text-brand-500 transition-colors">Qanday
                  Yaratiladi?</router-link></li>
              <li><router-link to="/qr-kod-qanday-ishlaydi" class="hover:text-brand-500 transition-colors">Qanday
                  Ishlaydi?</router-link></li>
              <li><router-link to="/qr-kod-qayerda-ishlatiladi" class="hover:text-brand-500 transition-colors">Qayerda
                  Ishlatiladi?</router-link></li>
              <li><router-link to="/bepul-qr-kod" class="hover:text-brand-500 transition-colors">Bepul QR
                  Kodlar</router-link></li>
            </ul>
          </div>
        </div>

        <!-- Short Description below grid -->
        <div class="mt-8 text-gray-500 max-w-2xl py-6 border-t border-gray-800">
          <p>OsonQR — bu barcha turdagi maʼlumotlarni (URL, WiFi, ijtimoiy tarmoqlar) xavfsiz va tezkor ravishda QR kod
            formatiga oʻtkazuvchi bepul platforma. Bizda yaratilgan barcha kodlar statik boʻlib, muddati cheklanmagan.
          </p>
        </div>

        <div class="border-t border-gray-800 pt-8 text-center">
          <p>&copy; {{ new Date().getFullYear() }} OsonQR. Bepul va ochiq kodli QR kod generatori.</p>
        </div>
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
