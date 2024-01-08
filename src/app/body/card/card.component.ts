import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.svg',
    styleUrl: './card.component.scss'
})
export class CardComponent {
    @Input() fillTop = 'white';
}
