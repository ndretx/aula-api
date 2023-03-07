import { Injectable } from '@nestjs/common';


// Informaçoes que são mostradas na tela
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
