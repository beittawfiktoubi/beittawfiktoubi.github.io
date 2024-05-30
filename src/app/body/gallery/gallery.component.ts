import { Component } from '@angular/core';

class imageList {
    constructor(
        public src: string,
        public alt: string
    ) { }
}

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
    public readonly imageList: imageList[] = [
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
        {
            src: "/assets/images/gallery/4.jpg",
            alt: "description",
        },
        {
            src: "/assets/images/gallery/5.jpg",
            alt: "description",
        },
        {
            src: "/assets/images/gallery/6.jpg",
            alt: "description",
        },
        {
            src: "/assets/images/gallery/7.jpg",
            alt: "description",
        },
        {
            src: "/assets/images/gallery/8.jpg",
            alt: "description",
        },
    ];
}
