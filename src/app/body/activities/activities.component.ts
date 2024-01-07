import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { CardComponent } from './card/card.component';

@Component({
    selector: 'app-activities',
    standalone: true,
    imports: [CardComponent, NgClass],
    templateUrl: './activities.component.html',
    styleUrl: './activities.component.scss'
})
export class ActivitiesComponent {
    private _indexCounter: number = 0;

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

    async test() {
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
    }
}
