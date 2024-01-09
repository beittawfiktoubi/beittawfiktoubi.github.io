import { Component } from '@angular/core';

@Component({
    selector: 'app-read-more',
    templateUrl: './read-more.component.html',
    styleUrl: './read-more.component.scss'
})
export class ReadMoreComponent {
    private readonly _cardData = [{ top: 100 }, { top: 150 }, { top: 200 }, { top: 50 }];
    private readonly _cardList = document.getElementsByClassName("rm-card-con") as HTMLCollectionOf<HTMLElement>;;

    private _storeScroll = () => {
        // let l: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName("rm-card-con") as HTMLCollectionOf<HTMLElement>;

        for (let i = 0, len = this._cardList.length; i < len; i++) {
            if (this._cardList[i].dataset["pos"] === "fixed")
                continue;

            var rect = this._cardList[i].getBoundingClientRect();
            if (rect.top < this._cardData[i].top) {
                this._cardList[i].style.top = this._cardData[i].top + "px";
                this._cardList[i].style.left = rect.left + "px";
                this._cardList[i].dataset["pos"] = "fixed";
            }
        }

    }
    ngAfterViewInit() {
        document.addEventListener('scroll', this._storeScroll, { passive: true });
    }
}
