class itemSquareUpdator implements IStateUpdator {
    itemType: ItemType = ItemType.Square;

    update(gameState: GameState, inputState: InputState, square: ItemSquare, controlledByInput: boolean): void {
        if (controlledByInput) {
            this.stopSquare(square);
            this.calcSpeed(square, inputState);
        }
        this.calcNewPosition(square);
    }

    stopSquare(square: ItemSquare) {
        square.speedX = 0;
        square.speedY = 0;
    }

    calcSpeed(square: ItemSquare, inputState: InputState) {
        if (inputState.buttonIsPressed(InputButton.Up))
            square.speedY -= 1;
        if (inputState.buttonIsPressed(InputButton.Down))
            square.speedY += 1;
        if (inputState.buttonIsPressed(InputButton.Right))
            square.speedX += 1;
        if (inputState.buttonIsPressed(InputButton.Left))
            square.speedX -= 1;
    }

    calcNewPosition(square: ItemSquare) {
        square.position.x += square.speedX;
        square.position.y += square.speedY;
    }
}