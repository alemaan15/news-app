import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DocumentModel } from '../core/document.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DocumentServive {
  constructor(private readonly http: HttpClient) {}

  apiUrl = 'http://localhost:3000/api/documents';

  getNewDocuments(): Observable<DocumentModel[]> {
    return this.http.get<DocumentModel[]>(`${this.apiUrl}/new`);
  }

  getArchivedDocuments(): Observable<DocumentModel[]> {
    return this.http.get<DocumentModel[]>(`${this.apiUrl}/archived`);
  }

  archiveDocument(id: string): Observable<DocumentModel> {
    return this.http.put<DocumentModel>(`${this.apiUrl}/${id}/archive`, {});
  }

  removeDocument(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}
/${id}`);
  }
}
