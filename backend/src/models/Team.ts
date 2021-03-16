import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm'
import teamsRouter from '../routes/teams.routes';
import Player from './Player';
@Entity('team')
class Team {

    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    awards: string;

    @OneToMany(type => Player, team => Team)
    player: Player[]
}

export default Team