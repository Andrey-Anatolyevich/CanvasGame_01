class MonsterDummyUpdator implements IStateUpdator {
    constructor(audioService: AudioService, geometryCalc: GeometryCalc) {
        this.audioService = audioService;
        this.geometryCalc = geometryCalc;
    }

    public itemType: ItemType = ItemType.MonsterDummy;
    private geometryCalc: GeometryCalc;
    private audioService: AudioService;

    update(gameState: GameState, inputState: InputState, theItem: MonsterDummy, controlledByInput: boolean): void {
        let now = new Date();
        let nowTime = now.getTime();
        let lastAimDiff = nowTime - theItem.lastAim.getTime();

        if (lastAimDiff > theItem.reaimEveryMs) {
            theItem.lastAim = now;
            theItem.lastAimAngle = this.geometryCalc.calcAngle(theItem.position, gameState.playerUnit.position);
            theItem.bodyAngle = theItem.lastAimAngle;
        }

        // speedup the monster
        if (theItem.lastSpeedup.getTime() + 3000 < nowTime){
            theItem.lastSpeedup = now;
            theItem.speedPerSec += 5;
        }

        // get angle to player position:
        let thisFrameSpeed = theItem.speedPerSec / gameState.fpsIam;
        theItem.position = this.geometryCalc.getNewPosition(theItem.position, thisFrameSpeed, theItem.lastAimAngle);
    }
}