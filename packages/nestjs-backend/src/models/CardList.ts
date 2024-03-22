import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Board } from './Board';
import { Card } from './Card';
import { Comment } from './Comment';
import { CardAction } from './CardAction';

@Entity()
export class CardList {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @ManyToOne(() => Board, board => board.lists)
    board: Board;

    @OneToMany(() => Card, card => card.cardList)
    cards: Card[];

    @OneToMany(() => Comment, comment => comment.cardList)
    comments: Comment[];

    @OneToMany(() => CardAction, cardAction => cardAction.cardList)
    actions: CardAction[];
}
