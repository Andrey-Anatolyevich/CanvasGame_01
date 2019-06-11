class InputState {
    public cursorPosition: Position = Position.Default();
    public pressedButtons: Array<InputButton> = [];

    buttonPress(theButton: InputButton) {
        if (theButton == InputButton.Unknown)
            return;

        if (this.pressedButtons.indexOf(theButton) < 0)
            this.pressedButtons.push(theButton);
    };

    buttonUnpress(theButton: InputButton) {
        this.pressedButtons = this.pressedButtons.filter((value) => value != theButton);
    };

    buttonIsPressed(theButton: InputButton): boolean {
        let result = this.pressedButtons.indexOf(theButton) >= 0;
        return result;
    }

    setCursorPosition(newCursorPosition: Position) {
        if (newCursorPosition == null)
            return;
        this.cursorPosition = newCursorPosition;
    }
}