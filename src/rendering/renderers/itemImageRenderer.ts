class ItemImageRenderer implements IRenderer {
    itemType: itemType = itemType.Image;
    render(canvasRenderingContext: CanvasRenderingContext2D, theItem: ItemBase): void {
        var theImage = theItem as ItemImage;

        let imageStore = ImageStore.GetInstance();
        let domImage = imageStore.getImageForPath(theImage.imgPath);

        var halfDomImageWidth = domImage.width / 2;
        var halfDomImageHeight = domImage.height / 2;

        var scaleX = theImage.width / domImage.width;
        var scaleY = theImage.height / domImage.height;

        canvasRenderingContext.save();
        canvasRenderingContext.translate(theImage.x, theImage.y);
        canvasRenderingContext.rotate(theImage.bodyAngle.valueRads);
        canvasRenderingContext.scale(scaleX, scaleY);
        canvasRenderingContext.drawImage(domImage, -halfDomImageWidth, -halfDomImageHeight, domImage.width, domImage.height);
        canvasRenderingContext.restore();

        // canvasRenderingContext.fillStyle = "Purple";
        // canvasRenderingContext.fillRect(theImage.x-1, theImage.y-1, 2, 2);
    }
}