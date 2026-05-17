<script setup lang="ts">
    import { Icon } from '@iconify/vue'

    defineProps({
        mode: String,
        branch: String,
        fileName: String, 
        fileType: String, 
        fileEncoding: String, 
        system: String 
    })
</script>

<template>
    <footer class="fixed inset-x-0 bottom-0 w-full flex justify-between h-6 bg-[var(--color-muted)]">
        <div class="flex h-full">
            <div class="w-fit px-2 t-xs flex items-center bg-[var(--color-accent1)]">
                {{ mode }}
            </div>

            <div class="w-fit t-xs px-2 flex gap-0.5 items-center bg-[var(--color-surface)]">
                <Icon icon="mdi:source-branch" />
                {{ branch }}
            </div>

            <div class="t-xs px-2 flex items-center">
                {{ fileName }}.{{ fileType }}
            </div>
        </div>

        <div class="flex h-full">
            <div class="t-xs ml-3 flex items-center">
                {{ fileEncoding }}
            </div>

            <div class="t-xs ml-3 flex items-center">
                <Icon width="16" height="16" v-if="system === 'linux'" icon="ant-design:linux-outlined" />
                <Icon width="16" height="16" v-else icon="tabler:brand-windows-filled" />
            </div>

            <div class="t-xs ml-3 flex gap-1 items-center">
                <Icon width="12" height="12" v-if="fileType === 'md'" icon="mdi:application-edit-outline" />
                <Icon width="12" height="12" v-else-if="fileType === 'lua'" icon="mdi:language-lua" />
                <Icon width="12" height="12" v-else icon="material-symbols:edit-document-outline" />

                {{ fileType }}
            </div>

            <div class="w-fit ml-3 px-2 t-xs flex items-center bg-[var(--color-accent1)]">
                1:1
            </div>
        </div>
    </footer>
</template>
