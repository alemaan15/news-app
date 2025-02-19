import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/new', pathMatch: 'full' },

  {
    path: 'new',
    loadComponent: () =>
      import('./presentation/news-documents/new-documents.component').then(
        (m) => m.NewDocumentsComponent
      ),
  },
  {
    path: 'archived',
    loadComponent: () =>
      import(
        './presentation/archived-documents/archived-documents.component'
      ).then((m) => m.ArchivedDocumentsComponent),
  },
];
