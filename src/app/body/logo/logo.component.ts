import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-logo',
    templateUrl: './logo.component.svg',
    styleUrl: './logo.component.scss'
})
export class LogoComponent {
    @Input() height!: string

}
