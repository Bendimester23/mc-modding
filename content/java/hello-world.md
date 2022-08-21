---
title: "Hello World"
date: 2022-08-21T12:42:57+02:00
draft: false
weight: 3
---

Ebben a tutorial-ban megírjuk a "Hello World" programot Java-ban és értelmezzük.

{{% notice style="red" title="Fontos!" %}}
A file nevének ```Project.java```-nak kell lennie
{{% /notice %}}

```java
package hu.bendi.project;

public class Program {

    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
}
```

## Futtatás:
Bár javaslom a gradle használatát, itt még leírom hogy lehet nélküle:
```bash
java Program.java
```
Ez a parancs lefordítja és futtatja az adott programot.
### Gradle esetében:
 - `./gradlew build`
 - A build mappában pedig: `java -jar my-super-cool-java-file.jar`

## Értelmezés:
 - A ```package hu.bendi.project;``` sor megadja a package-t(milyen meglepő). Ez mindíg az src mappán belüli elérési út pontokkal elválasztva.
 - A ```public class Program {``` sor deklarál egy publikus class-t(erről részletesebben majd még lesz szó). A publikus itt arra utal, hogy ezt az osztályt bármely más osztály használhatja, így a JVM beépített cuccai is.
 - A ```public static void main(String[] args) {``` sor deklarál egy metódust main névvel és egy String(tetszőleges hosszú szöveg) lista argumentummal, ezek lesznek a program argumentumai. A név kötött, mivel ezt fogja a JVM keresni elindításkor. Ahhoz hogy a JVM le tudja futtatni a kódot, a metódusnak publikusnak és statikusnak kell lennie. A publikusról már volt szó, de a statikusról még nem.

 Amennyiben van egy metódusod, azt legtöbbször egy példányon kell lefuttasd:
 ```java
 MyClass instance = new MyClass();
 //Így nem fog menni ❌:
 MyClass.myMethod();
 //Így fog működni ✅:
 instance.myMethod();
 ```
 Így a metódus hozzáfér az összes változójához és metódusához a class-nak. Ellenben ha statikusan deklarálod a metódust, az nem fog hozzáférni csak a többi statikusan dekralált dologhoz, viszont nem fog kelleni egy példány hogy lefuttasd.

 ```java
 MyClass.myStaticMethod();
 ```

 - A `System` class statikus változója az `out`, ami egy `PrintStream`, tehát adatokat tudsz belerakni. Ez közvetlenül hozzá van kötve a program számára fenntartott `standard output`-hoz, úgy mint C++ban a `cout`.
