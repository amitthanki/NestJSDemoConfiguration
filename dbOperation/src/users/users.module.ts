import { Module } from '@nestjs/common';
import {DatabaseModule} from '../shared-module/database.module';
import {usersProvider} from '../users/users.providers';
import { UsersController } from './users.controller';
import { UsersserviceService } from './usersservice/usersservice.service';

@Module({
  imports:[DatabaseModule],
  controllers: [UsersController],
  providers: [...usersProvider,UsersserviceService]
})
export class UsersModule {}
