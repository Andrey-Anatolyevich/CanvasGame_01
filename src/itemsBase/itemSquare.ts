/// <reference path="../itemsBase/itemBase.ts"/>

class ItemSquare extends ItemBase{
    constructor(width: number, height: number, color: string, x: number, y: number) {
        super(ItemType.Square, x, y, width, height);

        this.color = color;
    }

    public color: string;

    public speedX: number = 0;
    public speedY: number = 0;
}