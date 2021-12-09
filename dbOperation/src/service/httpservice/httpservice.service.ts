import { Injectable,Inject,Optional } from '@nestjs/common';

@Injectable()
export class HttpserviceService<T> {
    constructor(@Optional() @Inject('HTTP_OPTIONS') private httpClient: T){

    }
}
