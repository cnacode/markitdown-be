import { NoteStatus } from './note.model';

export class CreateNoteDTO {
  id?: string;
  body: string;
  updatedAt: number;
  status: NoteStatus;
}

export class GetNotesFiltersDTO {}
