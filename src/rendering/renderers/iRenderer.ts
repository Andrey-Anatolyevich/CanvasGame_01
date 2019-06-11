interface IRenderer {
    itemType: itemType;
    render(canvasRenderingContext: CanvasRenderingContext2D, theItem: ItemBase): void;
}