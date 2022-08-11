<script lang="ts" setup>
definePageMeta({
    layout: `guide`,
    middleware: `auth`
})

useHead({
    title: `Mc Modding | Szügkséges programok`
})
</script>

<template>
    <div class="p-2 break-words overflow-y-scroll">
        <p class="font-bold underline text-3xl">Szükséges programok:</p>
        <ul class="list-disc ml-6">
            <li><a href="https://adoptium.net/" class="underline">JDK(Java Developement Kit) 17</a></li>
            <li>Valamilyen IDE:
                <ul class="list-disc ml-6">
                    <li>
                        <a href="https://code.visualstudio.com/" class="underline">Visual Studio Code</a>
                    </li>
                    <li>vagy</li>
                    <li>
                        <a href="https://www.jetbrains.com/idea/download/" class="underline">JetBrains IntellIJ IDEA (Community vagy Ultimate)</a>
                    </li>
                </ul>

            </li>
        </ul>
        <p>Amennyiben van legalább 8Gb RAM a gépedben, én az utóbbit javaslom, mert az sok dolgot megkönnyít</p>
        <p>Ha a VSCodera esett a választásod, ajánlott letölteni benne a Java Extension packet.</p>
    </div>
</template>