import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hola Mundo desde Tec Web!';
  }

  getGoodbye(): string {
    return 'Adiós Mundo desde Tec Web!';
  }
}
