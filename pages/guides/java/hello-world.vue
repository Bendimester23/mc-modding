<script lang="ts" setup>
definePageMeta({
    layout: `guide`,
    middleware: `auth`
})

useHead({
    title: `Mc Modding | Java alapok`
})
</script>

<template>
    <div class="p-2 break-words overflow-y-scroll prose text-white max-w-none">
        <h1 class="font-bold underline text-white">Hello World</h1>
        <p>Ebben a tutorialban megírjuk a Hello World programot Javaban és értelmezzük.</p>

        <img src="@/assets/img/code/0.png" alt="Hello World kódja">

        <ul>
            <li>
                A <code class="text-slate-300">package hu.bendi.project;</code> sor megadja a packaget(milyen meglepő). Ez mindíg az src mappán belüli elérési út pontokkal elválasztva.
            </li>
            <li>
                A <code class="text-slate-300">public class Program {</code> sor deklarál egy osztályt(ezekről később majd még lesz szó).
                A public kulcsszó azt jelöli hogy az osztály szabadon elérhető más fájlokból. Az osztály neve mindíg megegyezik a file nevével(természetesen a kiterjesztés nélkül). Megegyezés szerint 
            </li>
        </ul>
    </div>
</template>