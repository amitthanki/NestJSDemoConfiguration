import {createConnection} from 'typeorm';
export const databaseProviders = [
    {
      provide: 'DATABASE_CONNECTION',
      useFactory: async () => await createConnection({
        type: 'mssql',
        host: '20.132.31.22',
        username: 'dev',
        password: 'Welcome1',
        database: 'STd',
        entities: [
            __dirname + '/../**/*.entity{.ts,.js}',
        ],
        synchronize: false,
           options:{
             encrypt:false,

    }
      }),
    },
  ];