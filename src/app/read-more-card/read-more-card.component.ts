import { Component, Input } from '@angular/core';

export type Link = {
  id: string;
}

@Component({
  selector: 'app-read-more-card',
  templateUrl: './read-more-card.component.html',
  styleUrl: './read-more-card.component.scss'
})
export class ReadMoreCardComponent {
  @Input() link!: Link;

  readonly section = "links."
  readonly titleKey = ".title"
  readonly linkAddressKey = ".linkAddress"
  readonly linkTextKey = ".linkText"
}
