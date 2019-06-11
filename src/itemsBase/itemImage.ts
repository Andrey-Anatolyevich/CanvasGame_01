/// <reference path="../itemsCommon/itemBase.ts"/>

class ItemImage extends ItemBase {
    constructor(x: number, y: number, imgPath: string, width: number, height: number) {
        super(itemType.Image);

        this.x = x;
        this.y = y;
        this.imgPath = imgPath;
        this.width = width;
        this.height = height;
    }

    public x: number;
    public y: number;
    public imgPath: string;
    public width: number;
    public height: number;

    public speedX: number = 0;
    public speedY: number = 0;

    public bodyAngle: Angle = Angle.default();

    public lastBulletFired: Date = new Date();
}