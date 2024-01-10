import { Component } from '@angular/core';

@Component({
    selector: 'app-read-more',
    templateUrl: './read-more.component.html',
    styleUrl: './read-more.component.scss'
})
export class ReadMoreComponent {
    private _lastScrollPos = 0;
    private _cardData = [
        { scaleLim: 0.90, scaleCount: 1.0 },
        { scaleLim: 0.9333, scaleCount: 1.0 },
        { scaleLim: 0.9666, scaleCount: 1.0 },
        { scaleLim: 1, scaleCount: 1.0 }
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
            return rect.bottom > window.innerHeight / 1.08;
        }
        return false;
    }

    private _onScrollDown() {
        for (let i = 0; i < this._cardList.length - 1; ++i) {
            if (this._cardData[i].scaleCount > this._cardData[i].scaleLim && this._isNextMidScreen(i)) {
                this._cardData[i].scaleCount -= 0.003;
                this._cardList[i].style.transform = `scale(${this._cardData[i].scaleCount})`;
            }
        }
    }

    private _onScrollUp() {
        for (let i = 0; i < this._cardList.length - 1; ++i) {
            if (this._cardData[i].scaleCount < 1 && this._isNextBotScreen(i)) {
                this._cardData[i].scaleCount += 0.003;
                this._cardList[i].style.transform = `scale(${this._cardData[i].scaleCount})`;
            }
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
