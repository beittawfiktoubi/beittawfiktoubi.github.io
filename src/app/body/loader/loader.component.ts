import { Component, Input, SimpleChanges } from '@angular/core';
import { faCheck, faSpinner } from '@fortawesome/free-solid-svg-icons';

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
      this.icon = faCheck
      const e = document.querySelector("app-loader")
      e?.classList.add("up")
    }
  }
}
