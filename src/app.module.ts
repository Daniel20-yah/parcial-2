import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';

import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',  
      host: 'localhost',
      port: 3307,      
      username: 'root',  
      password: '1234', 
      database: 'mydb',  
      entities: [
        __dirname + '/*/.entity{.ts,.js}',
        User
      ],
      synchronize: true,  
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
