import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { get } from 'node:http';
import { Note } from './note.model';
import { CreateNoteDTO, GetNotesFiltersDTO } from './notes.dto';
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
  constructor(private noteService: NotesService) {}

  @Get('/:userId')
  getAllNotesForUser(
    @Param('userId') userId: string,
    @Query() filters: GetNotesFiltersDTO,
  ) {
    return this.noteService.getAllNotesForUser({ userId, filters });
  }

  @Get('/:userId')
  getNoteCountForUser(@Param('userId') userId: string) {
    return this.noteService.getNoteCountForUser({ userId });
  }

  @Post()
  createNote(@Body() requestBody: CreateNoteDTO): Note {
    const { body: noteBody } = requestBody;
    const note: Note = this.noteService.createNote({ noteBody });
    return note;
  }
}
