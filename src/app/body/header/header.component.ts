import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';


@Component({
    selector: 'app-header',
    standalone: false,
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {
    private topScreenYPos: number = 0;
    private _scrollDir: number = 0;
    private scrollDelayDown: number = 0;
    private scrollDelayUp: number = 0;
    private readonly SCROLL_UP: number = 1;
    private readonly SCROLL_DOWN: number = 0;
    private readonly MOVE_UP: string = 'translateY(-200%)';
    private readonly MOVE_DOWN: string = 'translateY(0)';

    @ViewChild('header', { static: true }) header!: ElementRef;

    @HostListener("window:scroll", []) onWindowScroll() {
        if (this.topScreenYPos < window.scrollY) {
            this.scrollDir = this.SCROLL_DOWN;
            this.scrollDelayDown += window.scrollY - this.topScreenYPos;
            this.scrollDelayUp = 0;
        } else {
            this.scrollDelayUp += this.topScreenYPos - window.scrollY;
            this.scrollDelayDown = 0;
            this.scrollDir = this.SCROLL_UP;
        }
        this.topScreenYPos = window.scrollY;
    }

    get scrollDir(): number {
        return this._scrollDir;
    }

    set scrollDir(value: number) {
        this._scrollDir = value;
        this.changeHeaderPosition(this._scrollDir);
    }

    private changeHeaderPosition(dir: number) {
        if (dir === this.SCROLL_DOWN) {
            if (this.scrollDelayDown > 100) {
                this.header.nativeElement.style.transform = this.MOVE_UP;
            }
        } else {
            if (this.scrollDelayUp > 100) {
                this.header.nativeElement.style.transform = this.MOVE_DOWN;
            }
        }
    }

    public hideHeader() {
        this.header.nativeElement.style.transform = this.MOVE_UP;
    }
}
