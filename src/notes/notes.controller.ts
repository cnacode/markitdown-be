import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { get } from 'node:http';
import { Note } from './note.model';
import { CreateNoteDTO, GetNotesFiltersDTO } from './notes.dto';
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
  constructor(private noteService: NotesService) {}

  @Get()
  getAllNotes(): Note[] {
    return this.noteService.getAllNotes();
  }

  @Get('/:userId')
  getAllNotesForUser(
    @Param('userId') userId: string,
    @Query('q') filters: GetNotesFiltersDTO,
  ) {
    return this.noteService.getAllNotesForUser({ userId });
  }

  @Post()
  createNote(@Body() requestBody: CreateNoteDTO): Note {
    const { body: noteBody } = requestBody;
    const note: Note = this.noteService.createNote({ noteBody });
    return note;
  }
}
