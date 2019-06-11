class GameEngine {
    constructor() {
        this.inputService = new UserInputService();
        this.myGame = new GameArea(
            this.inputService.getInputState.bind(this.inputService)
            , this.inputService.cursorSet.bind(this.inputService)
            , this.inputService.click.bind(this.inputService)
            , this.inputService.unclick.bind(this.inputService));
    }

    private myGame: GameArea;
    private inputService: UserInputService;

    setupEnvironment() {
        window.addEventListener('keydown', this.inputService.keyDown.bind(this.inputService));
        window.addEventListener('keyup', this.inputService.keyUp.bind(this.inputService));
    }

    startGame() {
        this.myGame.start();
    }
}