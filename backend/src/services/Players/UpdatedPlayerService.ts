import { getCustomRepository } from 'typeorm'
import Player from '../../models/Player'
import PlayerRepository from '../../repositories/PlayersRepository'

interface Request {
    id: number,
    name: string,
    age: number,
    nationality: string,
    position: string

}

class UpdatedPlayerService {
    public async execute(player: Player) {
        const playersrespository = getCustomRepository(PlayerRepository)
        const playersupadted = await playersrespository.save(player)
        return playersupadted
    }
}

export default UpdatedPlayerService