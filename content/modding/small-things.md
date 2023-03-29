---
title: "Használható itemek"
date: 2023-03-29T10:32:00+01:00
draft: false
weight: 3
---

Ebben a leckében csinálunk egy itemet ami jobb kattintásra felrobban.

## Egy kis egyszerűsítés
Ahogy haladunk a moddal, egyre több dolgot kell regisztrálni a Registry-be, és mindegyikhez Létre kell hozzunk egy Identifier-t: `new Identifier("mod", "id")`. 
Ez csak akkor baj ha példáúl megváltoztatjuk a modid-t és mindenhol át kell írjuk.
Erre egy megoldás ha valahol csinálunk egy ilyen methodot: 
```java
public static Identifier i(String name) {
    return new Identifier("mod", name);
}
```
és ki is cserélhetjük mindenhol az identifiereket így: 
```java
Registry.register(Registry.ITEM, i("my_item"), MY_ITEM);
```

## Dinamit
Most hogy ezzel is megvagyunk, elkezdhetjük csinálni az itemet. Most egy dinamitot csinálunk ami jobb kattintásra felrobban(később majd el is lehet dobni).
Mivel ez már egy bonyolúltabb item, ezért "kiegészítjük" az Item class-t a szükséges tulajdonságokkal:
```java
public class Dynamite extends Item {
    public Dynamite() {
        super(new FabricItemSettings().group(ItemGroup.TOOLS).rarity(Rarity.RARE).maxCount(16));
    }

    [...]
}
```
Itt az item tulajdonságait már a constructorban megadjuk. A rarity csak az item nevének színét befolyásolja.

Ezek után felülírjuk az Item class use methodját, ami így akkor fog lefutni amikor használjuk az itemet:
```java
@Override
public TypedActionResult<ItemStack> use(World world, PlayerEntity user, Hand hand) {
        // elmentjük a pozíciót egy helyi változóba hogy ne kelljen hosszan leírni
        var p = user.getPos();
        //csinálunk egy robbanást(ez megjeleníti a füstöt és eltűnteti a blockokat, de néma)
        world.createExplosion(null, p.x, p.y, p.z, 10, Explosion.DestructionType.BREAK);
        //lejátszuk a robbanás hangot
        world.playSound(p.x, p.y, p.z, SoundEvents.ENTITY_GENERIC_EXPLODE, SoundCategory.PLAYERS, 1.0f, 1.0f, true);
        //elveszünk a játékostól egy darabot
        user.getInventory().removeStack(user.getInventory().selectedSlot, 1);
        //sikeres interakció, lejátszuk a kéz animációt
        return TypedActionResult.success(user.getStackInHand(hand), true);
}
```

Ezen kívül adunk leírást is az item-nek, mert miért ne. Ezt úgy tehetkük meg, hogy felülírjuk az appendTooltip methodot:
```java
@Override
public void appendTooltip(ItemStack stack, @Nullable World world, List<Text> tooltip, TooltipContext context) {
    tooltip.add(Text.literal("Explosive!").setStyle(Style.EMPTY.withColor(0xff0000)));
}
```

Ezek után már csak regisztrálnunk kell az item-et és megcsinálni hozzá a model-t meg a textúrát:
```java
public static final Item DYNAMITE_ITEM = new Dynamite();

@Override
public void onInitialize() {
    [...]
    Registry.register(Registry.ITEM, i("dynamite"), DYNAMITE_ITEM);
}
```

## A kész item
{{< raw_html >}}
<video width="900" controls>
  <source src="/dynamite.mp4" type="video/mp4">
</video>
{{< /raw_html >}}

