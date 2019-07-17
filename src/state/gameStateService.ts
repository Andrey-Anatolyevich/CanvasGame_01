class GameStateService {
    constructor(audioService: AudioService, geometryCalc: GeometryCalc) {
        this.stateUpdators.push(new itemSquareUpdator());
        this.stateUpdators.push(new ItemImageUpdator(geometryCalc));
        this.stateUpdators.push(new PlayerUnitUpdator(audioService, geometryCalc));
        this.stateUpdators.push(new MonsterDummyUpdator(audioService, geometryCalc));
        this.stateUpdators.push(new BulletSimpleUpdator(audioService, geometryCalc));
        this.stateUpdators.push(new SpawnerSimpleUpdator());

        this.cleaners.push(new BulletsCleaner());
    }

    private stateUpdators: Array<IStateUpdator> = [];
    private cleaners: Array<ICleaner> = [];

    updateState(gameState: GameState, inputState: InputState): void {
        gameState.bullets.forEach(component => this.updateItemState(gameState, inputState, component));
        gameState.field.backgroundItems.forEach(component => this.updateItemState(gameState, inputState, component));
        gameState.field.interactibleItems.forEach(component => this.updateItemState(gameState, inputState, component));

        this.updateItemState(gameState, inputState, gameState.playerUnit, true);

        gameState.monsters.forEach(monster => this.updateItemState(gameState, inputState, monster, false));

        this.cleaners.forEach(cleaner => cleaner.clean(gameState));

        this.updateOverlayText(gameState, inputState);
    }

    updateItemState(gameState: GameState, inputState: InputState, component: ItemBase, controlledByInput: boolean = false): void {
        if (component == null)
            return;

        var componentType = component.itemType;
        var componentUpdator = this.stateUpdators.find(x => x.itemType == componentType);
        if (componentUpdator == null)
            throw new Error(`Can't find state updator for item type: '${componentType}'.`);

        componentUpdator.update(gameState, inputState, component, controlledByInput);
    }

    updateOverlayText(gameState: GameState, inputState: InputState): void {
        gameState.overlayText = [];
        let activatedButtons = '';
        inputState.pressedButtons.forEach((value) => activatedButtons += (" " + value.toString()));

        gameState.overlayText.push(new ItemText(10, 20, "Arial", "12px", "Grey", [`Monsters killed: ${gameState.monstersKilled}`]));

        if (gameState.playerIsDead) {
            gameState.overlayText.push(new ItemText(100, 100, "Arial", "30px", "Red", [`YOU ARE DEAD!`]));
        }
    }
}