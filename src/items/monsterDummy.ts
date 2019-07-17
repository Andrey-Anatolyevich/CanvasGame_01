/// <reference path="../itemsBase/itemImage.ts"/>

class MonsterDummy extends ItemImage {
    constructor(x: number, y: number, angle: Angle) {
        super(x, y, './assets/img/l_default.png', 25, 25, angle, ItemType.MonsterDummy);
        this.lastAimAngle = angle;
    }

    public speedPerSec: number = 35;
    public reaimEveryMs: number = 820;
    public speedMax: number = 100

    public lastAim: Date = new Date();
    public lastAimAngle: Angle;

    public spawnedDate: Date = new Date();
    public lastSpeedup: Date = new Date();
}