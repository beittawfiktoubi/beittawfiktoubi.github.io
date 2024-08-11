import { Component, ElementRef, ViewChild } from '@angular/core';
import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-video',
    templateUrl: './video.component.html',
    styleUrl: './video.component.scss'
})
export class VideoComponent {
    icon = faArrowDownLong
}
