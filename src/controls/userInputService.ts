class UserInputService {
    public inputState: InputState = new InputState();
    private inputMapper: InputMapper = new InputMapper();

    cursorSet(e: MouseEvent) {
        let newCursorPosition = new Position(e.offsetX, e.offsetY);
        this.inputState.setCursorPosition(newCursorPosition);
    };

    click(e: MouseEvent) {
        this.inputState.buttonPress(InputButton.Fire);
        e.preventDefault();
    };

    unclick(e: MouseEvent) {
        this.inputState.buttonUnpress(InputButton.Fire);
        e.preventDefault();
    };

    keyDown(e: KeyboardEvent) {
        let mappedButton = this.inputMapper.getMappedButton(e.keyCode);
        if (mappedButton != InputButton.Unknown)
            this.inputState.buttonPress(mappedButton);
        else
            console.log(`Pressed button code: '${e.keyCode}'`);
    }

    keyUp(e: KeyboardEvent) {
        let mappedButton = this.inputMapper.getMappedButton(e.keyCode);
        if (mappedButton != InputButton.Unknown)
            this.inputState.buttonUnpress(mappedButton);
    }

    getInputState(): InputState {
        return this.inputState;
    }
}