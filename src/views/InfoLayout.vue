<template>
    <div class="max-w-4xl mx-auto px-4 py-12">
        <article class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 mb-12">
            <router-view />
        </article>

        <!-- Sidebar / CTA Section -->
        <div class="grid md:grid-cols-2 gap-6 mb-12">
            <div class="bg-brand-50 p-6 rounded-2xl border border-brand-100 flex items-center justify-between group cursor-pointer"
                @click="$router.push('/')">
                <div>
                    <h3 class="font-bold text-brand-900 text-lg">QR Kod Yaratish</h3>
                    <p class="text-brand-700 text-sm">Hoziroq barcha turdagi kodlarni bepul yarating.</p>
                </div>
                <div
                    class="w-10 h-10 bg-brand-600 text-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                    </svg>
                </div>
            </div>

            <div class="bg-gray-100 p-6 rounded-2xl border border-gray-200">
                <h3 class="font-bold text-gray-900 mb-2">Boshqa Maqolalar</h3>
                <ul class="space-y-2 text-sm text-gray-600">
                    <li v-for="link in otherLinks" :key="link.path">
                        <router-link :to="link.path" class="hover:underline hover:text-brand-600">{{ link.name
                        }}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const otherLinks = computed(() => {
    return [
        { name: t('info.whatIsTitle'), path: '/qr-kod-nima' },
        { name: t('info.howToCreateTitle'), path: '/qr-kod-qanday-yaratiladi' },
        { name: t('info.howItWorksTitle'), path: '/qr-kod-qanday-ishlaydi' },
        { name: t('info.whereToUseTitle'), path: '/qr-kod-qayerda-ishlatiladi' },
        { name: t('info.freeQrTitle'), path: '/bepul-qr-kod' }
    ]
})
</script>

<style scoped>
:deep(h1) {
    font-size: 1.875rem;
    /* text-3xl */
    line-height: 2.25rem;
    font-weight: 800;
    /* extrabold */
    color: #111827;
    /* gray-900 */
    margin-bottom: 2rem;
}

@media (min-width: 768px) {
    :deep(h1) {
        font-size: 2.25rem;
        /* text-4xl */
    }
}

:deep(h2) {
    font-size: 1.5rem;
    /* text-2xl */
    font-weight: 700;
    color: #111827;
    margin-top: 3rem;
    margin-bottom: 1rem;
}

:deep(p) {
    color: #374151;
    /* gray-700 */
    line-height: 1.625;
    margin-bottom: 1.5rem;
}

:deep(ul),
:deep(ol) {
    margin-bottom: 2rem;
    margin-left: 1.5rem;
}

:deep(li) {
    color: #374151;
    margin-bottom: 0.5rem;
    list-style-type: disc;
}

:deep(strong) {
    font-weight: 700;
    color: #111827;
}
</style>
