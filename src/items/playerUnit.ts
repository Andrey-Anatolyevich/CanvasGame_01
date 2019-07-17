class PlayerUnit extends ItemImage {
    constructor(x: number, y: number, angle: Angle) {
        super(x, y, "./assets/img/t_default.png", 63, 28, angle, ItemType.PlayerUnit);


    }

    public imgPathDefault: string = "./assets/img/t_default.png";
    public imgPathAttack: string = "./assets/img/t_attack.png";

    public lastBulletFired: Date = new Date();
    public fireAnimationLength: number = 250;
}