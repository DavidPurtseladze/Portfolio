<script setup lang="ts">
import { tree } from '~/data/tree'
</script>

<template>
  <div class="h-screen bg-[var(--color-bg)] text-[var(--color-fg)] overflow-hidden">
    <NuxtRouteAnnouncer />
    <NvimNeoTree :nodes="tree" />

    <NvimLuaLine
        mode="NORMAL"
        branch="main"
        fileName="index"
        fileType="md"
        fileEncoding="utf-8"
        system="linux"
    />
  </div>
</template>

