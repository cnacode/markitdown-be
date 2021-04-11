import { Injectable } from '@nestjs/common';
import { Note, NoteStatus } from './note.model';

@Injectable()
export class NotesService {
  private notes: Note[] = [];

  getAllNotes(): Note[] {
    return this.notes;
  }

  createNote({ noteBody: body }: { noteBody: string }): Note {
    const updatedAt = Date.now();

    const note: Note = {
      body,
      updatedAt,
      status: NoteStatus.IDLE,
    };

    return note;
  }

  getAllNotesForUser({ userId }: { userId: string }) {
    return [];
  }
}
