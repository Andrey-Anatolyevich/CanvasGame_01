/// <reference path="../itemsCommon/itemBase.ts"/>

class ItemSquare extends ItemBase{
    constructor(width: number, height: number, color: string, x: number, y: number) {
        super(itemType.Square);

        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.color = color;
    }

    public width: number;
    public height: number;
    public x: number;
    public y: number;
    public color: string;

    public speedX: number = 0;
    public speedY: number = 0;
}