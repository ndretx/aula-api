import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { timingSafeEqual } from 'crypto';


// Informaçoes que são mostradas na tela
@Injectable()
export class AppService {

  private readonly users: User[] = []


  getHello(): string {
    return 'Hello World!';
  }

  createUser(user:User): User[]{
    this.users.push(user);
    return this.users;

  }
  getUser(): User[]{
    return this.users;
  }


}

