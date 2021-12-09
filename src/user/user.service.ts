import { Injectable,HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository,getManager } from 'typeorm';

import { UserEntity } from '../Entity/user.entity';
import { UserDTO } from '../dto/userDto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private usersRepository: Repository<UserEntity>,
      ) {}

      async showAll() {
        return await this.usersRepository.find();
      }
}
