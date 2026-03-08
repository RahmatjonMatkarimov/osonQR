<template>
    <section class="mt-16 border-t border-gray-100 pt-10 space-y-12">

        <!-- H1 -->
        <div>
            <h1 class="text-3xl font-extrabold text-gray-900 mb-4">{{ seo.h1 }}</h1>
            <p class="text-gray-600 leading-relaxed text-base max-w-3xl" v-html="seo.intro"></p>
        </div>

        <!-- H2: What is it? -->
        <div>
            <h2 class="text-2xl font-bold text-gray-800 mb-3">{{ seo.h2_1 }}</h2>
            <p class="text-gray-600 leading-relaxed" v-html="seo.p_1"></p>
        </div>

        <!-- H2: How to generate -->
        <div>
            <h2 class="text-2xl font-bold text-gray-800 mb-4">{{ seo.h2_2 }}</h2>
            <ol class="space-y-3">
                <li v-for="(step, i) in steps" :key="i" class="flex gap-4 items-start">
                    <span
                        class="shrink-0 w-8 h-8 rounded-full bg-brand-600 text-white text-sm font-bold flex items-center justify-center">
                        {{ i + 1 }}
                    </span>
                    <p class="text-gray-600 pt-1 leading-relaxed" v-html="step"></p>
                </li>
            </ol>
        </div>

        <!-- H2: Benefits -->
        <div>
            <h2 class="text-2xl font-bold text-gray-800 mb-4">{{ seo.h2_3 }}</h2>
            <ul class="space-y-3">
                <li v-for="(ben, i) in benefits" :key="i" class="flex gap-3 items-start text-gray-600">
                    <CheckCircleIcon class="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                    <span v-html="ben"></span>
                </li>
            </ul>
        </div>

        <!-- H2: Where used -->
        <div>
            <h2 class="text-2xl font-bold text-gray-800 mb-3">{{ seo.h2_4 }}</h2>
            <p class="text-gray-600 leading-relaxed" v-html="seo.p_4"></p>
        </div>

        <!-- H2: FAQ Accordion -->
        <div>
            <h2 class="text-2xl font-bold text-gray-800 mb-6">{{ seo.h2_5 }}</h2>
            <div class="space-y-3">
                <div v-for="(faq, i) in faqs" :key="i" class="border border-gray-200 rounded-xl overflow-hidden">
                    <button @click="openFaq = openFaq === i ? null : i"
                        class="w-full flex justify-between items-center px-5 py-4 bg-white text-left hover:bg-gray-50 transition-colors font-medium text-gray-800">
                        <span>{{ faq.q }}</span>
                        <ChevronDownIcon class="w-5 h-5 text-gray-400 transition-transform duration-300 shrink-0"
                            :class="{ 'rotate-180': openFaq === i }" />
                    </button>
                    <div v-show="openFaq === i"
                        class="px-5 pb-4 bg-gray-50 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                        <p class="pt-3" v-html="faq.a"></p>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useHead } from '@vueuse/head'
import { useRoute } from 'vue-router'
import { CheckCircleIcon, ChevronDownIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
    seo: {
        type: Object,
        required: true
    }
})

const route = useRoute()
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
                'name': 'Bosh sahifa',
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

    const faq = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': faqs.value.map(f => ({
            '@type': 'Question',
            'name': f.q,
            'acceptedAnswer': { '@type': 'Answer', 'text': f.a }
        }))
    }

    return {
        title: props.seo.title,
        meta: [
            { name: 'description', content: props.seo.description }
        ],
        script: [
            { type: 'application/ld+json', innerHTML: JSON.stringify(faq) },
            { type: 'application/ld+json', innerHTML: JSON.stringify(breadcrumb) }
        ]
    }
}))
</script>
