<template>
    <div class="space-y-4">
        <div class="grid grid-cols-2 gap-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">{{ $t('forms.firstName') }}</label>
                <input type="text" v-model="firstName"
                    class="w-full rounded-lg border-gray-300 shadow-sm px-4 py-3 border focus:ring-2 focus:ring-brand-500 outline-none text-gray-900" />
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">{{ $t('forms.lastName') }}</label>
                <input type="text" v-model="lastName"
                    class="w-full rounded-lg border-gray-300 shadow-sm px-4 py-3 border focus:ring-2 focus:ring-brand-500 outline-none text-gray-900" />
            </div>
        </div>

        <div class="grid grid-cols-2 gap-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">{{ $t('forms.phone') }}</label>
                <input type="tel" v-model="phone"
                    class="w-full rounded-lg border-gray-300 shadow-sm px-4 py-3 border focus:ring-2 focus:ring-brand-500 outline-none text-gray-900" />
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">{{ $t('forms.email') }}</label>
                <input type="email" v-model="email"
                    class="w-full rounded-lg border-gray-300 shadow-sm px-4 py-3 border focus:ring-2 focus:ring-brand-500 outline-none text-gray-900" />
            </div>
        </div>

        <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">{{ $t('forms.company') }}</label>
            <input type="text" v-model="company"
                class="w-full rounded-lg border-gray-300 shadow-sm px-4 py-3 border focus:ring-2 focus:ring-brand-500 outline-none text-gray-900" />
        </div>

        <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">{{ $t('forms.jobTitle') }}</label>
            <input type="text" v-model="title"
                class="w-full rounded-lg border-gray-300 shadow-sm px-4 py-3 border focus:ring-2 focus:ring-brand-500 outline-none text-gray-900" />
        </div>

        <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">{{ $t('forms.website') }}</label>
            <input type="url" v-model="url"
                class="w-full rounded-lg border-gray-300 shadow-sm px-4 py-3 border focus:ring-2 focus:ring-brand-500 outline-none text-gray-900" />
        </div>
    </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { qrState } from '@/composables/useQrState'

const firstName = ref('')
const lastName = ref('')
const phone = ref('')
const email = ref('')
const company = ref('')
const title = ref('')
const url = ref('')

const updateQr = () => {
    let vcard = 'BEGIN:VCARD\nVERSION:3.0\n'

    if (firstName.value || lastName.value) {
        vcard += `N:${lastName.value};${firstName.value}\n`
        vcard += `FN:${firstName.value} ${lastName.value}\n`
    }

    if (company.value) vcard += `ORG:${company.value}\n`
    if (title.value) vcard += `TITLE:${title.value}\n`
    if (phone.value) vcard += `TEL;TYPE=WORK,VOICE:${phone.value}\n`
    if (email.value) vcard += `EMAIL:${email.value}\n`
    if (url.value) vcard += `URL:${url.value}\n`

    vcard += 'END:VCARD'

    qrState.data = vcard
}

onMounted(updateQr)
watch([firstName, lastName, phone, email, company, title, url], updateQr)
</script>
