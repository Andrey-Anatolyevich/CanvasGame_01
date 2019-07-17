class ItemTextRenderer implements IRenderer {
    public itemType: Array<ItemType> = [ItemType.Text];

    public render(canvasRenderingContext: CanvasRenderingContext2D, theItem: ItemBase): void {
        var castItem = theItem as ItemText;

        canvasRenderingContext.fillStyle = castItem.color;
        canvasRenderingContext.font = `${castItem.fontSize} ${castItem.fontName}`;
        canvasRenderingContext.fillText(castItem.textLines[0], castItem.x, castItem.y);
    }
}