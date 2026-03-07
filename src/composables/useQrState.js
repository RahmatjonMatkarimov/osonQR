import { reactive } from 'vue'

export const qrState = reactive({
    data: 'https://example.com',
    colors: {
        dark: '#000000',
        light: '#ffffff',
    },
    shapes: {
        body: 'rounded', // 'rounded', 'dots', 'classy', 'classy-rounded', 'square', 'extra-rounded'
        eyeFrame: 'extra-rounded', // 'dot', 'square', 'extra-rounded'
        eyeBall: 'dot' // 'dot', 'square'
    },
    size: 300,
    logoUrl: '' // optional base64 or URL
})
