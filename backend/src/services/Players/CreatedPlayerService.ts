import { getCustomRepository } from 'typeorm'
import Player from '../../models/Player'
import PlayerRepository from '../../repositories/PlayersRepository'
interface Request {
    name: string,
    age: number,
    nationality: string,
    team_id: number,
    avatar: string,
    speed: number,
    dri: number,
    shoting: number,
    pass: number,
    defense: number,
    skill: number,
    //playerPositions: []
}
class CreatedPlayerService {
    public async execute({ name, age, nationality, team_id,  avatar ,speed,skill,shoting,pass,dri,defense}: Request): Promise<Player> {
        const playersRepository = getCustomRepository(PlayerRepository)

        const playerCreated = playersRepository.create({
            name,
            age,
            nationality,
            team_id,
            avatar,
            defense,
            dri,
            pass,
            shoting,
            skill,
            speed


        })
        await playersRepository.save(playerCreated)
        return playerCreated
    }
}

export default CreatedPlayerService