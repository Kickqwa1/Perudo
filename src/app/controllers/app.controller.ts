import {
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Redirect,
} from '@nestjs/common';
import { AppService } from '../services/app.service';
import { v4 as uuidv4 } from 'uuid';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Start page';
  }

  @Get('api')
  @Redirect(`api/${uuidv4()}`, 302)
  startPage(): string {
    return;
  }

  @Get('api/:room')
  getRoom(@Param('roomId') roomId: ParseUUIDPipe) {
    return `Welcome to ${roomId}`;
  }
}
