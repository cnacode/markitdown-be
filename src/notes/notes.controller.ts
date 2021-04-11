import { Body, Controller, Get, Post } from '@nestjs/common';
import { Note } from './note.model';
import { CreateNoteDTO } from './notes.dto';
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
  constructor(private noteService: NotesService) {}

  @Get()
  getAllNotes(): Note[] {
    return this.noteService.getAllNotes();
  }

  @Post()
  createNote(@Body() body: CreateNoteDTO): Note {
    const note: Note = this.noteService.createNote({ body });
    return note;
  }
}
