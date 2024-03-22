import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Timestamp {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    timestamp: Date;

    @Column()
    description: string; // Опис події або дії
}
