---
title: "Egyszerű blockok és itemek"
date: 2022-12-04T13:03:00+01:00
draft: false
weight: 2
---

Ebben a leckében egyszerű blockokat és itemeket fogunk létrehozni.

## Itemek
 1. Mi most egy új fegyvert fogunk a játékhoz hozzáadni.
 2. Elsőként létrehozunk egy változót neki: 
 ```java
 public static final Item MY_ITEM = new Item(new FabricItemSettings().group(ItemGroup.COMBAT).rarity(Rarity.EPIC));
 ``` 
 Ebben beállítjuk melyik ItemGroupban(inventory tab) legyen és hogy mekkora legyen a rarityje(mert miért ne?).
 
 3. Viszont ez még nem elég ahhoz hogy megjelenjen az item a játékban, regisztrálnunk is kell.
 ```java
 @Override
 public void onInitialize() {
    Registry.register(Registry.ITEM, new Identifier("mod", "my_item"), MY_ITEM);
    [...]
 }
 ``` 
 Ezt az `onInitialize` methodban kell megtegyük mivel itt érhető ez a `Registry`(ez tartja számon mik vannak a játékban). 
 Meg kell adjuk melyik registrybe akarjuk belerakni az itemünket(nem mintha lehetne az Itemen kívül másikba). 
 Ezek után megadjuk az item id-ját(ennek példáúl `mod:my_item` lesz ezzel a kóddal). Végül pedig megadjuk az item objectünket.
 
 4. Ha így elindítjuk a játékot, már láthatjuk az itemet.
 ![Igen](/7.png)
 Viszont még nincs textúrája.
 5. Ahhoz hogy ezt orvosolhassuk, először létre kell hozni egy model-t ami megmondja hogy nézzen ki az item. Mi csak az alap model-t fogjuk használni mert az egyszerűbb.
 6. Létre kell hozzunk egy file-t ide: `src/main/resources/assets/{modid}/models/item` méghozzá ezzel a névvel: `{item_id}.json`, benne ezzel a json-el:
```json
 {
  "parent": "item/generated",
  "textures": {
    "layer0": "mod:item/my_item"
  }
}
```

7. Ezzel megvan a model, de egy nem létező textúrára hivatkozik. Rakjunk egy 16x16os png-t ide: `src/main/resources/assets/{modid}/textures/item`, ezzel a névvel: `my_item.png`

8. A játék újraindítását követően láthatjuk a csodálatos itemünket.
![Igen](/8.png)


## Blockok
1. A blockoknál már kicsit bonyolúltabb a helyzet, mivel itt már a block mellett még egy itemet is hozzá kell adjunk hogy kézbe vehessük a blockunkat.
2. Hozzuk létre a szükséges változókat:
```java
public static final Block MY_BLOCK = new Block(AbstractBlock.Settings.copy(Blocks.IRON_BLOCK));
public static final Item MY_BLOCK_ITEM = new BlockItem(MY_BLOCK, new FabricItemSettings().group(ItemGroup.REDSTONE));
```

Először létrehozzuk a blockunkat, ami lemásolja az Iron Block tulajdonságait, majd létrehozzuk az itemet, ami egy BlockItem.

3. Majd pedig regisztráljuk őket:
```java
@Override
public void onInitialize() {
	[...]
	Registry.register(Registry.BLOCK, new Identifier("mod", "my_block"), MY_BLOCK);
	Registry.register(Registry.ITEM, new Identifier("mod", "my_block"), MY_BLOCK_ITEM);
	[...]	
}
```

Fontos hogy a blocknak és a blockitemnek ugyan az az id-je, hogy ne zavarjuk össze a felhasználót.

4. Minden blocknak lehetnek block statejei, példáúl a `waterlogged`. A blockok modelje ezektől a tulajdonságoktúl függ, ezért létre kell hozzunk egy file-t ami megmondja hogy mikor hogy nézzen ki.
Ezt a file-t az `src/main/resources/assets/{modid}/blockstates` mappába rakjuk. A neve megeggyezik a block id-jával.
```json
{
    "variants": {
        "": { "model": "mod:block/my_block_model" }
    }
}
```

Mivel a blockunknak nincsenek block statejei, így csak egyféleképpen nézhet ki.

5. Ezek után jön a model az `src/main/resources/assets/{modid}/models/block mappába:
```
{
	"parent": "block/cube_all",
	"textures": {
		"all": "mod:block/my_block"
	}
}
```

Fontos hogy a neve eggyezzen a blockstate fileban megadottal. Ez a model minden oldalára ugyan azt a textúrát rakja, [de van lehetőség másra is](https://minecraft.fandom.com/wiki/Tutorials/Creating_a_resource_pack#Modeling_blocks_and_items).

6. Ezek után berakjuk a textúrát az `src/main/resources/assets/{modid}/textures/block` mappába.
7. Utolsó lépésként létre kell hozzuk a block item model-t:
```json
{
	"parent": "mod:block/my_block_model"
}
```

Ez megmondja a játéknak hogy használja ugyan azt a model-t mint a blockra.

8. A játék elindítása után már láthatjuk is a blockunkat.
![Igen](/9.png)


Későbbi leckékben majd lesz szó arról hogy tudjanak is valamit a hozzáadott dolgok.


