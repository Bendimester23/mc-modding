<script lang="ts" setup>
definePageMeta({
    middleware: [`auth`, `access`],
    layout: `guide`
})
useHead({
    title: `MC Modding | Útmutatók`
})
</script>

<template>
    <div class="flex flex-col text-center mx-auto">
        <h1 class="text-3xl font-bold my-auto">Válassz tananyagot!<br>&lt;------------------</h1>
    </div>
</template>
