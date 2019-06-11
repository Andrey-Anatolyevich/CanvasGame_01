class RenderingService {
    constructor() {
        this.renderers.push(new ItemSquareRenderer());
        this.renderers.push(new ItemTextRenderer());
        this.renderers.push(new ItemImageRenderer());
    }

    squareRenderer: ItemSquareRenderer = new ItemSquareRenderer();
    renderers: Array<IRenderer> = [];

    renderState(canvasContext: CanvasRenderingContext2D, gameState: GameState) {
        canvasContext.clearRect(0, 0, gameState.cameraSize.width, gameState.cameraSize.height);

        gameState.field.backgroundItems.forEach(theItem => this.renderComponent(canvasContext, theItem));

        gameState.bullets.forEach(theItem => this.renderComponent(canvasContext, theItem));

        this.renderComponent(canvasContext, gameState.playerUnit);

        gameState.overlayText.forEach(theItem => this.renderComponent(canvasContext, theItem));
    }

    renderComponent(canvasContext: CanvasRenderingContext2D, theItem: ItemBase) {
        let theItemType = theItem.itemType;

        let foundRenderer = this.renderers.find(x => x.itemType == theItemType);
        if (foundRenderer == null)
            throw new Error(`Couldn't find renderer for type: '${theItemType}'.`);

        foundRenderer.render(canvasContext, theItem);
    }
}