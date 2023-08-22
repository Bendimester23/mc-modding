---
title: "Blockstatek"
date: 2023-08-22T20:00:00+01:00
draft: false
weight: 4
---

Ebben a leckében csinálunk egy blockot aminek változik a megjelenése a blockstate alapján. A block amit csinálni fogunk egy "dinamit tartó" lesz, ami egy block mind a 6 oldalára rakható.

# Mi az a blockstate?

A blockstate egy adott helyen lévő block állapota ami 0 vagy több egyszeru" változóból áll amiktől függhet egy block kinézete és/vagy viselkedése. Egy nagyon egyszer példa erre az iránya egy log blocknak. A block ugyan az, de mégis máshogy néz ki mert van egy blockstate propertyje ami ezt befolyásolja.
De ezt használja még a redstone, a sínek, ajtók, kerítések és stb... Azért használják őket mert külön blockot csinálni minden irányhoz nem lenne túl okos ötlet. Ugyanakkor a ládának nincs sok különböző blockstateje a benne lévő itemek miatt, az már block entityket(vagy tile entityket, attól függ kit kérdezel) használnak, azokról majd később lesz szó.

# A blockunk

Első lépés elkészíteni a modellt hozzá. Én ezt megtettem blockbenchben(nem csinálok erről tutorialt mert már sok van). Ezek után létrehoztam egy új class-t ami extendeli a `net.minecraft.block.Block` class-t. 
Ebbe a classba kell egy ilyen változó: 
```java
    public static final DirectionProperty DIRECTION = DirectionProperty.of("direction"); 
```
Ezzel deklarálunk egy property-t, aminek `direction` a neve, de a játék még nem tud róla. Ehhez felül kell írjuk az `appendProperties` methodot és abban hozzáadni így:
```java
@Override
    protected void appendProperties(StateManager.Builder<Block, BlockState> builder) {
        builder.add(DIRECTION);
}
```
Ez még mindig nem elég, ugyanis most hogy vannak "változói" a blocknak, meg kell adni az alapértelmezett értéküket a constructorban, így:
```java
public DynamiteRackBlock() {
        super(FabricBlockSettings.of(Material.WOOD, MapColor.CLEAR).offsetType(OffsetType.NONE));
        setDefaultState(getStateManager().getDefaultState().with(DIRECTION, Direction.DOWN));
}
```
Így már lerakható a block crash nélkül. Most viszont meg kell írjuk a blockstate json-t. Ez a file mondja meg hogy melyik érték melyik modellt és hogyan(forgatás, eltolás stb.) töltse be. Egy jó alap ehhez a gombok blockstate json-je(kitöröljük a benyomódást és átírjuk a nevét). Valahogy így kell ennek kinéznie(lusta voltam megírni amikor beillesztettem ezért lehet rossz):
```json
{
  "variants": {
    "direction=down": {
      "model": "mod:block/dynamite_rack"
    },
    "direction=up": {
      "model": "mod:block/dynamite_rack",
      "y": 180
    },
    [...]
  }
}
```
A játék belölt és le is lehet rakni a blockot, de még nem vagyunk kész:
![Nem tudom mi történhetett a világgal](/10.png)
![Debug stickel állítható a property](/11.png)
Elfelejtettem létrehozni egy modelt az itemnek, a block körvonala sem jó és nincs átlátszónak jelölve(azért lyukas a kó alatta, mert azt hiszi a játék hogy a blockunk teljes block és letakarja).
Az átlátszóságot meg lehet oldani azzal hogy a block settingshez rakunk egy ilyet: `nonOpaque()`
![Ez is megoldva](/12.png)
Ha megpróbáljuk lerakni, mindig a block alján lesz, mert a játéknak nem mondtuk meg hogy rakja le. Ehhez felül kell írjuk a `getPlacementState` methodot így:
```java
@Nullable
@Override
public BlockState getPlacementState(ItemPlacementContext ctx) {
    return super.getPlacementState(ctx).with(DIRECTION, ctx.getSide().getOpposite());
}
```
Ez a kód lekéri azt hogy a block melyik doldalára jobklikkeltél és az ellentétét állítja be(így jön ki jól).

## Ha ezt olvasod akkor ez még nincs kész, de holnap(szerda) majd befejezem.
