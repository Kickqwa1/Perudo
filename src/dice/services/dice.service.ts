import { Injectable } from '@nestjs/common';
import { DiceException } from 'src/exceptions/dice.exception';
import { DiceEnum } from '../enums/dice.enum';

@Injectable()
export class DiceService {
  min = 1;
  max = 6;

  create(count = 1): DiceEnum[] {
    if (count < 1 || count > 6) throw DiceException.wrongCount();

    const diceArray: DiceEnum[] = [];

    for (let i = 0; i < count; i++) {
      diceArray.push(this.getRandomDice());
    }

    return diceArray;
  }

  getRandomDice() {
    const res =
      Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;

    return DiceEnum[res.toString()];
  }
}
