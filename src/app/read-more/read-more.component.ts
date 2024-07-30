import { Component } from '@angular/core';
import { Link } from '../read-more-card/read-more-card.component';


@Component({
  selector: 'app-read-more',
  templateUrl: './read-more.component.html',
  styleUrl: './read-more.component.scss'
})
export class ReadMoreComponent {
  readonly links: Link[] = [
    {
      id: "0",
    },
    {
      id: "1",
    },
  ]

}
