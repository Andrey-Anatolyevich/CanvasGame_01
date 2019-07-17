class PlayerUnitUpdator implements IStateUpdator {
    constructor(audioService: AudioService, geometryCalc: GeometryCalc) {
        this.audioService = audioService;
        this.geometryCalc = geometryCalc;
    }

    public itemType: ItemType = ItemType.PlayerUnit;
    private audioService: AudioService;
    private geometryCalc: GeometryCalc;

    update(gameState: GameState, inputState: InputState, theItem: PlayerUnit, controlledByInput: boolean): void {
        if (controlledByInput) {
            this.stopMovement(theItem);
            this.calculateSpeed(inputState, theItem);

            theItem.bodyAngle = this.geometryCalc.calcAngle(new Position(theItem.position.x, theItem.position.y), inputState.cursorPosition);
        }

        // Fire new bullet
        if (inputState.pressedButtons.indexOf(InputButton.Fire) >= 0) {
            this.fireBullet(gameState);
        }

        // Attack animation
        let isAttacking = theItem.lastBulletFired.getTime() + theItem.fireAnimationLength >= new Date().getTime();
        theItem.imgPath = isAttacking ? theItem.imgPathAttack : theItem.imgPathDefault;

        this.calcNewPosition(theItem);

        // Make sure not eaten
        gameState.monsters.forEach(m => {
            if (this.geometryCalc.doCollide(m, theItem))
                gameState.playerIsDead = true;
        });
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

    fireBullet(state: GameState): void {
        let playerUnit = state.playerUnit as PlayerUnit;
        let dateDiff = new Date().getTime() - playerUnit.lastBulletFired.getTime();

        if (dateDiff < 300)
            return;

        playerUnit.lastBulletFired = new Date();

        let bulletAngle = playerUnit.bodyAngle.clone();
        let newBullet = new BulletSimple(playerUnit.position.x, playerUnit.position.y, bulletAngle);

        state.bullets.push(newBullet);
        this.audioService.play(SoundType.Piu);
    }
}