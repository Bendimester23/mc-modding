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
        <h1 class="font-bold underline text-white">Java projekt létrehozása:</h1>
        <p>Mint minden compileolt nyelvnek, a Javanak is szüksége van egy build systemre, hogy ne legyen rémálom a programunk buildelése és a dependencyk kezelése.
            Abban az időben, amikor a Java készült, még nem volt divat a nyelvhez egy használható build systemet adni, ezért nekünk a közösség által létrehozott Gradle-t kell használjuk.
            (igazából a tanulás ebben a szakaszában nem szükséges, de így azoknak akik nem IntelliJ IDEA-t használnak könnyebb és jó minnél hamarabb megszokni a használatát)
        </p>

        <h3>IntelliJ IDEA:</h3>
        <p>Amennyiben IntelliJ-t használsz, könnyű dolgod van.
            <ol>
                <li>Első lépésként rá kell kattints a 'New Project' gombra.
                    <img src="@/assets/img/1.png" alt="Most vagy én rontottam el valamit és nem tölt be a kép, vagy látássérült vagy. Amennyiben az utóbbi, hogyan programozol?">
                </li>
                <li>
                    A felugró ablakban válaszd a Gradle opciót majd nyomj a 'Next' gombra
                    <img src="@/assets/img/2.png">
                </li>
                <li>
                    Projekt névnek megadod a projekt nevét, majd lenyitod az 'Artifact Coordinates' menüt és beírod a groupId-t(ez általában tld.név tehát pl hu.aneved)
                    <img src="@/assets/img/3.png">
                </li>
                <li>
                    Ezek után még várni kell kicsit hogy betöltsön a projekt és szinkronizálja a gradle projektet, de utánna kész is a projekt.
                </li>
            </ol>
        </p>

        <h3 class="text-white">Visual Studio Code</h3>
        <p>
            A VSCode esetében ennél kicsit bonyolúltabb a dolog.
            <ol>
                <li>
                    Telepítsd a Gradle-t! <a href="https://gradle.org/install/">Itt tudod letölteni</a>
                </li>
                <li>
                    Nyisd meg a projekt mappáját VSCodeban!
                </li>
                <li>
                    A terminálba írd be ezt: <code>gradle init</code>
                </li>
                <li>
                    Válaszd ki hogy 'application'!
                </li>
                <li>
                    Válaszd ki a nyelvet!
                </li>
                <li>
                    A subprojectes kérdésre válaszolj nemmel!
                </li>
                <li>
                    A buildscript Kotlin legyen!
                </li>
                <li>A többi lehet nyugodtan a default!</li>
                <li>Elvileg kész a projekt.</li>
            </ol>
        </p>
    </div>
</template>