import { Component, ElementRef, Input, SimpleChanges, ViewChild } from '@angular/core';
import { faAnglesDown, faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-loader',
  standalone: false,
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent {
  @Input() isLoading!: boolean;
  logoSize: string = '280px'
  icon = faSpinner
  spin = true


  ngOnChanges(_prevChange: SimpleChanges) {
    if (!this.isLoading) {
      this.spin = false
      this.icon = faAnglesDown
    }
  }


  scrollDown(): void {
    const introElement = document.querySelector('app-intro');
    if (introElement) {
      introElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
