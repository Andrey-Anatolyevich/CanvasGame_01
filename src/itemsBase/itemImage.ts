/// <reference path="../itemsBase/itemBase.ts"/>

class ItemImage extends ItemBase {
    constructor(x: number, y: number, imgPath: string, width: number, height: number, angle: Angle, itemType: ItemType = ItemType.PlayerUnit) {
        super(itemType, x, y, width, height);

        this.imgPath = imgPath;
        this.bodyAngle = angle;
    }

    public imgPath: string;

    public bodyAngle: Angle = Angle.default();
}