import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { NotesModule } from './notes/notes.module';
import { MetaModule } from './meta/meta.module';

@Module({
  imports: [UsersModule, NotesModule, MetaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
