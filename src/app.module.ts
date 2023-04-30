import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PclubModule } from './pclub/pclub.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1980',
      database: 'mydb',
      entities: [],
      synchronize: true,
    }),
    PclubModule,
  ],
})
export class AppModule {}
