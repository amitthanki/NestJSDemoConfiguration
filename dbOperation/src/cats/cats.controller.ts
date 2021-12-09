import { Body, Controller,Get, HttpCode, HttpException, HttpStatus, Param, ParseIntPipe, Post, Req, Res, UseFilters, UseGuards, UsePipes } from '@nestjs/common';
import {Request,Response} from 'express';
import { CreateCatedto } from '../cats/create-cats-dto';
import {CatsService} from '../cats/cats.service';
import { Cats } from './cats';
import { HttpExceptionFilter } from 'src/service/http-exception-filter';
import { ValidationPipe } from 'src/service/validate-pipe';
import { AuthGuard } from 'src/service/auth.guard';
//import { User } from 'src/service/user.decorator';
import { UserServices } from 'src/service/userService';
import { User } from 'src/entity/user.entity';

@Controller('cats')
export class CatsController {

    constructor(private catsService:CatsService,private catsService1:UserServices){

    }

    @Get()
   async findAll(@Req() request:Request) : Promise<Cats[]>{
       try{
        //return 'This is return Cat';
        return this.catsService.findAll()
    }
    catch{
         throw new HttpException({status:HttpStatus.FORBIDDEN,message:'This is custom message'},HttpStatus.FORBIDDEN);
    }
}
    @Post()
    @UseFilters(new HttpExceptionFilter())
    create() : string{
      //  return "This is create method"
      throw new Error();
    }

    @Get(':id')
    async findOne(@Param() param): Promise<User[]>{
        return this.catsService1.findAll();
    }

    @Get(':id')
    findOne1(@Param('id',ParseIntPipe) id:number): string{
        return 'This is return single ${id} cat'
    }

    @Get()
    async findAll1(): Promise<any[]>{
        return []
    }

    @Post('abc')
   // @UsePipes(new ValidationPipe())
   //@UseGuards(AuthGuard)
    async create1(@Body() createdto : CreateCatedto){
        return 'This is cats post method'
    }

    @Post()
    createeeee(@Res() res: Response) {
    res.status(HttpStatus.CREATED).send();
  }

  createeeeedf(@Res() res: Response) {
    res.status(HttpStatus.CREATED).json([]);
  }
}
