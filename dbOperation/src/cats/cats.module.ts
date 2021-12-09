import { Module } from '@nestjs/common';
import {CatsService} from '../cats/cats.service';
import {CatsController} from '../cats/cats.controller';
import { UserServices } from 'src/service/userService';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entity/user.entity';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers:[CatsController],
    providers:[CatsService,UserServices]
})
export class CatsModule {}
