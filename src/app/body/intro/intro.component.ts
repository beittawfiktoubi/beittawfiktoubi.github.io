import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-intro',
    templateUrl: './intro.component.html',
    styleUrl: './intro.component.scss',
})
export class IntroComponent {
    constructor(translate: TranslateService) { }
}
