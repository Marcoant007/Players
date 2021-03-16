import { Entity, PrimaryColumn, Column, ManyToMany, JoinTable, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm'
import Player from './Player'


@Entity()
export class Position {
    @PrimaryColumn()
    id: number;

    @Column()
    name_position_first: string

}

export default Position