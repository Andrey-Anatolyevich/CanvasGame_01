class SoundItem {
    constructor(type: SoundType, url: string) {
        this.type = type;
        this.fileUrl = url;
    }

    public type: SoundType = SoundType.Unknown;
    public fileUrl: string = '';
}