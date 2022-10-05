---
title: "Osztályok"
date: 2022-10-05T15:13:00+02:00
draft: false
weight: 5
---

Az osztály az objektumorientált programozás alapja. Javaban minden file vagy egy osztály(kivéve amikor interface, enum vagy record de azokról még nem beszélünk).

# Miért?
Mert.
`SomeClass.java`
```java
public class SomeClass {
    String toSay;

    public void setSomething() {
        toSay = "something";
    }

    public void saySomething() {
        System.out.println(toSay);
    }
}
```
`Main.java`
```java
import some.other.place.SomeClass;

public class Main {
    public static void main(String[] args) {
        SomeClass someObject = new SomeClass();
        someObject.setSomething();
        someObject.saySomething();
    }
}
```

A fenti kódrészletekben látható 2 osztály. Ezek közül az egyik a Main, ami csak az entrypoint, a másik viszont tartalmaz pár dolgot. Ezt nem igazán tudom elmagyarázni, de megpróbálom. Az osztály olyan mint egy terv, ami alapján egy objektum készül. Az objektum mellé jár a "terv" is, így elérhetőek az objektumon a statikus változók.

# Konstruktor
Az osztályokban deklarálatsz változókat és metódusokat is. Emellett létezik egy constructor nevű speciális metódus.
```java
public class Thing {
    public Thing() {
        System.out.println("ez akkor fut le amikor létrehozol egy példányt ebből a classból");
    }
}
```

# Öröklődés
A classok örökölhetnek tulajdonságokat egy másik classtól, sőt mindegyik class örökli az Object class tulajdonságait.
```java
public class Dog extends Animal {

}
```

