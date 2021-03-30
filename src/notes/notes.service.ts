import { Injectable } from '@nestjs/common';
import { Note, NoteStatus } from './note.model';

@Injectable()
export class NotesService {
  private notes: Note[] = [];

  getAllNotes(): Note[] {
    return this.notes;
  }

  createNote({ body }): Note {
    const updatedAt = Date.now();

    const note: Note = {
      body,
      updatedAt,
      status: NoteStatus.IDLE,
    };

    return note;
  }
}
