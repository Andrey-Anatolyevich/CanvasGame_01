class ItemSquareRenderer implements IRenderer {
    public itemType: Array<ItemType> = [ItemType.Square];

    render(canvasRenderingContext: CanvasRenderingContext2D, theItem: ItemBase): void {
        var castItem = theItem as ItemSquare;

        canvasRenderingContext.fillStyle = castItem.color;
        canvasRenderingContext.fillRect(castItem.position.x, castItem.position.y, castItem.width, castItem.height);
    }
}