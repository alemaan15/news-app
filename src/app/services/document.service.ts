import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DocumentModel } from '../core/document.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DocumentServive {
  constructor(private readonly http: HttpClient) {}

  getNewDocuments(): Observable<DocumentModel[]> {
    return this.http.get<DocumentModel[]>(
      `http://localhost:3000/api/documents/new`
    );
  }

  getArchivedDocuments(): Observable<DocumentModel[]> {
    return this.http.get<DocumentModel[]>(
      `http://localhost:3000/api/documents/archived`
    );
  }

  archiveDocument(id: string): Observable<DocumentModel> {
    return this.http.put<DocumentModel>(
      `http://localhost:3000/api/documents/${id}/archive`,
      {}
    );
  }

  removeDocument(id: string): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/api/documents
/${id}`);
  }
}
