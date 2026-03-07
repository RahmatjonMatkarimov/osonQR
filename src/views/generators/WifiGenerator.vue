<template>
  <div class="space-y-5">
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1">{{ $t('forms.ssid') }}</label>
      <input type="text" v-model="ssid" placeholder="MyWiFiNetwork"
        class="w-full rounded-lg border-gray-300 shadow-sm px-4 py-3 border focus:ring-2 focus:ring-brand-500 outline-none transition-all text-gray-900" />
    </div>

    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1">{{ $t('forms.password') }}</label>
      <input type="text" v-model="password" placeholder="••••••••"
        class="w-full rounded-lg border-gray-300 shadow-sm px-4 py-3 border focus:ring-2 focus:ring-brand-500 outline-none transition-all text-gray-900" />
    </div>

    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1">{{ $t('forms.encryption') }}</label>
      <select v-model="encryption"
        class="w-full rounded-lg border-gray-300 shadow-sm px-4 py-3 border focus:ring-2 focus:ring-brand-500 outline-none transition-all text-gray-900 bg-white">
        <option value="WPA">WPA/WPA2/WPA3</option>
        <option value="WEP">WEP</option>
        <option value="nopass">{{ $t('forms.none') }}</option>
      </select>
    </div>

    <div class="flex items-center gap-2 mt-2">
      <input type="checkbox" id="hidden" v-model="hidden"
        class="rounded text-brand-600 focus:ring-brand-500 border-gray-300">
      <label for="hidden" class="text-sm text-gray-700">{{ $t('forms.hiddenNetwork') }}</label>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { qrState } from '@/composables/useQrState'

const ssid = ref('')
const password = ref('')
const encryption = ref('WPA')
const hidden = ref(false)

const updateQr = () => {
  const enc = encryption.value
  const hid = hidden.value ? 'true' : 'false'
  // WIFI:S:<SSID>;T:<WEP|WPA|blank>;P:<PASSWORD>;H:<true|false|blank>;;
  if (!ssid.value) {
    qrState.data = 'WIFI:T:WPA;S:;P:;;'
    return
  }

  let str = `WIFI:S:${ssid.value};T:${enc};`
  if (enc !== 'nopass') {
    str += `P:${password.value};`
  }
  str += `H:${hid};;`

  qrState.data = str
}

onMounted(updateQr)

watch([ssid, password, encryption, hidden], updateQr)
</script>
