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
    {
      id: "2",
    },
    {
      id: "3",
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

  isCardCenterLeft(i: number): boolean {
    if (this.isMobile()) {
      return false;
    }

    if (i === 0) {
      return true;
    }

    return false;
  }

  isCardRight(i: number): boolean {
    if (this.isMobile()) {
      return (i % 2) === 0;
    }

    if (i === 1) {
      return true;
    }

    return false;
  }

  isCardCenterRight(i: number): boolean {
    if (this.isMobile()) {
      return false;
    }

    if (i === 2) {
      return true;
    }

    return false;
  }

  isCardLeft(i: number): boolean {
    if (this.isMobile()) {
      return (i % 2) !== 0;
    }

    if (i === 3) {
      return true;
    }

    return false;
  }

  isDirectionRight(i: number): boolean {
    if (this.isMobile()) {
      return (i % 2) === 0;
    }
    if (i === 1) {
      return true;
    }

    return false;
  }

  isDirectionLeft(i: number): boolean {
    if (this.isMobile()) {
      return (i % 2) !== 0;
    }
    if (i === 3 || i === 0) {
      return true;
    }
    return false;
  }

  isSmall(i: number): boolean {
    if (!this.isMobile()) {
      if (i === 0 || i === 2) {
        return true;
      }
    }
    return false;
  }


  isMobile(): boolean {
    return window.matchMedia('(max-width: 1281px)').matches;
  }

}
