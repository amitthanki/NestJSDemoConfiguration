import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm'
import { UserModule } from './user/user.module';
import { Connection } from 'typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [TypeOrmModule.forRoot(),ConfigModule.forRoot({ envFilePath: `${process.env.NODE_ENV}.env`
    }), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
 
}
