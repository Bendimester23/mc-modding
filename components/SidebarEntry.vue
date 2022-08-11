<script lang="ts" setup>
const { url } = defineProps([`url`])
const level = ref(url.split(`/`).length - 3)
const font = ref(`text-xl`)

const route = useRoute()

switch (level.value) {
    case 1:
        font.value = `text-lg`
        break
    case 2:
        font.value = `text-md`
}
</script>

<template>
    <NuxtLink :to="url" :class="`ml-${level * 2 + 2} ${font} ${route.path == url && `font-bold`} hover:underline transition-all duration-200`">
        <slot></slot>
    </NuxtLink><br>
</template>
