import { ChangeDetectionStrategy, Component, HostListener, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, } from '@angular/material/dialog';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { imageList } from '../body/gallery/gallery.component';
@Component({
  selector: 'app-dialog-image',
  templateUrl: './dialog-image.component.html',
  styleUrl: './dialog-image.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogImageComponent {
  icon = faXmark
  index: number = 0;
  _currentImage?: imageList;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { images: imageList[], index: number }) {
    this.index = this.data.index;
    this.currentImage = this.data.index;
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowLeft':
        this.onArrowLeft();
        break;
      case 'ArrowRight':
        this.onArrowRight();
        break;
    }
  }


  get currentImage(): string {
    return this._currentImage?.src || '';
  }

  set currentImage(i: number) {
    this.index = i;
    this._currentImage = this.data.images[i];
  }

  onArrowRight() {
    if (this.index === 0) {
      return
    }
    this.currentImage = (this.index - 1)
  }

  onArrowLeft() {
    if (this.index === this.data.images.length - 1) {
      return
    }
    this.currentImage = (this.index + 1)
  }

}
