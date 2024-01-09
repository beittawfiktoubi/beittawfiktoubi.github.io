import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-act-card',
    templateUrl: './act-card.component.svg',
    styleUrl: './act-card.component.scss'
})
export class CardComponent {
    @Input() fillTop = 'white';
}
