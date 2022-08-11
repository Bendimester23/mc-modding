<script lang="ts" setup>
import SidebarEntry from './SidebarEntry.vue';

const { pending, data } = useFetch(`/api/pages`)

</script>

<template>
<div class="p-2 bg-slate-800 min-h-screen overflow-y-hidden overflow-x-hidden w-64 min-w-[16rem] sticky">
    <SidebarEntry url="/guides/" v-if="pending">Betöltés...</SidebarEntry>
    <SidebarEntry v-for="k, v in data" :url="v">{{k}}</SidebarEntry>
</div>
</template>
