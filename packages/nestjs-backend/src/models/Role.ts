import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Role {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string; // Наприклад, 'Адміністратор', 'Користувач'

    @Column()
    description: string; // Опис ролі
}
