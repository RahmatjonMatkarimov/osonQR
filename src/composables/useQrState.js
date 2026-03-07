import { reactive } from 'vue'

export const qrState = reactive({
    data: 'https://example.com',
    colors: {
        dark: '#000000',
        light: '#ffffff',
    },
    size: 300,
    logoUrl: '' // optional base64 or URL
})
