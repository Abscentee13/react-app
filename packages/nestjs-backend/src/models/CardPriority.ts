import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Card } from './Card';

@Entity()
export class CardPriority {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ default: 0 })
    level: number; // Рівень пріоритету (наприклад, 0 - низький, 1 - середній, 2 - високий)

    @OneToMany(() => Card, card => card.priority)
    cards: Card[]; // Зв'язок з картками, які мають цей пріоритет
}
