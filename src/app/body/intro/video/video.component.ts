import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-video',
    templateUrl: './video.component.html',
    styleUrl: './video.component.scss'
})
export class VideoComponent {
    @ViewChild('video') video!: ElementRef<HTMLVideoElement>;
    ngAfterViewInit() {
        this.video.nativeElement.muted = true;
        this.video.nativeElement.loop = true;
        this.video.nativeElement.play();
    }
}
