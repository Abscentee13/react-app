import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Card } from './Card'; // Імпорт моделі Card

@Entity()
export class CardStatus {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string; // Наприклад, 'В роботі', 'Відкладено', 'Виконано'

    @Column()
    description: string; // Опис статусу

    @OneToMany(() => Card, card => card.status)
    cards: Card[]; // Зв'язок з картками у цьому статусі
}
