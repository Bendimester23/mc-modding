---
title: "Változók, Elágazások és ciklusok"
date: 2022-09-18T13:40:00+02:00
draft: false
weight: 4
---

Ebben a leckében a címben leírt dolgokról lesz szó.

## Változók
Ezek ilyen változtatható [(kivéve amikor nem)](#konstansok) cuccok amikben adatokat tárolhatsz.
```java
int a = 69;
System.out.println(a); // 69
a = 420;
System.out.println(a); // 420
```
A fenti kódrészletben deklarálunk egy `Integer`(int) típusú változót. Ez: 
 - 4 bájtot fogal a memóriában,
 - csak egész számokat tárolhat el,
 - a mérete miatt a maximális értéke 2³¹, a minimális értéke pedig -2³¹.

## Konstansok
Ezek változók, de nem változhatnak.
```java
final int a = 69;
System.out.println(a); // 69
a = 420; //Ez nem fog compileolni.
```

## Alap típusok
Változó minden classból lehet, de vannak beépítettek is. Ezek egy része a primitív típusok, őket kis betűvel kezdjük.
 - int (Integer, egész számokat tárol 32 biten)
 - float (Float, tört számokat tárol 32 biten)
 - long (Long, egész számokat tárol 64 biten)
 - double (Double, tört számokat tárol 64 biten)
 - boolean (Boolean, igaz, hamis érték 8 biten)
 - byte (Byte, egész szám 8 biten)
 - String (szöveget tárol el UTF-8 kódolásban)
 - Array&lt;T&gt; (speciális. fix méretű lista T típusú változóból)

## Elágazások
ezek ilyen cuccok amik irányítják a kód futását
```java
int a = 42;

if (a == 69) { 
    System.out.println("igen"); //akkor fut le, ha az a egyenlő 69-el.
} else if (a == 420) {
    System.out.println("talán"); //akkor fut le, ha az első feltétel nem igaz, de ez igen
} else {
    System.out.println("nem"); //akkor fut le, amikor egyik feltétel sem igaz
}
```

## Ciklusok
2 ilyen cucc van
### For
```java
for (int i = 0; i < max; i++) {
    System.out.println("Igen");
}
```
A for tetejében lévő 3 kód közül:
 - az első az elején fut csak le,
 - a második igaz hamis értéket ad vissza attól függően hogy fusson e még a kód,
 - az utolsó minden futás után lefut
Így ez a kód annyiszor írja ki hogy igen, amennyi a `max` változóban van.

### While
```java
while (true) {
    System.out.println("SPAM");
}
```
A While ciklus belseje addig fut, amíg az elejében lévő feltétel igaz. Tehát ebben az esetben addíg, amíg le nem állítod a programot.

Ciklusokban van két speciális utasítás:
 - **continue;**: az ettől lejjebbi kódot átugorja és egyből a következő futtatás jön.
 - **break;**: kilép a ciklusból és megállítja azt.