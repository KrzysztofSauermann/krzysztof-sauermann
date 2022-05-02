export class GalleryElement {
    public description: string = "";
    public images: string[] = [];
    constructor(description: string, images: string[]) {
        this.description = description;
        this.images = images;
    }
}