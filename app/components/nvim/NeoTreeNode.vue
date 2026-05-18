<script setup lang="ts">
import { ref, computed } from 'vue'
import { Icon } from '@iconify/vue'
import { useRouter } from 'vue-router'
import { mapFileIcon } from '~/utils/mapFileIcon'
import type { TreeNode } from '~/types/tree'
import NeoTreeNode from './NeoTreeNode.vue'

const props = defineProps<{
    node: TreeNode
    depth: number
    isLast?: boolean
}>()

const isFolder = computed(() => props.node.children !== undefined)
const isOpen = ref(props.depth === 0)
const router = useRouter()

function handleClick() {
    if (isFolder.value) {
        isOpen.value = !isOpen.value
    } else if (props.node.url) {
        router.push(props.node.url)
    }
}
</script>

<template>
    <div>
        <div
            class="relative flex items-center gap-1 cursor-pointer hover:bg-[var(--color-surface)] select-none"
            :style="{ paddingLeft: `${depth * 12 + 8}px` }"
            @click="handleClick"
        >
            <template v-if="depth > 0">
                <div
                    class="absolute h-px bg-[var(--color-border)]"
                    :style="{ left: `${(depth - 1) * 12 + 14}px`, top: '50%', width: '6px' }"
                />
                <div
                    v-if="isLast"
                    class="absolute w-px bg-[var(--color-border)]"
                    :style="{ left: `${(depth - 1) * 12 + 14}px`, top: 0, height: '50%' }"
                />
            </template>

            <Icon
                v-if="isFolder"
                :icon="isOpen ? 'material-symbols:folder-open-outline' : 'material-symbols:folder-outline'"
                class="text-[var(--color-accent1)] shrink-0"
                width="14"
                height="14"
            />
            <Icon
                v-else
                :icon="mapFileIcon(node.fileType)"
                class="text-[var(--color-accent3)] shrink-0"
                width="14"
                height="14"
            />
            <span class="t-xs py-0.5">{{ node.name }}</span>
        </div>

        <template v-if="isFolder && isOpen && node.children?.length">
            <div v-if="node.children!.length > 1" class="relative">
                <div
                    class="absolute top-0 bottom-0 w-px bg-[var(--color-border)] z-10 pointer-events-none"
                    :style="{ left: `${depth * 12 + 14}px` }"
                />
                <NeoTreeNode
                    v-for="child in node.children!.slice(0, -1)"
                    :key="child.path"
                    :node="child"
                    :depth="depth + 1"
                    :isLast="false"
                />
            </div>
            <NeoTreeNode
                :key="node.children![node.children!.length - 1].path"
                :node="node.children![node.children!.length - 1]"
                :depth="depth + 1"
                :isLast="true"
            />
        </template>
    </div>
</template>
