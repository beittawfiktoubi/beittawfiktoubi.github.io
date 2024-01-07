import { Component, HostBinding, Input } from '@angular/core';

@Component({
    selector: 'app-card',
    standalone: true,
    imports: [],
    templateUrl: './card.component.svg',
    styleUrl: './card.component.scss'
})
export class CardComponent {
    @Input() fillTop = 'white';
}
