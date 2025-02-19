export interface DocumentModel {
  _id?: string;
  title: string;
  description: string;
  content: string;
  date: string;
  author: string;
  archiveDate: string;
}

export enum DocumentStatus {
  NEW = 'new',
  ARCHIVED = 'archived',
}
