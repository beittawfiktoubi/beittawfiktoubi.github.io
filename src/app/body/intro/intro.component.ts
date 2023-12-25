import { Component } from '@angular/core';
import { VideoComponent } from './video/video.component';

@Component({
    selector: 'app-intro',
    standalone: true,
    imports: [VideoComponent],
    templateUrl: './intro.component.html',
    styleUrl: './intro.component.scss'
})
export class IntroComponent {

}
