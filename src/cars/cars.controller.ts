import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CarsService } from './cars.service';
import { Car } from './car.entity';

@Controller('cars')
export class CarsController {
    constructor(private readonly carsService: CarsService){}

    @Get()
    findAll(): Promise<Car[]> {
        return this.carsService.findAll();
    }

    @Get("car/:id")
    findOne(@Param('id') id: string):Promise<Car>{
        return this.carsService.findOne(+id);
    }

    @Post("create")
    create(@Body() car: Car): Promise<Car>{
        return this.carsService.create(car);
    }
    @Put('update/:id')
    update(@Param('id') id: string, @Body() car: Car): Promise<Car> {
        return this.carsService.update(+id, car);
    }

    @Delete('delete/:id')
    remove(@Param('id') id: string): Promise<void> {
        return this.carsService.remove(+id);
    }
}
