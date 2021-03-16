import { getCustomRepository } from 'typeorm';
import TeamRepository from '../../repositories/TeamRepository';
interface Request {
    id: number,
    name: string,
    awards: string,
}
class UpdatedTeamService {
    public async execute({ id, name, awards }: Request) {
        const teamRepository = getCustomRepository(TeamRepository)
        const teamUpdated = await teamRepository.save({
            id,
            name,
            awards,
        })
        return teamUpdated;
    }
}

export default UpdatedTeamService