import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import GeneratorLayout from '@/views/GeneratorLayout.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: { title: 'Modern QR Code Generator - Free Custom QR Tools' }
    },
    {
        path: '/',
        component: GeneratorLayout,
        children: [
            { path: 'qr-code-generator', name: 'URL', component: () => import('@/views/generators/UrlGenerator.vue'), meta: { title: 'URL QR Code Generator' } },
            { path: 'text-qr-code-generator', name: 'Text', component: () => import('@/views/generators/TextGenerator.vue'), meta: { title: 'Text QR Code Generator' } },
            { path: 'wifi-qr-code-generator', name: 'WiFi', component: () => import('@/views/generators/WifiGenerator.vue'), meta: { title: 'WiFi QR Code Generator' } },
            { path: 'instagram-qr-code-generator', name: 'Instagram', component: () => import('@/views/generators/InstagramGenerator.vue'), meta: { title: 'Instagram QR Code Generator' } },
            { path: 'telegram-qr-code-generator', name: 'Telegram', component: () => import('@/views/generators/TelegramGenerator.vue'), meta: { title: 'Telegram QR Code Generator' } },
            { path: 'email-qr-code-generator', name: 'Email', component: () => import('@/views/generators/EmailGenerator.vue'), meta: { title: 'Email QR Code Generator' } },
            { path: 'vcard-qr-code-generator', name: 'vCard', component: () => import('@/views/generators/VCardGenerator.vue'), meta: { title: 'vCard QR Code Generator' } },
            { path: 'sms-qr-code-generator', name: 'SMS', component: () => import('@/views/generators/SmsGenerator.vue'), meta: { title: 'SMS QR Code Generator' } },
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.afterEach((to) => {
    if (to.meta && to.meta.title) {
        document.title = to.meta.title + ' - OsonQR';
    } else {
        document.title = 'OsonQR - Bepul va Oson QR Kod Generatori';
    }
})

export default router
