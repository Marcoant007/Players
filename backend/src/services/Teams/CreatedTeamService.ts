import { getCustomRepository } from 'typeorm'
import Team from '../../models/Team'
import TeamRepository from '../../repositories/TeamRepository'
import Player from '../../models/Player'
interface Request {
    name: string,
    awards: string
}
class CreatedTeamService {
    public async execute({ name, awards }: Request): Promise<Team> {
        const teamRepository = getCustomRepository(TeamRepository)
        const teamCreated = teamRepository.create({
            name,
            awards
        })
        await teamRepository.save(teamCreated)
        return teamCreated
    }
}

export default CreatedTeamService