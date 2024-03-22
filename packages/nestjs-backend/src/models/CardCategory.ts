import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Card } from './Card';

@Entity()
export class CardCategory {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string; // Назва категорії

    @OneToMany(() => Card, card => card.category)
    cards: Card[]; // Зв'язок з картками у цій категорії
}
