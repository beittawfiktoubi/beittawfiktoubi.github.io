import { imagesPaths, vidPaths } from "../constants/strings";

export class Loader {
    private countImagesLoaded: number = 0;
    private countVidLoaded: number = 0;


    public get isDone(): boolean {
        return (this.countImagesLoaded === imagesPaths.length &&
            this.countVidLoaded === vidPaths.length)
    }

    public async loadDependencies() {
        this.loadImages()
        this.loadVids()
    }

    private async loadVids() {
        for (const p of vidPaths) {
            let e = document.createElement('video');
            e.onloadeddata = this.handleVidLoaded.bind(this);
            e.src = p;
        }
    }

    private async loadImages() {
        for (const p of imagesPaths) {
            let e = new Image();
            e.onload = this.handleImageLoaded.bind(this);
            e.src = p;
        }
    }

    private handleImageLoaded() {
        this.countImagesLoaded++;
    }

    private handleVidLoaded() {
        this.countVidLoaded++;
    }
}