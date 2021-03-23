import { getCustomRepository } from 'typeorm'
import PlayerRepository from '../../repositories/PlayersRepository';

class ListedPlayerService {
    public async execute() {
        const playerRepository = getCustomRepository(PlayerRepository)
        const players = await playerRepository.find();
        return players
    }
}

export default ListedPlayerService