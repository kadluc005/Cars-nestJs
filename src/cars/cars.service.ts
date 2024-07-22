import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Car } from './car.entity';

@Injectable()
export class CarsService {
    constructor(
        @InjectRepository(Car)
        private carsRepository: Repository<Car>,
    ){}

    findAll(): Promise<Car[]>{
        return this.carsRepository.find();
    }

    findOne(id: number): Promise<Car | null>{
        return this.carsRepository.findOneBy({ id });
    }

    create(item: Car): Promise<Car> {
        return this.carsRepository.save(item);
      }
    
    async update(id: number, car: Car): Promise<Car> {
        await this.carsRepository.update(id, car);
        return this.carsRepository.findOne({ where: {id} });
    }
    

    async remove(id: number): Promise<void> {
        await this.carsRepository.delete(id);
    }
}