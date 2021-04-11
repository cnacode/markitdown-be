import { Controller, Get } from '@nestjs/common';
import { name, version } from '../../package.json';
@Controller('meta')
export class MetaController {
  @Get()
  getMeta() {
    return {
      name,
      version,
    };
  }
}
