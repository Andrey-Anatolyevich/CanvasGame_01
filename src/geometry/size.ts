class Size {
    constructor(width: number, height: number) {
        if (width == undefined || height == undefined) {
            this.width = 0;
            this.height = 0;
            return;
        }

        this.width = width;
        this.height = height;
    }

    public width: number;
    public height: number;

    public static None(): Size {
        return new Size(0, 0);
    }
}