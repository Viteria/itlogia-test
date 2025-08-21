import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.scss'
})

export class App {
  protected readonly title = signal('itlogia-test');
}
