import { Component, ElementRef, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

type ActivityComponentProps = {
    id: string;
    img: string;
}

@Component({
    selector: 'app-activities',
    templateUrl: './activities.component.html',
    styleUrl: './activities.component.scss'
})
export class ActivitiesComponent {

    public activities: ActivityComponentProps[] = [
        {
            id: "0",
            img: "assets/images/activities/1.jpg"
        },
        {
            id: "1",
            img: "assets/images/activities/2.jpg",
        },
        {
            id: "2",
            img: "assets/images/activities/3.jpg",
        }
    ];

    constructor(private translate: TranslateService) {
    }

    @ViewChild('scrollContainer') scrollContainer!: ElementRef<HTMLDivElement>;
    activeIndex = 0;
    onScroll() { // TODO this might have issues
        const element = this.scrollContainer.nativeElement;
        let tmp = Math.round(element.scrollLeft / element.clientWidth);
        this.activeIndex = tmp
    }
}
