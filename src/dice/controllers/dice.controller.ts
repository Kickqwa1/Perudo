import { Controller, Get } from '@nestjs/common';
import { DiceService } from '../services/dice.service';

@Controller('dice')
export class DiceController {
  constructor(private readonly diceService: DiceService) {}

  @Get()
  create() {
    return this.diceService.create(6);
  }
}
