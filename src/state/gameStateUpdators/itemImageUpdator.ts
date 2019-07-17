class ItemImageUpdator implements IStateUpdator {
    constructor(geometryCalc: GeometryCalc) {
        this.geometryCalc = geometryCalc;
    }

    public itemType: ItemType = ItemType.Image;
    private geometryCalc: GeometryCalc;

    update(gameState: GameState, inputState: InputState, theItem: ItemImage, controlledByInput: boolean): void {
        if (controlledByInput) {
            this.stopMovement(theItem);
            this.calculateSpeed(inputState, theItem);
        }
        this.calcNewPosition(theItem);
        if (controlledByInput) {
            theItem.bodyAngle = this.geometryCalc.calcAngle(new Position(theItem.position.x, theItem.position.y), inputState.cursorPosition);
        }
    }

    stopMovement(theItem: ItemImage) {
        theItem.speedX = 0;
        theItem.speedY = 0;
    }

    calculateSpeed(inputState: InputState, theItem: ItemImage) {
        if (inputState.buttonIsPressed(InputButton.Up))
            theItem.speedY -= 1;
        if (inputState.buttonIsPressed(InputButton.Down))
            theItem.speedY += 1;
        if (inputState.buttonIsPressed(InputButton.Right))
            theItem.speedX += 1;
        if (inputState.buttonIsPressed(InputButton.Left))
            theItem.speedX -= 1;
    }

    calcNewPosition(theItem: ItemImage) {
        theItem.position.x += theItem.speedX;
        theItem.position.y += theItem.speedY;
    }
}