class GameState{
    public field: GameField = new GameField();
    public playerUnit: ItemBase = null as unknown as ItemBase;
    public overlayText: Array<ItemBase> = [];
    public cameraSize: Size = Size.None();
    public bullets: Array<ItemBase> = [];
}