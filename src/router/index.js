import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import GeneratorLayout from '@/views/GeneratorLayout.vue'
import { i18n } from '@/i18n'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: 'Modern QR Code Generator - Free Custom QR Tools',
            description: 'home.subtitle'
        }
    },
    {
        path: '/',
        component: GeneratorLayout,
        children: [
            { path: 'qr-code-generator', name: 'URL', component: () => import('@/views/generators/UrlGenerator.vue'), meta: { title: 'URL QR Code Generator', description: 'seo.url.description' } },
            { path: 'text-qr-code-generator', name: 'Text', component: () => import('@/views/generators/TextGenerator.vue'), meta: { title: 'Text QR Code Generator', description: 'seo.text.description' } },
            { path: 'wifi-qr-code-generator', name: 'WiFi', component: () => import('@/views/generators/WifiGenerator.vue'), meta: { title: 'WiFi QR Code Generator', description: 'seo.wifi.description' } },
            { path: 'instagram-qr-code-generator', name: 'Instagram', component: () => import('@/views/generators/InstagramGenerator.vue'), meta: { title: 'Instagram QR Code Generator', description: 'seo.instagram.description' } },
            { path: 'telegram-qr-code-generator', name: 'Telegram', component: () => import('@/views/generators/TelegramGenerator.vue'), meta: { title: 'Telegram QR Code Generator', description: 'seo.telegram.description' } },
            { path: 'email-qr-code-generator', name: 'Email', component: () => import('@/views/generators/EmailGenerator.vue'), meta: { title: 'Email QR Code Generator', description: 'seo.email.description' } },
            { path: 'vcard-qr-code-generator', name: 'vCard', component: () => import('@/views/generators/VCardGenerator.vue'), meta: { title: 'vCard QR Code Generator', description: 'seo.vcard.description' } },
            { path: 'sms-qr-code-generator', name: 'SMS', component: () => import('@/views/generators/SmsGenerator.vue'), meta: { title: 'SMS QR Code Generator', description: 'seo.sms.description' } },
            { path: 'whatsapp-qr-code-generator', name: 'WhatsApp', component: () => import('@/views/generators/WhatsappGenerator.vue'), meta: { title: 'WhatsApp QR Code Generator', description: 'seo.whatsapp.description' } },
            { path: 'facebook-qr-code-generator', name: 'Facebook', component: () => import('@/views/generators/FacebookGenerator.vue'), meta: { title: 'Facebook QR Code Generator', description: 'seo.facebook.description' } },
            { path: 'youtube-qr-code-generator', name: 'YouTube', component: () => import('@/views/generators/YoutubeGenerator.vue'), meta: { title: 'YouTube QR Code Generator', description: 'seo.youtube.description' } },
            { path: 'tiktok-qr-code-generator', name: 'TikTok', component: () => import('@/views/generators/TiktokGenerator.vue'), meta: { title: 'TikTok QR Code Generator', description: 'seo.tiktok.description' } },
            { path: 'linkedin-qr-code-generator', name: 'LinkedIn', component: () => import('@/views/generators/LinkedinGenerator.vue'), meta: { title: 'LinkedIn QR Code Generator', description: 'seo.linkedin.description' } },
            { path: 'discord-qr-code-generator', name: 'Discord', component: () => import('@/views/generators/DiscordGenerator.vue'), meta: { title: 'Discord QR Code Generator', description: 'seo.discord.description' } },
            { path: 'phone-qr-code-generator', name: 'Phone', component: () => import('@/views/generators/PhoneGenerator.vue'), meta: { title: 'Phone QR Code Generator', description: 'seo.phone.description' } },
            { path: 'location-qr-code-generator', name: 'Location', component: () => import('@/views/generators/LocationGenerator.vue'), meta: { title: 'Location QR Code Generator', description: 'seo.location.description' } },
            { path: 'pdf-qr-code-generator', name: 'PDF', component: () => import('@/views/generators/PdfGenerator.vue'), meta: { title: 'PDF QR Code Generator', description: 'seo.pdf.description' } },
            { path: 'image-qr-code-generator', name: 'Image', component: () => import('@/views/generators/ImageGenerator.vue'), meta: { title: 'Image QR Code Generator', description: 'seo.image.description' } },
            { path: 'video-qr-code-generator', name: 'Video', component: () => import('@/views/generators/VideoGenerator.vue'), meta: { title: 'Video QR Code Generator', description: 'seo.video.description' } },
            { path: 'file-download-qr-code-generator', name: 'File', component: () => import('@/views/generators/FileDownloadGenerator.vue'), meta: { title: 'File Download QR Code Generator', description: 'seo.file-download.description' } },
        ]
    },
    {
        path: '/',
        component: () => import('@/views/InfoLayout.vue'),
        children: [
            { path: 'qr-kod-nima', name: 'WhatIsQr', component: () => import('@/views/info/WhatIsQr.vue'), meta: { title: 'QR Kod Nima? | OsonQR', description: 'info.whatIsTitle' } },
            { path: 'qr-kod-qanday-yaratiladi', name: 'HowToCreate', component: () => import('@/views/info/HowToCreate.vue'), meta: { title: 'QR Kod Qanday Yaratiladi? | OsonQR', description: 'info.howToCreateTitle' } },
            { path: 'qr-kod-qanday-ishlaydi', name: 'HowItWorks', component: () => import('@/views/info/HowItWorks.vue'), meta: { title: 'QR Kod Qanday Ishlaydi? | OsonQR', description: 'info.howItWorksTitle' } },
            { path: 'qr-kod-qayerda-ishlatiladi', name: 'WhereToUse', component: () => import('@/views/info/WhereToUse.vue'), meta: { title: 'QR Kod Qayerda Ishlatiladi? | OsonQR', description: 'info.whereToUseTitle' } },
            { path: 'bepul-qr-kod', name: 'FreeQr', component: () => import('@/views/info/FreeQr.vue'), meta: { title: 'Mutlaqo Bepul QR Kod | OsonQR', description: 'info.freeQrTitle' } }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.afterEach((to) => {
    // Set Title
    if (to.meta && to.meta.title) {
        document.title = to.meta.title + ' - OsonQR';
    } else {
        document.title = 'OsonQR - Bepul va Oson QR Kod Generatori';
    }

    // Set Meta Description
    if (to.meta && to.meta.description) {
        const description = i18n.global.t(to.meta.description);
        let metaDesc = document.querySelector('meta[name="description"]');
        if (!metaDesc) {
            metaDesc = document.createElement('meta');
            metaDesc.setAttribute('name', 'description');
            document.head.appendChild(metaDesc);
        }
        metaDesc.setAttribute('content', description);
    }
})

export default router
