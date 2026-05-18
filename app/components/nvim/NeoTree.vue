<script setup lang="ts">
import type { TreeNode } from '~/types/tree'

defineProps<{
    nodes: TreeNode[]
}>()
</script>

<template>
    <aside class="fixed inset-y-0 left-0 w-64 bg-[var(--color-bg)] border-r border-[var(--color-border)] flex flex-col">

        <div class="flex-1 overflow-y-auto py-1">
            <NvimNeoTreeNode
                v-for="node in nodes"
                :key="node.path"
                :node="node"
                :depth="0"
            />
        </div>
    </aside>
</template>
