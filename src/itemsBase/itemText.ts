class ItemText extends ItemBase {
    constructor(x: number, y: number, fontName: string, fontSize: string, color: string, textLines: Array<string>) {
        super(ItemType.Text, x, y, 0, 0);

        this.x = x;
        this.y = y;
        this.fontName = fontName;
        this.fontSize = fontSize;
        this.color = color;
        this.textLines = textLines;
    }

    public x: number;
    public y: number;
    public fontName: string;
    public fontSize: string;
    public color: string;
    public textLines: Array<string>;
}