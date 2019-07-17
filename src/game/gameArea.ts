class GameArea {
    constructor(getInputStateFunc: () => InputState
        , mouseMoveHandler: (evt: MouseEvent) => void
        , clickHandler: (evt: MouseEvent) => void
        , unclickHandler: (evt: MouseEvent) => void) {
        this.getInputState = getInputStateFunc;
        this.gameState.playerUnit = new PlayerUnit(this.viewPortWidth / 2, this.viewPortHeight / 2, Angle.default());
        this.gameState.field.gridEnabled = true;
        this.gameState.field.gridStep = 100;
        this.gameState.field.size = new Size(300, 300);
        this.gameState.field.interactibleItems.push(new SpawnerSimple(180, 200, Angle.default()));

        this.gameState.monsters.push(new MonsterDummy(200, 200, Angle.default()));

        this.canvas.addEventListener('mousemove', mouseMoveHandler);
        this.canvas.addEventListener('mousedown', clickHandler);
        this.canvas.addEventListener('mouseup', unclickHandler);
    }

    private viewPortWidth: number = 600;
    private viewPortHeight: number = 600;
    public canvas: HTMLCanvasElement = document.createElement("canvas");
    public canvasContext: CanvasRenderingContext2D = null as unknown as CanvasRenderingContext2D;

    public gameState: GameState = new GameState();
    public audioService: AudioService = new AudioService();
    public geometryCalc: GeometryCalc = new GeometryCalc();
    public stateService: GameStateService = new GameStateService(this.audioService, this.geometryCalc);
    public renderingService: RenderingService = new RenderingService();
    public updateGameAreaInterval: number = 0;

    private getInputState: () => InputState;

    public start() {
        this.canvas.width = this.viewPortWidth;
        this.canvas.height = this.viewPortHeight;
        this.canvasContext = this.canvas.getContext("2d") as CanvasRenderingContext2D;
        // this.canvas.style.cursor = 'none';
        this.canvas.style.borderWidth = "1px";
        this.canvas.style.borderColor = "grey";
        this.canvas.style.borderStyle = "solid";

        document.body.insertBefore(this.canvas, document.body.childNodes[0]);

        let intervalMs = 1000 / this.gameState.fpsIam;
        this.updateGameAreaInterval = setInterval(this.gameAreaUpdate.bind(this), intervalMs) as unknown as number;
    };

    public gameAreaUpdate() {
        try {
            if (this.gameState.playerIsDead)
                clearInterval(this.updateGameAreaInterval);

            let inputState = this.getInputState();
            this.stateService.updateState(this.gameState, inputState);
            this.gameState.cameraSize.width = this.canvas.width;
            this.gameState.cameraSize.height = this.canvas.height;
            this.renderingService.renderState(this.canvasContext, this.gameState);
        } catch (e) {
            console.exception(e);
            clearInterval(this.updateGameAreaInterval);
        }
    };
}