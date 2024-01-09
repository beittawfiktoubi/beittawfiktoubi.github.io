import { Component } from '@angular/core';

@Component({
    selector: 'app-read-more',
    templateUrl: './read-more.component.html',
    styleUrl: './read-more.component.scss'
})
export class ReadMoreComponent {
    private _lastScrollPos = 0;
    private _cardData = [
        { top: 50, isSticky: false, scaleLim: 0.90, scaleCount: 1.0 },
        { top: 70, isSticky: false, scaleLim: 0.9333, scaleCount: 1.0 },
        { top: 90, isSticky: false, scaleLim: 0.9666, scaleCount: 1.0 },
        { top: 110, isSticky: false, scaleLim: 1, scaleCount: 1.0 }
    ];
    private _cardList = document.getElementsByClassName("rm-card-con") as HTMLCollectionOf<HTMLElement>;

    ngAfterViewInit() {
        this._cardList = document.getElementsByClassName("rm-card-con") as HTMLCollectionOf<HTMLElement>;

        document.addEventListener('scroll', this._onScroll, { passive: true });
    }

    private _isNextMidScreen(currentIndex: number) {
        if (this._cardList[currentIndex + 1]) {
            var rect = this._cardList[currentIndex + 1].getBoundingClientRect();
            return rect.top > 0 && rect.top < window.innerHeight / 2;
        }
        return false;
    }

    private _isNextBotScreen(currentIndex: number) {
        if (this._cardList[currentIndex + 1]) {
            var rect = this._cardList[currentIndex + 1].getBoundingClientRect();
            console.log(rect.bottom);
            return rect.bottom > 0 && rect.bottom < window.innerHeight / 2;
        }
        return false;
    }

    private _isElemPerfectSticky(e: HTMLElement, lim: number) {
        var rect = e.getBoundingClientRect();
        return rect.top === lim;
    }

    private _isElemPerfectSticky2(e: HTMLElement, lim: number) {
        var rect = e.getBoundingClientRect();
        return rect.top === lim;
    }

    private _onScrollDown() {
        for (let i = 0, len = this._cardList.length - 1; i < len; i++) {
            if (this._isElemPerfectSticky(this._cardList[i], this._cardData[i].top)) {
                this._cardData[i].isSticky = true;
            }
            if (this._cardData[i].isSticky) {
                if (this._cardData[i].scaleCount > this._cardData[i].scaleLim && this._isNextMidScreen(i)) {
                    this._cardData[i].scaleCount -= 0.003;
                    this._cardList[i].style.transform = `scale(${this._cardData[i].scaleCount})`;
                }
            }
        }
    }

    private _onScrollUp() {
        for (let i = 0, len = 1; i < len; i++) {
            console.log(this._isElemPerfectSticky2(this._cardList[i], this._cardData[i].top));

            // if (this._isElemPerfectSticky2(this._cardList[i], this._cardData[i].top)) {
            //     this._cardData[i].isSticky = false;
            // }
            // if (!this._cardData[i].isSticky) {
            //     if (this._cardData[i].scaleCount < 1 && this._isNextBotScreen(i)) {
            //         this._cardData[i].scaleCount += 0.003;
            //         this._cardList[i].style.transform = `scale(${this._cardData[i].scaleCount})`;
            //     }
            // }
        }
    }

    private _isScrollUp() {
        let ret = window.scrollY < this._lastScrollPos;
        this._lastScrollPos = window.scrollY;
        return ret;
    }

    private _onScroll = () => {
        if (this._isScrollUp()) {
            this._onScrollUp();
        }
        else {
            this._onScrollDown();
        }
    }
}
