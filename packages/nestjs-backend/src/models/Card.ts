import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { CardList } from './CardList';
import { Comment } from './Comment';
import { CardAction } from './CardAction';
import { CardPriority } from './CardPriority';
import { CardCategory } from './CardCategory'; // Імпорт моделі CardCategory
import { CardStatus } from './CardStatus'; // Імпорт моделі CardStatus

@Entity()
export class Card {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @ManyToOne(() => CardList, cardList => cardList.cards)
    cardList: CardList;

    @ManyToOne(() => CardPriority, priority => priority.cards)
    priority: CardPriority; // Зв'язок з пріоритетом картки

    @ManyToOne(() => CardCategory, category => category.cards) // Зв'язок з категорією картки
    category: CardCategory;

    @ManyToOne(() => CardStatus, status => status.cards) // Зв'язок зі статусом картки
    status: CardStatus;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updatedAt: Date;

    @OneToMany(() => Comment, comment => comment.card)
    comments: Comment[];

    @OneToMany(() => CardAction, cardAction => cardAction.card)
    cardActions: CardAction[];
}
