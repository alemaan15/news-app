import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { DocumentStatus } from './core/document.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'news-app';
  statusEnum = DocumentStatus;
  currentStatus: DocumentStatus = DocumentStatus.NEW;
  readonly router = inject(Router);
  changeTab(tab: DocumentStatus) {
    this.router.navigate(['/' + tab]);
  }
}
