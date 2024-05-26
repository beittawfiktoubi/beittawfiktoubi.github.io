import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
    selector: 'app-logo',
    templateUrl: './logo.component.svg',
    styleUrl: './logo.component.scss'
})
export class LogoComponent {
    @Input() height?: string
    @Input() animation?: boolean

    @ViewChild('logo') logo!: ElementRef<HTMLElement>

    ngAfterViewInit() {
        if (this.animation) {
            this.logo.nativeElement.classList.toggle('animate')
        }
    }

}
