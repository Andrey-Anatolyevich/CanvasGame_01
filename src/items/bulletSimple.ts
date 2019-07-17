/// <reference path="../itemsBase/itemImage.ts"/>

class BulletSimple extends ItemImage {
    constructor(x: number, y: number, angle: Angle) {
        super(x, y, './assets/img/bullet.png', 15, 6, angle, ItemType.BulletSimple);
    }

    public speedPerSec: number = 400;
    public speedCalced: boolean = false;

    public distanceMax: number = 300;
    public distancePerFrame: number = 0;
    public distanceTraveled: number = 0;
}