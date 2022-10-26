---
title: "Interfacek"
date: 2022-10-26T18:13:00+02:00
draft: false
weight: 6
---

Az interfészek félig meddig classok, de általában nem tartalmaznak kódot.

```java
interface CanMove {
    void move();

    default boolean canMove() {
        return true;
    }
}
```

Bennük általában nem írjuk meg a metódusok belsejét, de van amikor szükség lehet rá. Arra használjuk őket hogy később osztályoknak legyen közös tulajdonságuk.

```java
class Dog extends Animal implements CanMove {
    ...
    @Overide
    void move() {
        System.out.println(this.name + " fut.");
    }
}
```
```java
class Cat extends Animal implements CanMove {
    ...
    @Overide
    void move() {
        System.out.println(this.name + " sétál a tetőn.");
    }
}
```

Ezek után fel is használhatjuk őket.
```java
class Main() {
    public static void main(String[] args) {
        Dog frakk = new Dog();
        Cat nemtudokmacskaneveket = new Cat();

        //Közvetlenül megadhatjuk paraméternek mindkét classt holott egyik sem CanMove típusú. Ez azért van mert mindkettő implementálja azt.
        doTheMoving(frakk);
        doTheMoving(nemtudokmacskaneveket);
    }

    public static void doTheMoving(CanMove thing) {
        thing.move();
    }
}
```

## Fontos!
Az interface nem összekeverendő az abstract osztályokkal. Az interface általában a közös tulajdonságok implementálására van, míg az abstract osztályok az abstract fogalmakra van, mint pl.: az állat, mivel ez egylétező "csoport", de nem létezik valami ami simán csak állat.
