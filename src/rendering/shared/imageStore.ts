class ImageStore {
    static theInstance: ImageStore;

    private loadedImages: Array<PathToImage> = [];

    static GetInstance(): ImageStore {
        if (this.theInstance == null)
            this.theInstance = new ImageStore();

        return this.theInstance;
    }

    public getImageForPath(path: string): HTMLImageElement{
        let filteredArray = this.loadedImages.filter(x => x.path == path);
        if (filteredArray != null && filteredArray.length > 0)
            return filteredArray[0].loadedImage;
        else {
            let result = new Image();
            result.src = path;
            this.loadedImages.push(new PathToImage(path, result));
            return result;
        }
    }
}

class PathToImage {
    constructor(path: string, anImage: HTMLImageElement) {
        this.path = path;
        this.loadedImage = anImage;
    }

    public path: string;
    public loadedImage: HTMLImageElement;
}