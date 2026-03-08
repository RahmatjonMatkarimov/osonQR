<template>
    <section class="mt-16 border-t border-gray-100 pt-10 space-y-12">

        <!-- H1 Section -->
        <div>
            <h1 class="text-3xl font-extrabold text-gray-900 mb-4">{{ seo.h1 }}</h1>
            <div class="text-gray-600 leading-relaxed text-base max-w-4xl" v-html="seo.intro"></div>
        </div>

        <!-- H2: What is it? -->
        <div class="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <h2 class="text-2xl font-bold text-gray-800 mb-3">{{ seo.h2_1 }}</h2>
            <div class="text-gray-600 leading-relaxed" v-html="seo.p_1"></div>
        </div>

        <!-- H2: How to generate -->
        <div class="space-y-6">
            <h2 class="text-2xl font-bold text-gray-800 mb-4">{{ seo.h2_2 }}</h2>
            <ol class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <li v-for="(step, i) in steps" :key="i" class="flex gap-4 items-start p-4 rounded-xl border border-gray-50 bg-gray-50/50">
                    <span
                        class="shrink-0 w-8 h-8 rounded-full bg-brand-600 text-white text-sm font-bold flex items-center justify-center shadow-md">
                        {{ i + 1 }}
                    </span>
                    <div class="text-gray-600 pt-1 leading-relaxed text-sm font-medium" v-html="step"></div>
                </li>
            </ol>
        </div>

        <!-- H2: Benefits -->
        <div>
            <h2 class="text-2xl font-bold text-gray-800 mb-4">{{ seo.h2_3 }}</h2>
            <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <li v-for="(ben, i) in benefits" :key="i" class="flex flex-col gap-3 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:border-brand-200 hover:shadow-md transition-all">
                    <CheckCircleIcon class="w-6 h-6 text-brand-600 shrink-0" />
                    <span class="text-gray-700 text-sm font-medium leading-relaxed" v-html="ben"></span>
                </li>
            </ul>
        </div>

        <!-- H2: Where used -->
        <div class="bg-gray-900 rounded-3xl p-8 text-white">
            <h2 class="text-2xl font-bold mb-4">{{ seo.h2_4 }}</h2>
            <div class="text-gray-300 leading-relaxed opacity-90" v-html="seo.p_4"></div>
        </div>

        <!-- FAQ Section -->
        <div v-if="faqs.length" >
            <h2 class="text-2xl font-bold text-gray-800 mb-6">{{ seo.h2_5 }}</h2>
            <div class="space-y-4">
                <div v-for="(faq, i) in faqs" :key="i" class="border border-gray-100 rounded-2xl overflow-hidden shadow-sm bg-white">
                    <button @click="openFaq = openFaq === i ? null : i"
                        class="w-full flex justify-between items-center px-6 py-5 text-left hover:bg-gray-50 transition-colors font-bold text-gray-800">
                        <span>{{ faq.q }}</span>
                        <ChevronDownIcon class="w-5 h-5 text-gray-400 transition-transform duration-300 shrink-0"
                            :class="{ 'rotate-180': openFaq === i }" />
                    </button>
                    <div v-show="openFaq === i"
                        class="px-6 pb-5 bg-gray-50 text-gray-600 text-sm leading-relaxed border-t border-gray-50 mt-1">
                        <div class="pt-4" v-html="faq.a"></div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Other Tools Navigation -->
        <div class="pt-12 border-t border-gray-100">
            <h2 class="text-xl font-bold text-gray-800 mb-6">{{ $t('home.seoTypesTitle') }}</h2>
            <div class="flex flex-wrap gap-2">
                <router-link v-for="t in randomTools" :key="t.path" :to="t.path"
                    class="px-4 py-2 rounded-full border border-gray-200 bg-white hover:bg-brand-50 hover:border-brand-300 hover:text-brand-700 transition-all text-sm font-semibold text-gray-600">
                    {{ t.name }}
                </router-link>
            </div>
        </div>

        <!-- Quality / Trust Section (For users) -->
        <div class="bg-emerald-50 rounded-2xl p-6 border border-emerald-100 flex items-center gap-4">
            <div class="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center shrink-0">
                <ShieldCheckIcon class="w-7 h-7 text-white" />
            </div>
            <div>
                <h3 class="text-emerald-900 font-bold">{{ $t('home.seoPrivacyTitle') }}</h3>
                <p class="text-emerald-700 text-sm">{{ $t('home.seoPrivacyText') }}</p>
            </div>
        </div>

    </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useHead } from '@vueuse/head'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { CheckCircleIcon, ChevronDownIcon, ShieldCheckIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
    seo: {
        type: Object,
        required: true
    }
})

