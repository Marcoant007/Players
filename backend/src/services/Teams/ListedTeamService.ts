import { getCustomRepository } from 'typeorm'
import TeamRepository from '../../repositories/TeamRepository'

class ListedTeamService {
    public async execute() {
        const teamRepository = getCustomRepository(TeamRepository)
        const teams = await teamRepository.find()
        return teams
    }
}

export default ListedTeamService