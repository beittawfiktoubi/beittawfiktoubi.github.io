import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.scss'
})
export class ActivityComponent {
  @Input() title: string = 'missing';
  @Input() paragraph: string = 'missing';
  @Input() credit?: string;
  @Input() img?: string;
}
