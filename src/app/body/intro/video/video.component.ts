import { Component } from '@angular/core';

@Component({
    selector: 'app-video',
    standalone: true,
    imports: [],
    templateUrl: './video.component.html',
    styleUrl: './video.component.scss'
})
export class VideoComponent {
    ngOnInit() {
        const vid = document.getElementById('intro-vid') as HTMLVideoElement;
        vid.muted = true;
        vid.loop = true;
        return vid.play();
    }
}
