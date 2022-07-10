import { HttpException, HttpStatus } from '@nestjs/common';

export class DiceException extends HttpException {
  static wrongCount() {
    return new DiceException(
      {
        code: 'wrong_count',
        message: 'Dice count can not be less then 1 and more then 6',
      },
      HttpStatus.BAD_REQUEST,
    );
  }
}
