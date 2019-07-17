class GameState {
    public fpsIam: number = 125;

    public field: GameField = new GameField();
    public playerUnit: PlayerUnit = null as unknown as PlayerUnit;
    public overlayText: Array<ItemBase> = [];
    public cameraSize: Size = Size.None();
    public bullets: Array<ItemBase> = [];
    public monsters: Array<ItemBase> = [];
    public playerIsDead: boolean = false;
    public monstersKilled: number = 0;
}