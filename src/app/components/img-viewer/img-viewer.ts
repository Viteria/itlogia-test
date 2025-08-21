import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-img-viewer',
  imports: [],
  templateUrl: './img-viewer.html',
  standalone: true,
  styleUrl: './img-viewer.scss'
})
export class ImgViewer {
  @Input() imageUrl: string | null = null;
  @Output() closed = new EventEmitter<void>();

  closeViewer() {
    this.closed.emit();
  }

}
