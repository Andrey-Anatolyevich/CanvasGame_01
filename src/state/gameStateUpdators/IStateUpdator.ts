interface IStateUpdator {
    itemType: itemType;
    update(theItem: ItemBase, inputState: InputState, controlledByInput: boolean): void;
}