const route = useRoute()
const { t, locale } = useI18n()
const openFaq = ref(null)

const steps = computed(() =>
    ['step_1', 'step_2', 'step_3', 'step_4']
        .map(k => props.seo[k])
        .filter(Boolean)
)

const benefits = computed(() =>
    ['ben_1', 'ben_2', 'ben_3', 'ben_4']
        .map(k => props.seo[k])
        .filter(Boolean)
)

const faqs = computed(() => {
    const result = []
    for (let i = 1; i <= 5; i++) {
        const q = props.seo[`faq_q${i}`]
        const a = props.seo[`faq_a${i}`]
        if (q && a) result.push({ q, a })
    }
    return result
})

const randomTools = computed(() => {
    const list = [
        { name: t('tools.url.name'), path: '/qr-code-generator' },
        { name: t('tools.wifi.name'), path: '/wifi-qr-code-generator' },
        { name: t('tools.instagram.name'), path: '/instagram-qr-code-generator' },
        { name: t('tools.telegram.name'), path: '/telegram-qr-code-generator' },
        { name: t('tools.whatsapp.name'), path: '/whatsapp-qr-code-generator' },
        { name: t('tools.facebook.name'), path: '/facebook-qr-code-generator' },
        { name: t('tools.vcard.name'), path: '/vcard-qr-code-generator' },
        { name: t('tools.email.name'), path: '/email-qr-code-generator' },
        { name: t('tools.sms.name'), path: '/sms-qr-code-generator' },
        { name: t('tools.location.name'), path: '/location-qr-code-generator' },
        { name: t('tools.pdf.name'), path: '/pdf-qr-code-generator' },
        { name: t('tools.youtube.name'), path: '/youtube-qr-code-generator' },
        { name: t('tools.tiktok.name'), path: '/tiktok-qr-code-generator' },
        { name: t('tools.linkedin.name'), path: '/linkedin-qr-code-generator' },
        { name: t('tools.discord.name'), path: '/discord-qr-code-generator' }
    ].filter(x => x.path !== route.path)
    return list.sort(() => Math.random() - 0.5).slice(0, 15)
})

// Inject meta + JSON-LD into <head>
useHead(computed(() => {
    const baseUrl = 'https://osonqr.rahmatjonmatkarimov.uz'
    const fullPath = baseUrl + route.path

    const breadcrumb = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
            {
                '@type': 'ListItem',
                'position': 1,
                'name': t('nav.home'),
                'item': baseUrl
            },
            {
                '@type': 'ListItem',
                'position': 2,
                'name': props.seo.h1 || route.name,
                'item': fullPath
            }
        ]
    }

    const faqSchema = faqs.value.length ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': faqs.value.map(f => ({
            '@type': 'Question',
            'name': f.q,
            'acceptedAnswer': { '@type': 'Answer', 'text': f.a }
        }))
    } : null

    const webAppSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        'name': props.seo.h1 || route.name,
        'description': props.seo.description,
        'url': fullPath,
        'applicationCategory': 'UtilitiesApplication',
        'operatingSystem': 'Any',
        'offers': {
            '@type': 'Offer',
            'price': '0',
            'priceCurrency': 'USD'
        },
        'abstract': props.seo.intro,
        'inLanguage': [locale.value]
    }

    const schemas = [breadcrumb, webAppSchema]
    if (faqSchema) schemas.push(faqSchema)

    return {
        title: props.seo.title,
        meta: [
            { name: 'description', content: props.seo.description },
            { property: 'og:title', content: props.seo.title },
            { property: 'og:description', content: props.seo.description },
            { property: 'og:url', content: fullPath },
            { property: 'og:type', content: 'website' },
            { property: 'og:locale', content: locale.value === 'uz' ? 'uz_UZ' : locale.value === 'ru' ? 'ru_RU' : 'en_US' }
        ],
        link: [
            { rel: 'canonical', href: fullPath },
            { rel: 'alternate', hreflang: 'uz', href: fullPath },
            { rel: 'alternate', hreflang: 'ru', href: fullPath },
            { rel: 'alternate', hreflang: 'en', href: fullPath },
            { rel: 'alternate', hreflang: 'x-default', href: fullPath }
        ],
        script: schemas.map(s => ({
            type: 'application/ld+json',
            innerHTML: JSON.stringify(s)
        }))
    }
}))
</script>
