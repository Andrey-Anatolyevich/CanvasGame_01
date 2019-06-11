class InputMapItem {
    constructor(btn: InputButton, kCodes: Array<number>){
        this.button = btn;
        this.keyCodes = kCodes;
    }
    
    public button: InputButton;
    public keyCodes: Array<number>;
}