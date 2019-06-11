class ItemTextRenderer implements IRenderer {
    itemType: itemType = itemType.Text;
    render(canvasRenderingContext: CanvasRenderingContext2D, theItem: ItemBase): void {
        var castItem = theItem as ItemText;

        canvasRenderingContext.fillStyle = castItem.color;
        canvasRenderingContext.font = `${castItem.fontSize} ${castItem.fontName}`;
        canvasRenderingContext.fillText(castItem.textLines[0], castItem.x, castItem.y);
    }
}