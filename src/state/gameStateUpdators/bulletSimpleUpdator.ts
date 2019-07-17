class BulletSimpleUpdator implements IStateUpdator {
    constructor(audioService: AudioService, geometryCalc: GeometryCalc) {
        this.audioService = audioService;
        this.geometryCalc = geometryCalc;
    }

    public itemType: ItemType = ItemType.BulletSimple;
    private audioService: AudioService;
    private geometryCalc: GeometryCalc;

    update(gameState: GameState, inputState: InputState, theItem: BulletSimple, controlledByInput: boolean): void {
        if (!theItem.speedCalced) {
            this.calcSpeed(gameState, theItem);
        }

        this.setNewPosition(theItem);

        this.checkCollisions(gameState, theItem);
    }

    calcSpeed(gameState: GameState, theItem: BulletSimple) {
        theItem.distancePerFrame = theItem.speedPerSec / gameState.fpsIam;
        theItem.speedX = theItem.distancePerFrame * Math.cos(theItem.bodyAngle.valueRads);
        theItem.speedY = theItem.distancePerFrame * Math.sin(theItem.bodyAngle.valueRads);
        theItem.speedCalced = true;
    }

    setNewPosition(theItem: BulletSimple) {
        theItem.position.x += theItem.speedX;
        theItem.position.y += theItem.speedY;

        theItem.distanceTraveled += theItem.distancePerFrame;
    }

    checkCollisions(gameState: GameState, theItem: BulletSimple) {
        let monstersHit: Array<ItemBase> = [];

        gameState.monsters.forEach(monster => {
            let doCollide = this.geometryCalc.doCollide(monster, theItem);
            if (doCollide) {
                this.audioService.play(SoundType.Dh);

                gameState.bullets = gameState.bullets.filter(x => x != theItem);

                monstersHit.push(monster);
            }
        });

        gameState.monsters = gameState.monsters.filter(x => monstersHit.indexOf(x) < 0);
        gameState.monstersKilled += monstersHit.length;
    }
}