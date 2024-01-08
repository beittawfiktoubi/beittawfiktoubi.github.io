import { Component } from '@angular/core';

class imageList {
    constructor(
        public src: string,
        public alt: string
    ) { }
}

@Component({
    selector: 'app-activities',
    templateUrl: './activities.component.html',
    styleUrl: './activities.component.scss'
})
export class ActivitiesComponent {
    public readonly imageList: imageList[] = [
        {
            src: "/assets/images/activities/1.jpg",
            alt: "description",
        },
        // {
        //     src: "/assets/images/activities/2.jpg",
        //     alt: "description",
        // },
        // {
        //     src: "/assets/images/activities/3.jpg",
        //     alt: "description",
        // },
        // {
        //     src: "/assets/images/activities/4.jpg",
        //     alt: "description",
        // },
    ];
    public isButtonDisabled: boolean = false;
    private _indexCounter: number = 0;

    ngAfterViewInit() {
        let cc: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName("card-container") as HTMLCollectionOf<HTMLElement>;
        for (let i = 0; i < cc.length; ++i) {
            cc[i].style.top = `calc(13% + (${i + 1} * 5px))`;
            cc[i].style.left = `calc(16% + (${i + 1} * 12px))`;
            cc[i].style.zIndex = `${i + 1}`;
        }
    }

    private _iterateValues(cc: HTMLCollectionOf<HTMLElement>) {

        let top = getComputedStyle(cc[0]).getPropertyValue('top');
        let left = getComputedStyle(cc[0]).getPropertyValue('left');
        let z = getComputedStyle(cc[0]).getPropertyValue('z-index');

        for (let i = 0; i < cc.length - 1; ++i) {
            let top = getComputedStyle(cc[i + 1]).getPropertyValue('top');
            let left = getComputedStyle(cc[i + 1]).getPropertyValue('left');
            let z = getComputedStyle(cc[i + 1]).getPropertyValue('z-index');
            cc[i].style.top = `${top}`;
            cc[i].style.left = `${left}`;
            cc[i].style.zIndex = `${z}`;
        }
        cc[cc.length - 1].style.top = `${top}`;
        cc[cc.length - 1].style.left = `${left}`;
        cc[cc.length - 1].style.zIndex = `${z}`;
    }

    async flipCards() {
        this.isButtonDisabled = true;
        let cc: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName("card-container") as HTMLCollectionOf<HTMLElement>;
        this._iterateValues(cc);

        // last animation part
        const frontCardIndex = cc.length - 1 - this._indexCounter;
        const backCardIndex = (cc.length - this._indexCounter) % cc.length;
        cc[frontCardIndex].style.visibility = "hidden";
        cc[frontCardIndex].style.opacity = "0";
        let left = getComputedStyle(cc[backCardIndex]).getPropertyValue('left');
        cc[frontCardIndex].style.left = "5%";

        await new Promise(f => setTimeout(f, 800));

        cc[frontCardIndex].style.visibility = "visible";
        cc[frontCardIndex].style.opacity = "1";
        cc[frontCardIndex].style.left = left;

        // inc _indexCounter
        this._indexCounter = (this._indexCounter + 1) % cc.length;
        await new Promise(f => setTimeout(f, 1000));
        this.isButtonDisabled = false;

    }
}
