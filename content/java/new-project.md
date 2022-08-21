---
title: "Projekt létrehozása"
date: 2022-08-20T12:45:28+02:00
draft: false
weight: 2
---

Mint minden compileolt nyelvnek, a Javanak is szüksége van egy build systemre, hogy ne legyen rémálom a programunk buildelése és a dependencyk kezelése. Abban az időben, amikor a Java készült, még nem volt divat a nyelvhez egy használható build systemet adni, ezért nekünk a közösség által létrehozott Gradle-t kell használjuk. (igazából a tanulás ebben a szakaszában nem szükséges, de így azoknak akik nem IntelliJ IDEA-t használnak könnyebb és jó minnél hamarabb megszokni a használatát) 

## IntellIJ IDEA esetében:
 1. Első lépésként rá kell kattints a 'New Project' gombra. ![1](/1.png)
 2. A felugró ablakban válaszd a Gradle opciót majd nyomj a 'Next' gombra  ![2](/2.png)
 3. Projekt névnek megadod a projekt nevét, majd lenyitod az 'Artifact Coordinates' menüt és beírod a groupId-t(ez általában tld.név tehát pl hu.aneved) ![3](/3.png)
 4. Ezek után még várni kell kicsit hogy betöltsön a projekt és szinkronizálja a gradle projektet, de utánna kész is a projekt. 

## Visual Studio Code:

A VSCode esetében ennél kicsit bonyolúltabb a dolog. 

{{% notice style="red" title="Fontos!" %}}
A kész projekt felépítése eltérhet, de a működés ugyan az lesz!
A forráskód az ```app/src/main/java``` mappában lesz ha így hozod létre a projectet.
{{% /notice %}}

 1. [Telepítsd a Gradle-t!](https://gradle.org/install/)
 2. Nyisd meg a project mappáját VSCodeban!
 3. A terminálba írd be ezt: ```gradle init```
 4. Válaszd ki hogy 'application'!
 5. Válaszd ki a nyelvet!
 6. A subprojectes kérdésre válaszolj nemmel!
 7. A buildscript Kotlin legyen!
 8. A többi lehet nyugodtan a default!
 9. Elvileg kész a projekt.
