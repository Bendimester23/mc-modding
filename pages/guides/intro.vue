<script lang="ts" setup>
definePageMeta({
    layout: `guide`,
    middleware: `auth`
})

useHead({
    title: `Mc Modding | Bevezető`
})
</script>

<template>
    <div class="p-2 break-words overflow-y-scroll">
        <p class="font-bold underline text-3xl">Információk:</p>
        <p>Ez egy nagy téma, aminek csak egy részét fogjuk érinteni.<br>
            <b>Disclaimer:</b> A helyesírásom nem a legjobb és a fogalmazásban sem vagyok a legjobb.
        </p>

        <p class="mt-4 text-lg underline">Elvárások:</p>
        <ul class="list-disc ml-6">
            <li>Minimális angol tudás</li>
            <li>Legyen egy PC-d vagy laptopod(nem programozunk telefonon) (nem kell hihetetlenül erősnek lennie, de egy
                6-8Gb ram minimum legyen benne)</li>
            <li>Nem kötelező, de jó ha van: tapasztalat bármilyen C típusú programozási nyelvvel</li>
        </ul>

        <p class="mt-4 text-lg underline">Jelenleg ezekre a témákra gondoltam: </p>
        <ul class="list-disc ml-6 break-words">
            <li>Java alapok</li>
            <li>Pluginok írása(nem biztos, rég csináltam már ilyet)</li>
            <li>Modok készítése(szerveroldali, tartalmat hozzáadó)(a Fabric loadert fogjuk használni, mert a Forge nehéz
                és a Discord community nem számít plusz funkciónak, akármit mondanak a Quiltnél)</li>
            <li>A Minecraft protokol elemzése és egy saját szerver készítése aka. AMPEESSzK(igen, nagyon unatkozok) (itt
                a szerver alatt a programra gondolok, nem arra hogy lemásoljuk a Hypixelt)</li>
        </ul>

        <br>
        <p>A tananyagok majd szöveges, esetleg audiovizuális formában lesznek elérhetőek. (erre még ki kell találjak egy
        rendszert)</p>
        <p>Új tananyag határozatlan időnként jön majd. (mert nem akarok megígérni valamit, amit aztán nem tudok betartani)</p>
    </div>
</template>