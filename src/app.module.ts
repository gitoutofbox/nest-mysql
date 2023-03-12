import { MiddlewareConsumer, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { logger } from './midlewares/logger.middleware';
import { ResponseHeadersMiddleware } from './midlewares/response-headers';
import { User } from './modules/users/schemas/user.model';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'shop-sequelize',
      models: [User],
    }),
    UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(logger, ResponseHeadersMiddleware).forRoutes('*')
  }
}
