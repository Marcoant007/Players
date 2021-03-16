import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm'
import PlayerRepository from '../repositories/PlayersRepository'
import Player from './Player'
import Position from './Position'


@Entity('player_has_position')
class PlayerPosition {
    @PrimaryGeneratedColumn()
    id: number

    @Column('int4')
    player_id: number

    @Column('int4')
    position_id: number

    @ManyToOne(type => Player)
    @JoinColumn({ name: "player_id" })
    player: Player

    @ManyToOne(type => Position, { eager: true })
    @JoinColumn({ name: "position_id" })
    position: Position
}

export default PlayerPosition