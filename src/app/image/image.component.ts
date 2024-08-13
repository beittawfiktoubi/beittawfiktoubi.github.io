import { ChangeDetectorRef, Component, ElementRef, Input, ViewChild, viewChild } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrl: './image.component.scss'
})
export class ImageComponent {
  @Input() src!: string;
  @Input() alt?: string;
  smallSrc!: string;

  @ViewChild('blurredImage') blurredImage!: ElementRef<HTMLImageElement>;
  @ViewChild('image') image!: ElementRef<HTMLImageElement>;

  loaded = () => {
    this.blurredImage.nativeElement.classList.add("loaded")
  }

  constructor(private cdr: ChangeDetectorRef) { }


  ngAfterViewInit() {
    if (!this.smallSrc) {
      this.smallSrc = this.src.replace(/(.*)(\..*)/, '$1-small$2');
      this.cdr.detectChanges();
    }
    if (this.image.nativeElement.complete) {
      this.loaded()
    } else {
      this.image.nativeElement.addEventListener("load", this.loaded)
    }
  }
}
