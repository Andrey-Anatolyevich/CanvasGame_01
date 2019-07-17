interface IRenderer {
    itemType: Array<ItemType>;
    render(canvasRenderingContext: CanvasRenderingContext2D, theItem: ItemBase): void;
}