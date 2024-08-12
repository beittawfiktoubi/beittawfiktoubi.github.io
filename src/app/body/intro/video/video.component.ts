import { Component, ElementRef, ViewChild } from '@angular/core';
import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-video',
    templateUrl: './video.component.html',
    styleUrl: './video.component.scss'
})
export class VideoComponent {
    icon = faCircleChevronDown

    scrollDown(): void {
        const introElement = document.querySelector('app-about-toubi');
        if (introElement) {
            introElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
}
