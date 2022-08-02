<script lang="ts" setup>
const user = useSupabaseUser()

const client = useSupabaseClient()
const router = useRouter()

const logout = async () => {
    const { error } = await client.auth.signOut()

    if (error != null) return alert(`Hiba!`)

    await router.push(`/`)
}
</script>

<template>
    <div class="w-screen h-12 min-h-[3rem] bg-slate-700 text-white px-2 flex flex-row shadow-lg">
        <NuxtLink class="text-3xl my-auto" to="/">Mc Modding</NuxtLink>
        <p class="flex-grow"></p>
        <NuxtLink class="text-2xl my-auto mr-2 hover:underline transition-all" to="/guides">Tananyagok</NuxtLink>
        <NuxtLink class="text-2xl my-auto mr-2 hover:underline transition-all" to="/quiz">Quizek</NuxtLink>
        <div class="bg-slate-800 h-8 rounded-tl-3xl rounded-bl-3xl rounded-r-lg my-auto w-fit flex flex-row">
            <img :src="user?.user_metadata?.picture" alt="Profilkép" class="rounded-3xl w-8 h-8">
            <span class="text-xl mx-1">{{ user?.user_metadata?.name || `Béla` }}</span>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" @click="logout()"
            class="h-8 w-8 my-auto ml-2 hover:text-red-500 transition-all duration-300 cursor-pointer" fill="none"
            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        </svg>
    </div>
</template>
