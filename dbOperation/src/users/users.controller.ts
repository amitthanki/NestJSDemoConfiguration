import { Controller, Get } from '@nestjs/common';
import { Users } from 'src/entity/Users.entity';
import { UsersserviceService } from './usersservice/usersservice.service';

@Controller('users')
export class UsersController {

    constructor(private userService:UsersserviceService){

    }

    @Get()
    async findAll(): Promise<Users[]> {
      return this.userService.findAll();
}
}
