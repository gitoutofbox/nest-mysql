import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersController } from './controllers/users/users.controller';
import { User } from './schemas/user.model';
import { UsersService } from './services/users/users.service';

@Module({
  controllers: [UsersController],
  imports: [SequelizeModule.forFeature([User])],
  providers: [UsersService]
})
export class UsersModule {}
