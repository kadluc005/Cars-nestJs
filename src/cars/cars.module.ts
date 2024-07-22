import { Module } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarsController } from './cars.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from './car.entity';

@Module({
  providers: [CarsService],
  controllers: [CarsController],
  imports: [TypeOrmModule.forFeature([Car])]
})
export class CarsModule {}
