import { imagesPaths, vidPaths } from "../constants/strings";

export class Loader {
    private countImagesLoaded: number = 0;
    // private countVidLoaded: number = 0;
    // private video?: HTMLVideoElement;


    public get isDone(): boolean {

        // let isVidLoaded = true
        // if (this.video) {
        //     isVidLoaded = this.video.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA
        // }


        return (this.countImagesLoaded === imagesPaths.length)
        // (isVidLoaded || this.countVidLoaded === vidPaths.length))
    }

    public async loadDependencies() {
        this.loadImages()
        // this.loadVids()
    }

    // private async loadVids() {
    //     for (const p of vidPaths) {
    //         this.video = document.createElement('video');
    //         const sourceElement = document.createElement('source');

    //         sourceElement.src = p;
    //         sourceElement.type = "video/mp4";
    //         this.video.onloadeddata = this.handleVidLoaded.bind(this);

    //         this.video.appendChild(sourceElement);
    //         this.video.load();

    //         // this.video.src = p;
    //     }
    // }

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

    // private handleVidLoaded() {
    //     this.countVidLoaded++;
    // }
}