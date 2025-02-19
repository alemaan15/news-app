import { Component, inject, OnInit } from '@angular/core';
import { DocumentServive } from '../../services/document.service';
import { DocumentModel } from '../../core/document.model';
import { DocumentCardComponent } from '../components/document-card/document-card.component';

@Component({
  selector: 'app-new-documents',
  standalone: true,
  imports: [DocumentCardComponent],
  templateUrl: './new-documents.component.html',
  styleUrl: './new-documents.component.scss',
})
export class NewDocumentsComponent implements OnInit {
  documentsService = inject(DocumentServive);

  newDocuments: DocumentModel[] = [];
  ngOnInit(): void {
    this.getArchivedDocuments();
  }

  getArchivedDocuments() {
    this.documentsService.getNewDocuments().subscribe((data) => {
      this.newDocuments = data;
    });
  }

  archiveDocumentAction(documentId: string) {
    this.documentsService.archiveDocument(documentId).subscribe(() => {
      this.getArchivedDocuments();
    });
  }
}
