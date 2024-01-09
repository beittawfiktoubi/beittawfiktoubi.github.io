import { Component } from '@angular/core';

@Component({
    selector: 'app-read-more',
    templateUrl: './read-more.component.html',
    styleUrl: './read-more.component.scss'
})
export class ReadMoreComponent {
    private _cardData = [
        { top: 50, scaleStart: 0, scaleLim: 0.90, scaleCount: 1.0 },
        { top: 100, scaleStart: 0, scaleLim: 0.9333, scaleCount: 1.0 },
        { top: 120, scaleStart: 0, scaleLim: 0.9666, scaleCount: 1.0 },
        { top: 140, scaleStart: 0, scaleLim: 1, scaleCount: 1.0 }
    ];
    private _cardList = document.getElementsByClassName("rm-card-con") as HTMLCollectionOf<HTMLElement>;

    ngAfterViewInit() {
        this._cardList = document.getElementsByClassName("rm-card-con") as HTMLCollectionOf<HTMLElement>;

        console.log(this._cardList);
        document.addEventListener('scroll', this._storeScroll, { passive: true });
    }

    private _isNextMidScreen(currentIndex: number) {
        if (this._cardList[currentIndex + 1]) {
            var rect = this._cardList[currentIndex + 1].getBoundingClientRect();
            return rect.top > 0 && rect.top < window.innerHeight / 2;
        }
        return false;
    }

    private _storeScroll = () => {
        for (let i = 0, len = this._cardList.length; i < len; i++) {
            if (this._cardList[i].dataset["pos"] === "fixed") {
                if (this._cardData[i].scaleCount > this._cardData[i].scaleLim && this._isNextMidScreen(i)) {
                    this._cardData[i].scaleCount -= 0.003;
                    this._cardList[i].style.transform = `scale(${this._cardData[i].scaleCount})`;
                }
                if (i === 1 && (this._cardData[i].scaleCount === this._cardData[i].scaleLim)) {
                    let rect = this._cardList[i].getBoundingClientRect();
                    console.log(rect.top);
                }
                continue;
            }

            var rect = this._cardList[i].getBoundingClientRect();
            if (rect.top < this._cardData[i].top) {
                this._cardList[i].style.top = this._cardData[i].top + "px";
                this._cardList[i].style.left = rect.left + "px";
                this._cardList[i].dataset["pos"] = "fixed";
            }
        }

    }
}
