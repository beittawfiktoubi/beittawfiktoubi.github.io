import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgFor } from '@angular/common';
import { CardComponent } from './card/card.component';

@Component({
    selector: 'app-activities',
    standalone: true,
    imports: [CardComponent, NgFor],
    templateUrl: './activities.component.html',
    styleUrl: './activities.component.scss'
})
export class ActivitiesComponent {
    private _cards: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName("card-container") as HTMLCollectionOf<HTMLElement>;

    @ViewChild('viewChildHook', { static: true }) viewChildHook: ElementRef | undefined;

    ngOnInit() {
        if (this.viewChildHook != undefined) {
            const value = getComputedStyle(this.viewChildHook.nativeElement).getPropertyValue('--my-variable-name');
            console.log("value", value);
        }
    }

    test() {
        let cc: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName("card-container") as HTMLCollectionOf<HTMLElement>;

        if (this.viewChildHook != undefined) {
            const value = getComputedStyle(cc[1]).getPropertyValue('top');
            // const value = getComputedStyle(this.viewChildHook.nativeElement).getPropertyValue('top');
            console.log("value", value);
        }

        let top = getComputedStyle(this._cards[0]).getPropertyValue('top');
        let left = getComputedStyle(this._cards[0]).getPropertyValue('left');
        for (let i = 0; i < this._cards.length - 1; ++i) {
            let top = getComputedStyle(this._cards[i + 1]).getPropertyValue('top');
            let left = getComputedStyle(this._cards[i + 1]).getPropertyValue('left');
            console.log("top", top);
            console.log("left", left);
            getComputedStyle(this._cards[i]).setProperty("top", top);
            getComputedStyle(this._cards[i]).setProperty("left", left);
        }
        getComputedStyle(this._cards[this._cards.length - 1]).setProperty("top", top);
        getComputedStyle(this._cards[this._cards.length - 1]).setProperty("left", left);
    }
}
