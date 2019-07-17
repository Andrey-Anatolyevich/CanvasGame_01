interface IStateUpdator {
    itemType: ItemType;
    update(gameState: GameState, inputState: InputState, theItem: ItemBase, controlledByInput: boolean): void;
}