class ItemBase {
    constructor(itemType: ItemType, x: number, y: number, width: number, height: number) {
        this.itemType = itemType;
        this.position = new Position(x,y);
        this.width = width;
        this.height = height;
    }

    public itemType: ItemType;

    public position: Position;
    public width: number;
    public height: number;

    public speedX: number = 0;
    public speedY: number = 0;
}