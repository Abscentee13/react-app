import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './User';
import { Card } from './Card';

@Entity()
export class CardAction {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    actionType: string; // Наприклад, 'Створення', 'Редагування', 'Переміщення'

    @ManyToOne(() => User, user => user.cardActions)
    user: User;

    @ManyToOne(() => Card, card => card.cardActions)
    card: Card;
}
