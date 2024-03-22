import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Comment } from './Comment';
import { CardAction } from './CardAction';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string; // Рекомендується зберігати зашифрований пароль

    @OneToMany(() => Comment, comment => comment.user)
    comments: Comment[];

    @OneToMany(() => CardAction, cardAction => cardAction.user)
    cardActions: CardAction[];
}
