import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

class imageList {
    constructor(
        public src: string,
        public alt: string
    ) { }
}

@Component({
    selector: 'app-gallery',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './gallery.component.html',
    styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
    public readonly images: imageList[] = [
        {
            src: "/assets/images/gallery/1.jpg",
            alt: "description",
        },
        {
            src: "/assets/images/gallery/2.jpg",
            alt: "description",
        },
        {
            src: "/assets/images/gallery/3.jpg",
            alt: "description",
        },
        // {
        //     src: "/assets/images/gallery/4.jpg",
        //     alt: "description",
        // },
        // {
        //     src: "/assets/images/gallery/5.jpg",
        //     alt: "description",
        // },
        // {
        //     src: "/assets/images/gallery/6.jpg",
        //     alt: "description",
        // },
        // {
        //     src: "/assets/images/gallery/7.jpg",
        //     alt: "description",
        // },
        // {
        //     src: "/assets/images/gallery/8.jpg",
        //     alt: "description",
        // },
    ];

    private _currentImage: number = 2;
    private _images: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName("img-container") as HTMLCollectionOf<HTMLElement>;

    ngAfterViewInit() {
        this._images = document.getElementsByClassName("img-container") as HTMLCollectionOf<HTMLElement>;
        this._resetArrayValues(this._images);
    }


    sendRight() {
        this._images[this._currentImage].style.transform = "translateX(200%)";
        this._currentImage--;
        this._images[this._currentImage].style.transform = "translateX(0)";
    }

    private _resetArrayValues(imgs: HTMLCollectionOf<HTMLElement>) {
        for (let i = 0; i < imgs.length; i++) {
            imgs[i].style.transform = "translateX(-200%)";
        }
        imgs[2].style.transform = "translateX(0)";
    }
}
