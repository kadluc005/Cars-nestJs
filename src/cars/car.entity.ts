import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Car{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    brand:string;

    @Column()
    description:string;

    @Column('decimal')
    price: number;
}
