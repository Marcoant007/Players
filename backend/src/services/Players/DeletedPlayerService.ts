import { getCustomRepository } from 'typeorm'
import PlayerRepository from '../../repositories/PlayersRepository'

interface Request {
    id: number,
}

class DeletedPlayerService {
    public async execute({ id }: Request) {
        const playersDeleted = getCustomRepository(PlayerRepository)
        await playersDeleted.delete(
            { id: id }
        )
    }
}

export default DeletedPlayerService