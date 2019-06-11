class Position {
    constructor(x: number, y: number) {
        if (x == undefined || y == undefined) {
            this.x = 0;
            this.y = 0;
            return;
        }

        this.x = x;
        this.y = y;
    }

    public x: number;
    public y: number;

    public static Default(): Position {
        return new Position(0, 0);
    }
}