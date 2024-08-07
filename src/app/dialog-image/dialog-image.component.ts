import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, } from '@angular/material/dialog';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-dialog-image',
  templateUrl: './dialog-image.component.html',
  styleUrl: './dialog-image.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogImageComponent {
  icon = faXmark
  constructor(@Inject(MAT_DIALOG_DATA) public data: { imagePath: string }) {
  }
}
