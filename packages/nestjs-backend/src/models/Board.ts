
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { CardList } from './CardList';

@Entity()
export class Board {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column({ nullable: true })
    description: string;

    @OneToMany(() => CardList, list => list.board)
    lists: CardList[];
}
