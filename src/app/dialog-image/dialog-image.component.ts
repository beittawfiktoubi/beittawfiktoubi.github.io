import { ChangeDetectionStrategy, Component, HostListener, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, } from '@angular/material/dialog';
import { faCircleChevronLeft, faCircleChevronRight, faXmark } from '@fortawesome/free-solid-svg-icons';
import { imageList } from '../body/gallery/gallery.component';
@Component({
  selector: 'app-dialog-image',
  templateUrl: './dialog-image.component.html',
  styleUrl: './dialog-image.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogImageComponent {
  icon = faXmark
  left = faCircleChevronLeft
  right = faCircleChevronRight
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

  goLeft = () => {
    if (this.index === this.data.images.length - 1) {
      return
    }
    this.currentImage = (this.index + 1)
  }

  goRight = () => {
    if (this.index === 0) {
      return
    }
    this.currentImage = (this.index - 1)
  }

  get disableLeft(): boolean {
    return (this.index !== this.data.images.length - 1)
  }

  get disableRight(): boolean {
    return (this.index !== 0)
  }

  get currentImage(): string {
    return this._currentImage?.src || '';
  }

  set currentImage(i: number) {
    this.index = i;
    this._currentImage = this.data.images[i];
  }

  onArrowRight() {
    this.goRight()
  }

  onArrowLeft() {
    this.goLeft()
  }

}
