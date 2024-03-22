import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './User';
import { Card } from './Card';
import { CardList } from './CardList';

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    content: string;

    @ManyToOne(() => User, user => user.comments)
    user: User;

    @ManyToOne(() => Card, card => card.comments)
    card: Card;

    @ManyToOne(() => CardList, cardList => cardList.comments)
    cardList: CardList;
}
