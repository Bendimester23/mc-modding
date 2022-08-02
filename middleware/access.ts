export default defineNuxtRouteMiddleware(async (to, _from) => {
    const res = await $fetch(`/api/has-access`, {
        headers: useRequestHeaders([`cookie`])
    })

    if (!res.access) {
        navigateTo(`/no-access`)
    }
})