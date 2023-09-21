import { Module } from '@nestjs/common';
import { GendersService } from './genders.service';
import { GendersController } from './genders.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {Gender} from "./entities/gender.entity";

@Module({
  imports: [SequelizeModule.forFeature([Gender])],
  controllers: [GendersController],
  providers: [GendersService],
})
export class GendersModule {}
