import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';


@Component({
    selector: 'app-header',
    standalone: false,
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {
    logoSize: string = '280px'
    constructor(private header: ElementRef<HTMLElement>) { }


    @HostListener("click") onClick() {
        if (this.header.nativeElement.classList.contains("active")) {
            this.logoSize = "280px"
        } else {
            this.header.nativeElement.classList.add("active")
            this.logoSize = "40px"
        }
    }
}
