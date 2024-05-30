import { Component } from '@angular/core';

type ActivityComponentProps = {
    title: string;
    paragraph: string;
}

@Component({
    selector: 'app-activities',
    templateUrl: './activities.component.html',
    styleUrl: './activities.component.scss'
})
export class ActivitiesComponent {
    public readonly activities: ActivityComponentProps[] = [
        { title: "Hosting Museum Guests", paragraph: "One a mouth we are hosting specail geusts of the Haifa musem to help rise mont from doners. the event will occanally invulem sevring wine and snakes" },
        { title: "hey2", paragraph: "ho2" }
    ];
}
