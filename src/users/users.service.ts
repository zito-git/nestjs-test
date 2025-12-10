import { Injectable } from '@nestjs/common';
import { Users } from './users.interface';
import { UserDto } from './dto/user-dto/user-dto';

@Injectable()
export class UsersService {
  private users: Users[] = [];

  insert(userDto: UserDto) {
    this.users.push(userDto);
  }

  findAll() {
    return this.users;
  }

  findOne() {
    const firstUser = this.users[0];
    if (firstUser) {
      return firstUser;
    } else {
      return null;
    }
  }
}
