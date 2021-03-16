import { getCustomRepository } from 'typeorm'
import TeamRepository from '../../repositories/TeamRepository';

interface Request {
    id: number
}

class DeletedTeamService {
    public async execute({ id }: Request) {
        const teamDeleted = getCustomRepository(TeamRepository)
        await teamDeleted.delete({ id })
    }
}

export default DeletedTeamService