import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { UsersController } from './users/users.controller';
// import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entity/users.entity';
import { ArticlesModule } from './articles/articles.module';
import { Article } from './articles/entity/articles.entity';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    UsersModule, ArticlesModule,
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'mauFJcuf5dhRMQrjj',
    database: 'react-blog-app',
    entities: [User, Article],
    synchronize: true,
  }),
    AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
