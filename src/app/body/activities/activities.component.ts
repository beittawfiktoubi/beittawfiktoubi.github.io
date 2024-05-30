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
        { title: "hey", paragraph: "ho" },
        { title: "hey2", paragraph: "ho2" }
    ];
}
