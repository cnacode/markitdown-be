import { Module } from '@nestjs/common';
import { NotesModule } from './notes/notes.module';
import { MetaController } from './meta/meta.controller';

@Module({
  imports: [NotesModule],
  controllers: [MetaController],
})
export class AppModule {}
