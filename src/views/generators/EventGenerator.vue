<template>
    <div class="space-y-4">
        <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Event Title</label>
            <input type="text" v-model="event.title" placeholder="Annual Conference"
                class="w-full rounded-lg border-gray-300 shadow-sm px-4 py-2 border focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all text-gray-900 mb-2" />

            <label class="block text-sm font-medium text-gray-700 mb-1">Location</label>
            <input type="text" v-model="event.location" placeholder="City Hall"
                class="w-full rounded-lg border-gray-300 shadow-sm px-4 py-2 border focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all text-gray-900 mb-2" />

            <div class="grid grid-cols-2 gap-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                    <input type="datetime-local" v-model="event.start"
                        class="w-full rounded-lg border-gray-300 shadow-sm px-4 py-2 border focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all text-gray-900" />
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                    <input type="datetime-local" v-model="event.end"
                        class="w-full rounded-lg border-gray-300 shadow-sm px-4 py-2 border focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all text-gray-900" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, watch, onMounted } from 'vue'
import { qrState } from '@/composables/useQrState'

const event = reactive({
    title: '',
    location: '',
    start: '',
    end: ''
})

const formatVEvent = () => {
    const formatTime = (dt) => dt.replace(/[-:]/g, '') + '00Z'
    let data = 'BEGIN:VEVENT\n'
    data += `SUMMARY:${event.title}\n`
    if (event.location) data += `LOCATION:${event.location}\n`
    if (event.start) data += `DTSTART:${formatTime(event.start)}\n`
    if (event.end) data += `DTEND:${formatTime(event.end)}\n`
    data += 'END:VEVENT'
    return data
}

onMounted(() => {
    qrState.data = formatVEvent()
})

watch(event, () => {
    qrState.data = formatVEvent()
}, { deep: true })
</script>
