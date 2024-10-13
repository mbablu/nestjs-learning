/* eslint-disable prettier/prettier */
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export const pgConfig: PostgresConnectionOptions = {
  type: 'postgres',
  url: 'postgresql://nestjs_owner:cKkn1lu8dJeq@ep-withered-frog-a5a4gr0v.us-east-2.aws.neon.tech/nestjs?sslmode=require',
  port: 5432,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
  ssl: {
    rejectUnauthorized: false, // Set to true if you have a valid certificate
  },
};
