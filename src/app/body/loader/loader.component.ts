import { Component, ElementRef, Input, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-loader',
  standalone: false,
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent {
  @Input() isLoading!: boolean;
  @ViewChild('text') text?: ElementRef<HTMLElement>
  logoSize: string = '280px'

  ngOnChanges(_prevChange: SimpleChanges) {
    if (!this.isLoading) {
      if (this.text) {
        this.text.nativeElement.classList.toggle("hide")
      }
    }

  }

}
