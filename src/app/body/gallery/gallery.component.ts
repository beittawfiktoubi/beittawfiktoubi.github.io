import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogImageComponent } from 'src/app/dialog-image/dialog-image.component';
import { GalleryDotsComponent } from 'src/app/gallery-dots/gallery-dots.component';
import { showBackdrop } from 'src/app/utils/misc';

export class imageList {
    constructor(
        public src: string,
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
            src: "/assets/images/gallery/1.webp",
        },
        {
            src: "/assets/images/gallery/2.webp",
        },
        {
            src: "/assets/images/gallery/3.webp",
        },
        {
            src: "/assets/images/gallery/4.webp",
        },
        {
            src: "/assets/images/gallery/5.webp",
        },
        {
            src: "/assets/images/gallery/6.webp",
        },
        {
            src: "/assets/images/gallery/7.webp",
        },
        {
            src: "/assets/images/gallery/8.webp",
        },
    ];

    @ViewChild('scrollContainer') scrollContainer!: ElementRef<HTMLDivElement>;
    activeIndex = 0;
    onScroll(dots: GalleryDotsComponent) {
        const element = this.scrollContainer.nativeElement;
        this.activeIndex = dots.scrollHandler(element);
    }

    readonly dialog = inject(MatDialog);

    openImageDialog(i: number) {
        showBackdrop()
        const dialogRef = this.dialog.open(DialogImageComponent, {
            data: { images: this.imageList, index: i }
        });
    }

    handleDotClick = (i: number) => {
        this.scrollToElement(i);
    }

    scrollToElement(i: number): void {
        this.scrollContainer.nativeElement.children[i].scrollIntoView({ block: 'center', inline: 'center', behavior: 'auto' });
    }

}

