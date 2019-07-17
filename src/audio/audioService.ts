class AudioService {
    constructor() {
        this._allSounds.push(new SoundItem(SoundType.Piu, 'assets/audio/piu.ogg'))
        this._allSounds.push(new SoundItem(SoundType.Dh, 'assets/audio/dh.ogg'))
    }

    private _allSounds: Array<SoundItem> = [];

    public play(type: SoundType) {
        let foundSoundItem = this._allSounds.find(x => x.type == type);
        if (foundSoundItem == null)
            throw new Error(`Sound of type: '${type}' is not found in the sounds.`);

        let theAudio = new Audio(foundSoundItem.fileUrl);
        theAudio.play();
    }
}