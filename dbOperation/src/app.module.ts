import { MiddlewareConsumer, Module ,NestModule, RequestMethod} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
import { HttpserviceService } from './service/httpservice/httpservice.service';
import { CatsModule } from './cats/cats.module';
//import { LoggerMiddleware } from './service/logger.middelware';
import {TypeOrmModule} from '@nestjs/typeorm';
import { UserServices } from './service/userService';
import { User } from './entity/user.entity';
import { Connection } from 'typeorm';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
  //  TypeOrmModule.forFeature([User]),
  // TypeOrmModule.forRoot({
  //   type: 'mssql',
  //   host: 'localhost',
  //   username: 'test',
  //   password: 'test',
  //   database: 'FrapperAPIDB',
  //   entities: [User],
  //   synchronize: false,
  //   options:{
  //     encrypt:false,

  //   }
  // }),
  UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule{
 
 // constructor(private connection: Connection){}
//  implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//   consumer.apply(LoggerMiddleware)
//   //.forRoutes('cats');
//   .forRoutes({path:'cats',method:RequestMethod.GET})
//   }
}
