class GameStateService {
    constructor() {
        this.stateUpdators.push(new itemSquareUpdator());
        this.stateUpdators.push(new ItemImageUpdator());
    }

    private stateUpdators: Array<IStateUpdator> = [];

    updateState(stateToUpdate: GameState, inputState: InputState): void {
        stateToUpdate.bullets.forEach(component => this.updateItemState(component, inputState));
        stateToUpdate.field.backgroundItems.forEach(component => this.updateItemState(component, inputState));

        this.updateItemState(stateToUpdate.playerUnit, inputState, true);

        // __________________________Bullets
        // Retire far ones.
        stateToUpdate.bullets = stateToUpdate.bullets.filter(x => {
            let blt = (x as ItemImage);
            var result = -1000 < blt.x
                && blt.x < 1000
                && -1000 < blt.y
                && blt.y < 1000;
            return result;
        });

        // Fire new one
        if (inputState.pressedButtons.indexOf(InputButton.Fire) >= 0) {
            this.fireBullet(stateToUpdate);
        }
        // __________________________Bullets

        // __________________________Overlay
        stateToUpdate.overlayText = [];
        let activatedButtons = '';
        inputState.pressedButtons.forEach((value) => activatedButtons += (" " + value.toString()));
        stateToUpdate.overlayText.push(new ItemText(10, 20, "Arial", "12px", "Black", [`Buttons: ${activatedButtons.trim()}`]));
        stateToUpdate.overlayText.push(new ItemText(10, 35, "Arial", "12px", "Black", [`Mouse Position: x: ${inputState.cursorPosition.x}, y: ${inputState.cursorPosition.y}`]));
        stateToUpdate.overlayText.push(new ItemText(10, 50, "Arial", "12px", "Black", [`Bullets: ${stateToUpdate.bullets.length}`]));
        // _________________________Overlay
    }

    updateItemState(component: ItemBase, inputState: InputState, controlledByInput: boolean = false): void {
        if (component == null)
            return;

        var componentType = component.itemType;
        var componentUpdator = this.stateUpdators.find(x => x.itemType == componentType);
        if (componentUpdator == null)
            throw new Error(`Can't find state updator for item type: '${componentType}'.`);

        componentUpdator.update(component, inputState, controlledByInput);
    }

    fireBullet(state: GameState): void {
        let playerUnit = state.playerUnit as ItemImage;
        let dateDiff = new Date().getTime() - playerUnit.lastBulletFired.getTime();

        if (dateDiff < 300)
            return;

        playerUnit.lastBulletFired = new Date();

        let newBullet = new ItemImage(playerUnit.x, playerUnit.y, './assets/bullet.png', 15, 6);
        newBullet.bodyAngle = Object.assign(new Angle(), playerUnit.bodyAngle);
        newBullet.speedX = 5 * Math.cos(newBullet.bodyAngle.valueRads);
        newBullet.speedY = 5 * Math.sin(newBullet.bodyAngle.valueRads);

        state.bullets.push(newBullet);
    }
}