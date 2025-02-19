import { Component, inject, OnInit } from '@angular/core';
import { DocumentServive } from '../../services/document.service';
import { DocumentModel } from '../../core/document.model';
import { DocumentCardComponent } from '../components/document-card/document-card.component';

@Component({
  selector: 'app-archived-news',
  standalone: true,
  imports: [DocumentCardComponent],
  templateUrl: './archived-documents.component.html',
  styleUrl: './archived-documents.component.scss',
})
export class ArchivedDocumentsComponent implements OnInit {
  documentsService = inject(DocumentServive);
  archivedDocuments: DocumentModel[] = [];
  ngOnInit(): void {
    this.getArchivedDocuments();
  }

  getArchivedDocuments() {
    this.documentsService.getArchivedDocuments().subscribe((data) => {
      this.archivedDocuments = data;
    });
  }

  deleteDocumentAction(documentId: string) {
    this.documentsService.removeDocument(documentId).subscribe(() => {
      this.getArchivedDocuments();
    });
  }
}
