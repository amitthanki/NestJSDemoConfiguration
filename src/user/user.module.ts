import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import {UserEntity} from '../Entity/user.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity]),ConfigModule],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
