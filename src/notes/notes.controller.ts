import { Controller, Get, Post } from '@nestjs/common';
import { Note } from './note.model';
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
  constructor(private noteService: NotesService) {}

  @Get()
  getAllNotes(): Note[] {
    return this.noteService.getAllNotes();
  }

  @Post()
  createNote(body: string): Note {
    const note: Note = this.noteService.createNote({ body });
    return note;
  }
}
