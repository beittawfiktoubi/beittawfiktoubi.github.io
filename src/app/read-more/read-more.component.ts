import { Component, ElementRef, Renderer2, ViewChildren } from '@angular/core';
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
  private observer!: IntersectionObserver;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit() {
    const leftCards: NodeList = this.el.nativeElement.querySelectorAll('.left-card');
    const rightCards: NodeList = this.el.nativeElement.querySelectorAll('.right-card');

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.addClass(entry.target, 'visible');
        } else {
          this.renderer.removeClass(entry.target, 'visible');
        }
      });
    });

    leftCards.forEach((card: any) => {
      this.observer.observe(card);
    });
    rightCards.forEach((card: any) => {
      this.observer.observe(card);
    });
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }


}
