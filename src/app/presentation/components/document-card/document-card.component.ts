import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DocumentModel } from '../../../core/document.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-document-card',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './document-card.component.html',
  styleUrl: './document-card.component.scss',
})
export class DocumentCardComponent {
  @Input() cardData!: DocumentModel;
  @Output() archiveDocument = new EventEmitter<string>();
  @Output() removeDocument = new EventEmitter<string>();

  archiveDocumentHandler(documentId: string) {
    this.archiveDocument.emit(documentId);
  }

  deleteDocumentHandler(documentId: string) {
    this.removeDocument.emit(documentId);
  }
}
