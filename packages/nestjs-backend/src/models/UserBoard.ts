import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { User } from './User';
import { Board } from './Board';

@Entity()
export class UserBoard {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, user => user.userBoards)
    user: User;

    @ManyToOne(() => Board, board => board.id)
    board: Board;

    @Column()
    role: string;  // Наприклад, 'admin', 'editor', 'viewer'
}
