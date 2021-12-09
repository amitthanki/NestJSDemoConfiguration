import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import {ConfigService } from '@nestjs/config';
import * as config from '../config.json';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService,private configService: ConfigService) {

  }

  @Get()
      async showAllUsers() {    
        const name = this.configService.get<string>('asss');        
        console.log(name);
        const qq = config.name;
        console.log(qq);    
         const users =  await this.userService.showAll();
         return users;
        // return {
        //   statusCode: HttpStatus.OK,
        //   message: 'Users fetched successfully',
        //   users
        // };
      }
}
