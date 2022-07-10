import { Module } from '@nestjs/common';
import { DiceService } from './services/dice.service';
import { DiceController } from './controllers/dice.controller';

@Module({
  controllers: [DiceController],
  providers: [DiceService],
})
export class DiceModule {}
