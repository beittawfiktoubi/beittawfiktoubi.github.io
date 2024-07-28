import { Component, ElementRef, ViewChild } from '@angular/core';

type ActivityComponentProps = {
    title: string;
    paragraph: string;
    img: string;
}

@Component({
    selector: 'app-activities',
    templateUrl: './activities.component.html',
    styleUrl: './activities.component.scss'
})
export class ActivitiesComponent {
    public readonly activities: ActivityComponentProps[] = [
        {
            title: "Hosting Museum Guests",
            paragraph: "One a mouth we are hosting special guests of the Haifa muser to help rise mont from diners. the event will oncanplay inhume serving wine",
            img: "assets/images/activities/1.jpg"
        },
        {
            title: "Lecture On Hafia's",
            paragraph: "Gathering a grope of travelers that are interested in understanding the history of the city.",
            img: "assets/images/activities/2.jpg",
        },
        {
            title: "Art Gallery",
            paragraph: "We are hosting a special art gallery event for the local artists to showcase their work.",
            img: "assets/images/activities/3.jpg",
        }
    ];

    @ViewChild('scrollContainer') scrollContainer!: ElementRef<HTMLDivElement>;
    activeIndex = 0;
    onScroll() { // TODO this might have issues
        const element = this.scrollContainer.nativeElement;
        let tmp = Math.round(element.scrollLeft / element.clientWidth);
        this.activeIndex = tmp
    }
}
