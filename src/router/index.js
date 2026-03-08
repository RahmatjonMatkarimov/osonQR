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
            { path: 'twitter-qr-code-generator', name: 'Twitter', component: () => import('@/views/generators/TwitterGenerator.vue'), meta: { title: 'Twitter QR Code Generator', description: 'seo.twitter.description' } },
            { path: 'pinterest-qr-code-generator', name: 'Pinterest', component: () => import('@/views/generators/PinterestGenerator.vue'), meta: { title: 'Pinterest QR Code Generator', description: 'seo.pinterest.description' } },
            { path: 'snapchat-qr-code-generator', name: 'Snapchat', component: () => import('@/views/generators/SnapchatGenerator.vue'), meta: { title: 'Snapchat QR Code Generator', description: 'seo.snapchat.description' } },
            { path: 'app-store-qr-code-generator', name: 'AppStore', component: () => import('@/views/generators/AppStoreGenerator.vue'), meta: { title: 'App Store QR Code Generator', description: 'seo.app-store.description' } },
            { path: 'google-play-qr-code-generator', name: 'GooglePlay', component: () => import('@/views/generators/GooglePlayGenerator.vue'), meta: { title: 'Google Play QR Code Generator', description: 'seo.google-play.description' } },
            { path: 'bitcoin-qr-code-generator', name: 'Bitcoin', component: () => import('@/views/generators/BitcoinGenerator.vue'), meta: { title: 'Bitcoin QR Code Generator', description: 'seo.bitcoin.description' } },
            { path: 'ethereum-qr-code-generator', name: 'Ethereum', component: () => import('@/views/generators/EthereumGenerator.vue'), meta: { title: 'Ethereum QR Code Generator', description: 'seo.ethereum.description' } },
            { path: 'event-qr-code-generator', name: 'Event', component: () => import('@/views/generators/EventGenerator.vue'), meta: { title: 'Event QR Code Generator', description: 'seo.event.description' } },
            { path: 'mp3-qr-code-generator', name: 'Mp3', component: () => import('@/views/generators/Mp3Generator.vue'), meta: { title: 'MP3 Audio QR Code Generator', description: 'seo.mp3.description' } },
            { path: 'google-reviews-qr-code-generator', name: 'GoogleReviews', component: () => import('@/views/generators/GoogleReviewsGenerator.vue'), meta: { title: 'Google Reviews QR Code Generator', description: 'seo.google-reviews.description' } },
            { path: 'twitch-qr-code-generator', name: 'Twitch', component: () => import('@/views/generators/TwitchGenerator.vue'), meta: { title: 'Twitch QR Code Generator', description: 'seo.twitch.description' } },
            { path: 'reddit-qr-code-generator', name: 'Reddit', component: () => import('@/views/generators/RedditGenerator.vue'), meta: { title: 'Reddit QR Code Generator', description: 'seo.reddit.description' } },
            { path: 'viber-qr-code-generator', name: 'Viber', component: () => import('@/views/generators/ViberGenerator.vue'), meta: { title: 'Viber QR Code Generator', description: 'seo.viber.description' } },
            { path: 'paypal-qr-code-generator', name: 'Paypal', component: () => import('@/views/generators/PaypalGenerator.vue'), meta: { title: 'PayPal QR Code Generator', description: 'seo.paypal.description' } },
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
            { path: 'bepul-qr-kod', name: 'FreeQr', component: () => import('@/views/info/FreeQr.vue'), meta: { title: 'Mutlaqo Bepul QR Kod | OsonQR', description: 'info.freeQrTitle' } },
            { path: 'qr-kod-vizitka-uchun', name: 'BusinessCardInfo', component: () => import('@/views/info/BusinessCardInfo.vue'), meta: { title: 'Vizitkalar Uchun QR Kod | OsonQR', description: 'info.businessCardTitle' } },
            { path: 'qr-menyu-yaratish', name: 'RestaurantMenuInfo', component: () => import('@/views/info/RestaurantMenuInfo.vue'), meta: { title: 'QR Menyu Yaratish | OsonQR', description: 'info.restaurantMenuTitle' } },
            { path: 'statik-va-dinamik-qr-kod-farqi', name: 'StaticVsDynamicInfo', component: () => import('@/views/info/StaticVsDynamicInfo.vue'), meta: { title: 'Statik va Dinamik QR Kod Farqi | OsonQR', description: 'info.staticVsDynamicTitle' } },
            { path: 'qr-kod-xavfsizligi', name: 'SecurityInfo', component: () => import('@/views/info/SecurityInfo.vue'), meta: { title: 'QR Kod Xavfsizligi | OsonQR', description: 'info.securityTitle' } },
            { path: 'qr-kod-chop-etish', name: 'PrintingInfo', component: () => import('@/views/info/PrintingInfo.vue'), meta: { title: 'QR Kodni Chop Etish Qoidalari | OsonQR', description: 'info.printingTitle' } },
            { path: 'qr-kod-kuchmas-mulk-uchun', name: 'RealEstateInfo', component: () => import('@/views/info/RealEstateInfo.vue'), meta: { title: 'Ko\'chmas Mulk Uchun QR Kod | OsonQR', description: 'info.realEstateTitle' } },
            { path: 'qr-kod-turizm-uchun', name: 'TourismInfo', component: () => import('@/views/info/TourismInfo.vue'), meta: { title: 'Turizm va Sayohatda QR Kod | OsonQR', description: 'info.tourismTitle' } },
            { path: 'qr-kod-marketing-strategiyasi', name: 'MarketingInfo', component: () => import('@/views/info/MarketingInfo.vue'), meta: { title: 'QR Kod Marketing Strategiyasi | OsonQR', description: 'info.marketingTitle' } },
            { path: 'qr-kod-tuy-uchun', name: 'WeddingInfo', component: () => import('@/views/info/WeddingInfo.vue'), meta: { title: 'To\'y Taklifnomalari Uchun QR Kod | OsonQR', description: 'info.weddingTitle' } },
            { path: 'pdf-va-url-qr-kod-farqi', name: 'PdfVsUrlInfo', component: () => import('@/views/info/PdfVsUrlInfo.vue'), meta: { title: 'PDF va URL QR Kod Farqi | OsonQR', description: 'info.pdfVsUrlTitle' } },
            { path: 'qr-kod-dizayni-maslahatlar', name: 'DesignTipsInfo', component: () => import('@/views/info/DesignTipsInfo.vue'), meta: { title: 'QR Kod Dizayni Bo\'yicha Maslahatlar | OsonQR', description: 'info.designTipsTitle' } },
            { path: 'qr-kod-talim-uchun', name: 'EducationInfo', component: () => import('@/views/info/EducationInfo.vue'), meta: { title: 'Ta\'limda QR Kod | OsonQR', description: 'info.educationTitle' } },
            { path: 'qr-kod-logistika-uchun', name: 'LogisticsInfo', component: () => import('@/views/info/LogisticsInfo.vue'), meta: { title: 'Logistikada QR Kod | OsonQR', description: 'info.logisticsTitle' } },
            { path: 'qr-kod-tibbiyot-uchun', name: 'HealthcareInfo', component: () => import('@/views/info/HealthcareInfo.vue'), meta: { title: 'Tibbiyotda QR Kod | OsonQR', description: 'info.healthcareTitle' } },
            { path: 'qr-kod-savdo-uchun', name: 'RetailInfo', component: () => import('@/views/info/RetailInfo.vue'), meta: { title: 'Savdoda QR Kod | OsonQR', description: 'info.retailTitle' } },
            { path: 'qr-kod-iphone-and-android', name: 'IphoneAndroidInfo', component: () => import('@/views/info/IphoneAndroidInfo.vue'), meta: { title: 'iPhone va Android Skanerlash | OsonQR', description: 'info.iphoneAndroidTitle' } }
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
