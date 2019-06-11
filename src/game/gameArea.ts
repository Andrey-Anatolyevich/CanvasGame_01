// import { request } from "https";

class GameArea {
    constructor(getInputStateFunc: () => InputState
        , mouseMoveHandler: (evt: MouseEvent) => void
        , clickHandler: (evt: MouseEvent) => void
        , unclickHandler: (evt: MouseEvent) => void) {
        this.getInputState = getInputStateFunc;
        this.gameState.playerUnit = new ItemImage(this.viewPortWidth / 2, this.viewPortHeight / 2, "./assets/fly.jpg", 30, 30);
        this.gameState.field.gridEnabled = true;
        this.gameState.field.gridStep = 100;
        this.gameState.field.size = new Size(300, 300);
        this.gameState.field.backgroundItems.push(new ItemImage(180, 200, "./assets/flower.png", 30, 30));

        this.canvas.addEventListener('mousemove', mouseMoveHandler);
        this.canvas.addEventListener('mousedown', clickHandler);
        this.canvas.addEventListener('mouseup', unclickHandler);
    }

    private viewPortWidth: number = 480;
    private viewPortHeight: number = 280;
    public canvas: HTMLCanvasElement = document.createElement("canvas");
    public canvasContext: CanvasRenderingContext2D = null as unknown as CanvasRenderingContext2D;

    public gameState: GameState = new GameState();
    public stateService: GameStateService = new GameStateService();
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
        this.updateGameAreaInterval = setInterval(this.gameAreaUpdate.bind(this), 8) as unknown as number;
    };

    public gameAreaUpdate() {
        let inputState = this.getInputState();

        this.stateService.updateState(this.gameState, inputState);
        this.gameState.cameraSize.width = this.canvas.width;
        this.gameState.cameraSize.height = this.canvas.height;
        this.renderingService.renderState(this.canvasContext, this.gameState);
    };
}