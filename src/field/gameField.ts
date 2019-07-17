class GameField {
    public size: Size = Size.None();
    
    public gridEnabled: boolean = false;
    public gridStep: number = 0;

    public backgroundItems: Array<ItemBase> = [];
    public interactibleItems: Array<ItemBase> = [];
}