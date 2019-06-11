class InputMapper {
    constructor(){
        this._map = [
            new InputMapItem(InputButton.Left, [37]),
            new InputMapItem(InputButton.Up, [38]),
            new InputMapItem(InputButton.Right, [39]),
            new InputMapItem(InputButton.Down, [40]),
            new InputMapItem(InputButton.Space, [32]),
        ];
    }
    
    private _map: Array<InputMapItem>

    public getMappedButton(keyCode: number): InputButton{
        let firstFoundMapItem = this._map
            .find((mapItem) => mapItem.keyCodes.indexOf(keyCode) >=0);

        if(firstFoundMapItem == null)
            return InputButton.Unknown;

        return firstFoundMapItem.button;
    }
}