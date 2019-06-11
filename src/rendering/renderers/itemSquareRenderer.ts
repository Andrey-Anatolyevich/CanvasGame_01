class ItemSquareRenderer implements IRenderer {
    itemType: itemType = itemType.Square;
    render(canvasRenderingContext: CanvasRenderingContext2D, theItem: ItemBase): void {
        var castItem = theItem as ItemSquare;

        canvasRenderingContext.fillStyle = castItem.color;
        canvasRenderingContext.fillRect(castItem.x, castItem.y, castItem.width, castItem.height);
    }
}