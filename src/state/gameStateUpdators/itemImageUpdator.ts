class ItemImageUpdator implements IStateUpdator {
    itemType: itemType = itemType.Image;

    update(theItem: ItemImage, inputState: InputState, controlledByInput: boolean): void {
        if (controlledByInput) {
            this.stopMovement(theItem);
            this.calculateSpeed(inputState, theItem);
        }
        this.calcNewPosition(theItem);
        if (controlledByInput) {
            theItem.bodyAngle = GeometryCalc.calcAngle(new Position(theItem.x, theItem.y), inputState.cursorPosition);
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
        theItem.x += theItem.speedX;
        theItem.y += theItem.speedY;
    }
}