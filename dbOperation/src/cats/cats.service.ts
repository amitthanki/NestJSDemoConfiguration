import { Injectable } from '@nestjs/common';
import {Cats} from '../cats/cats';


@Injectable()
export class CatsService {
    private readonly cats : Cats[] = [];

    create(cats:Cats){
        this.cats.push(cats);
    }

    findAll():Cats[]{
         return this.cats;
    }
}
