import {Connection,Repository} from 'typeorm';
import {Users} from '../entity/Users.entity';

export const usersProvider = [
    {
        provide:'USERS_REPOSITORY',
        useFactory:(connection:Connection) => connection.getRepository(Users),
        inject: ['DATABASE_CONNECTION'],
    },
]