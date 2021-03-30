import { Module } from '@nestjs/common';
import { NotesModule } from './notes/notes.module';
import { TasksController } from './tasks/tasks.controller';
import { TasksService } from './tasks/tasks.service';

@Module({
  imports: [NotesModule],
  controllers: [TasksController],
  providers: [TasksService],
})
export class AppModule {}
