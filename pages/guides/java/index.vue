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
        <h1 class="font-bold underline text-white">A Java programozási nyelv:</h1>
        <p>A Java általános célú, objektumorientált programozási nyelv, amelyet a Sun Microsystems fejlesztett a ’90-es évek elejétől kezdve egészen 2009-ig, amikor a céget felvásárolta az Oracle</p>

        <p>A többi compileol programozási nyelvvel ellentétben a Java nem gépi kódba fordul, hanem <b>bytecode</b>ba. Ezt a kódot a <b>JVM</b> tudja lefuttatni, így egy kód minimális módosításokkal mindenen elfut, amire elérhető <b>JVM</b>.</p>
        <p>A JVM a <b>J</b>ava <b>V</b>irtual <b>M</b>achine rövidítése. Ez egy program, ami értelmezi és futtatja a bytecodeot. 
        Úgy kell elképzelni mint egy processzor, aminek ez a gépi kódja. Több különböző JVM létezik, legismertebbek: Oracle, AdoptOpenJDK, Eclipse Termuin, de példáúl egy időben a Microsoft is fejlesztett eggyet.
        </p>

        <p>A Java bytecode a sima x86 gépi kódnál lényegesen több információt tart meg a kódról, így könnyű visszafejteni/szerkeszteni. Ez teszi lehetővé a Minecraft modolását.</p>
        
        <span>Egy java program és a visszafejtett kódja:</span>
        <img src="@/assets/img/0.png" alt="Az eredeti és a visszafejtett kód.">

        
    </div>
</template>