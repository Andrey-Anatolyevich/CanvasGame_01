/// <reference path="../itemsBase/itemImage.ts"/>

class SpawnerSimple extends ItemImage {
    constructor(x: number, y: number, angle: Angle) {
        super(x, y, './assets/img/flower.png', 30, 30, angle, ItemType.SpawnerSimple);
    }

    public spawnDelayMs: number = 3000;
    public lastSpawnDate: Date = new Date();
    public monstersSpawned: number = 0;
    public monstersMaxAlive: number = 15;
}