import { Module } from '@nestjs/common';
import { SizesService } from './sizes.service';
import { SizesController } from './sizes.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {Size} from "./entities/size.entity";

@Module({
  imports: [SequelizeModule.forFeature([Size])],
  controllers: [SizesController],
  providers: [SizesService],
})
export class SizesModule {}
